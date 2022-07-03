const API_URL = 'https://api.exchangerate.host'

async function getCoef(obj) {
  if (Object.values(obj).every(v => !!v)) {
    const response = await fetch(
      `${API_URL}/latest?base=${obj.from}&symbols=${obj.to}`
    )
    const json = await response.json()
    return json.rates[obj.to]
  }
  return 0
}

async function getCurrencies() {
  const response = await fetch(`${API_URL}/symbols`)
  const currencies = await response.json()
  return Object.values(currencies.symbols)
}

export { getCoef, getCurrencies }
