// components/WeatherDisplay.js
import React from 'react'

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Weather Forecast</h2>
          <p>City: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  )
}

export default WeatherDisplay
