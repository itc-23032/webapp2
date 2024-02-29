import { useState, useEffect } from 'react'

const HotelSearchApp = () => {
  const [location, setLocation] = useState('')
  const [hotels, setHotels] = useState([])
  const [selectedHotel, setSelectedHotel] = useState(null)

  useEffect(() => {
    // ホテル検索の関数
    const searchHotels = async () => {
      try {
        const response = await fetch(
          `https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?format=json&largeClassCode=japan&middleClassCode=fukuoka&smallClassCode=fukuoka&applicationId=YOUR_APP_ID`
        )
        const data = await response.json()
        setHotels(data.hotels)
      } catch (error) {
        console.error('Error searching hotels:', error)
      }
    }

    searchHotels()
  }, [])

  const handleHotelSelect = hotel => {
    setSelectedHotel(hotel)
  }

  const handleHotelClick = url => {
    window.open(url, '_blank')
  }

  return (
    <div>
      <h1>Hotel Search App</h1>
      <ul>
        {hotels.map(hotel => (
          <li key={hotel.id} onClick={() => handleHotelClick(hotel.url)}>
            {hotel.name}
          </li>
        ))}
      </ul>
      {selectedHotel && (
        <div>
          <h2>{selectedHotel.name}</h2>
          <p>
            Website:{' '}
            <a
              href={selectedHotel.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {selectedHotel.url}
            </a>
          </p>
        </div>
      )}
    </div>
  )
}

export default HotelSearchApp
