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

  return(
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
      <City isDarkMode={isDarkMode}/>
      <Hourly_Forcast isDarkMode={isDarkMode}/>
      <HWA isDarkMode={isDarkMode}/>
      <Daily_Forcast isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
