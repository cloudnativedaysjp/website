const scrollRegion = document.querySelector('[data-auto-scroll-sessions]')

if (scrollRegion) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let previousTime = 0
  let position = scrollRegion.scrollLeft
  let lastScrollLeft = position
  let resumeAt = 0
  let dragging = false
  let touching = false

  scrollRegion.addEventListener('pointerdown', () => {
    dragging = true
  })
  window.addEventListener('pointerup', () => {
    dragging = false
  })
  window.addEventListener('pointercancel', () => {
    dragging = false
  })

  // Native panning cancels pointer events before the touch gesture ends.
  scrollRegion.addEventListener(
    'touchstart',
    () => {
      touching = true
    },
    { passive: true },
  )

  function endTouch(event) {
    touching = event.touches.length > 0
  }

  window.addEventListener('touchend', endTouch, { passive: true })
  window.addEventListener('touchcancel', endTouch, { passive: true })

  function scroll(time) {
    const elapsed = previousTime ? Math.min(time - previousTime, 100) : 0
    previousTime = time

    // Wait for native scrolling, including momentum after touchend, to settle.
    if (scrollRegion.scrollLeft !== lastScrollLeft) {
      position = scrollRegion.scrollLeft
      resumeAt = time + 150
    }

    if (
      reducedMotion.matches ||
      document.hidden ||
      dragging ||
      touching ||
      time < resumeAt ||
      scrollRegion.matches(':hover, :focus-within')
    ) {
      position = scrollRegion.scrollLeft
    } else {
      const maxPosition = scrollRegion.scrollWidth - scrollRegion.clientWidth
      position =
        position >= maxPosition
          ? 0
          : Math.max(0, Math.min(maxPosition, position + elapsed * 0.03))
      scrollRegion.scrollLeft = position
    }

    lastScrollLeft = scrollRegion.scrollLeft
    window.requestAnimationFrame(scroll)
  }

  window.requestAnimationFrame(scroll)
}
