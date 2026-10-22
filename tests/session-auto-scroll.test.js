import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { runInNewContext } from 'node:vm'

const source = readFileSync(
  new URL('../src/scripts/session-auto-scroll.js', import.meta.url),
  'utf8',
)

function createScroller() {
  const regionListeners = new Map()
  const windowListeners = new Map()
  let nextFrame
  let time = 1000
  const region = {
    scrollLeft: 0,
    scrollWidth: 1500,
    clientWidth: 300,
    matches: () => false,
    addEventListener: (type, listener) => regionListeners.set(type, listener),
  }

  runInNewContext(source, {
    document: { hidden: false, querySelector: () => region },
    window: {
      matchMedia: () => ({ matches: false }),
      requestAnimationFrame: (callback) => {
        nextFrame = callback
      },
      addEventListener: (type, listener) => windowListeners.set(type, listener),
    },
  })

  return {
    region,
    startTouch() {
      regionListeners.get('pointerdown')?.()
      regionListeners.get('touchstart')?.()
    },
    dispatch(type, event = {}) {
      windowListeners.get(type)?.(event)
    },
    frame(elapsed = 16) {
      time += elapsed
      nextFrame(time)
    },
  }
}

test('keeps auto-scroll paused after pointercancel during touch panning', () => {
  const scroller = createScroller()
  scroller.frame()
  scroller.startTouch()
  scroller.region.scrollLeft = 250
  scroller.frame()
  scroller.dispatch('pointercancel')
  scroller.region.scrollLeft = 300
  scroller.frame()
  assert.equal(scroller.region.scrollLeft, 300)

  scroller.frame(300)
  assert.equal(scroller.region.scrollLeft, 300)

  scroller.dispatch('touchend', { touches: [] })
  scroller.frame()
  assert(scroller.region.scrollLeft > 300)
  assert(scroller.region.scrollLeft < 301)
})

test('waits for momentum scrolling to settle and resumes from its final position', () => {
  const scroller = createScroller()
  scroller.frame()
  scroller.startTouch()
  scroller.dispatch('pointercancel')
  scroller.dispatch('touchend', { touches: [] })

  for (const position of [250, 300, 350]) {
    scroller.region.scrollLeft = position
    scroller.frame()
    assert.equal(scroller.region.scrollLeft, position)
  }

  scroller.frame(100)
  assert.equal(scroller.region.scrollLeft, 350)
  scroller.frame(100)
  assert.equal(scroller.region.scrollLeft, 353)
})

test('keeps pausing until all touches end and releases the pause on touchcancel', () => {
  const scroller = createScroller()
  scroller.frame()
  scroller.startTouch()
  scroller.dispatch('pointercancel')
  scroller.dispatch('touchend', { touches: [{}] })
  scroller.frame(300)
  assert.equal(scroller.region.scrollLeft, 0)

  scroller.dispatch('touchcancel', { touches: [] })
  scroller.frame(100)
  assert.equal(scroller.region.scrollLeft, 3)
})

test('still loops from the right edge to the left edge', () => {
  const scroller = createScroller()
  scroller.region.scrollWidth = scroller.region.clientWidth + 3
  scroller.frame()
  scroller.frame(100)
  assert.equal(scroller.region.scrollLeft, 3)
  scroller.frame()
  assert.equal(scroller.region.scrollLeft, 0)
  scroller.frame(100)
  assert.equal(scroller.region.scrollLeft, 3)
})
