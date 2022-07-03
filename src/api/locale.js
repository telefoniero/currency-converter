const API_URL = 'http://www.geoplugin.net'

async function getLocaleCurrency() {
  const response = await fetch(`${API_URL}/json.gp`)
  const data = await response.json()
  return data.geoplugin_currencyCode
}

export { getLocaleCurrency }