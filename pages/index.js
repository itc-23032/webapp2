// pages/index.js
import React, { useState, useEffect } from 'react'
import HotelSearchForm from '../components/HotelSearchForm'
import WeatherDisplay from '../components/WeatherDisplay'
import { fetchWeather } from '../utils/weather'

const IndexPage = () => {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    // 初回のレンダリング時には何もしない
  }, [])

  const searchHotels = async ({ location }) => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?format=json&largeClassCode=japan&middleClassCode=${location}&smallClassCode=${location}&applicationId=1000527583199263260&affiliateId=39caecd3.6f817609.39caecd4.02d42874&applicationSecret=a25a936d14b929b5e22b8a609fd001da51dc8dd8`
      )
      const data = await response.json()
      if (data.hotels) {
        setHotels(data.hotels)
        fetchWeatherData(location) // 検索した都市名を使用して天気情報を取得する
      } else {
        setHotels([])
      }
    } catch (error) {
      console.error('Error fetching hotels:', error)
      setHotels([])
    } finally {
      setLoading(false)
    }
  }

  const fetchWeatherData = async city => {
    try {
      const data = await fetchWeather(city)
      setWeatherData(data)
    } catch (error) {
      console.error('Error fetching weather data:', error)
      setWeatherData(null)
    }
  }

  return (
    <div>
      <h1>Hotel Search App</h1>
      <HotelSearchForm onSearch={searchHotels} />
      {loading ? (
        <p>Loading...</p>
      ) : hotels.length > 0 ? (
        <ul>
          {hotels.map((hotel, index) => (
            <li key={index}>{hotel.hotel[0].hotelBasicInfo.hotelName}</li>
          ))}
        </ul>
      ) : (
        <p>No hotels found.</p>
      )}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  )
}

export default IndexPage
