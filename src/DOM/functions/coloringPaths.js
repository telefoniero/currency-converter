export default function (color) {
  const paths = document.querySelectorAll('path')
  paths.forEach(path => path.setAttribute('fill', color))
}
