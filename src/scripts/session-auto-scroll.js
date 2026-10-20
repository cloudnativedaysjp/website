const scrollRegion = document.querySelector('[data-auto-scroll-sessions]')

if (scrollRegion) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  let previousTime = 0
  let position = scrollRegion.scrollLeft
  let dragging = false

  scrollRegion.addEventListener('pointerdown', () => {
    dragging = true
  })
  window.addEventListener('pointerup', () => {
    dragging = false
  })
  window.addEventListener('pointercancel', () => {
    dragging = false
  })

  function scroll(time) {
    const elapsed = previousTime ? Math.min(time - previousTime, 100) : 0
    previousTime = time

    if (
      reducedMotion.matches ||
      document.hidden ||
      dragging ||
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

    window.requestAnimationFrame(scroll)
  }

  window.requestAnimationFrame(scroll)
}
