// utils/weather.js
export async function fetchWeather (city) {
  const apiKey = 'c9f8d62e9b6e543aee8b59039215644a'
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  const response = await fetch(apiUrl)
  const data = await response.json()

  if (response.ok) {
    return data
  } else {
    throw new Error(data.message || 'Failed to fetch weather data')
  }
}
