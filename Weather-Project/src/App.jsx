import './App.css'
import { useState, useCallback } from 'react'
import { Header } from './components/Header'
import { City } from './components/City'
import { Hourly_Forcast } from './components/Hourly_Forcast'
import { HWA } from './components/HWA' // HWA = Humidity Wind AQI.
import { Daily_Forcast } from './components/5-days_Forcast'
import { Footer } from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev)
  }, [])

  const [lat_and_lon, set_lat_and_lon] = useState({})
  // console.log(lat_and_lon.latitude) 
  // console.log(lat_and_lon.longitude) 

  return(
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} set_lat_and_lon={set_lat_and_lon}/>
      <City isDarkMode={isDarkMode} lat_and_lon={lat_and_lon}/>
      <Hourly_Forcast isDarkMode={isDarkMode} lat_and_lon={lat_and_lon}/>
      <HWA isDarkMode={isDarkMode} lat_and_lon={lat_and_lon}/>
      <Daily_Forcast isDarkMode={isDarkMode} lat_and_lon={lat_and_lon}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
