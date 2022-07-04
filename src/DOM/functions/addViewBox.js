export default function () {
  const svgs = document.querySelectorAll('svg')
  svgs.forEach(svg => {
    const width = svg.getAttribute('width')
    const height = svg.getAttribute('height')
    if (width && height) {
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`)
    }
  })
}
