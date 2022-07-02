export default async function () {
  const response = await fetch('https://api.exchangerate.host/symbols')
  const currencies = await response.json()
  return Object.values(currencies.symbols)
}
