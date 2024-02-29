// components/HotelSearchForm.js
import { useState } from 'react'

const HotelSearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState('')
  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    onSearch({ location, checkInDate, checkOutDate })
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Location'
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <input
        type='date'
        placeholder='Check-in Date'
        value={checkInDate}
        onChange={e => setCheckInDate(e.target.value)}
      />
      <input
        type='date'
        placeholder='Check-out Date'
        value={checkOutDate}
        onChange={e => setCheckOutDate(e.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default HotelSearchForm
