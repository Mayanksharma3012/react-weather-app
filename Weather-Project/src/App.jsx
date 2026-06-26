import './App.css'
import { useState, useCallback, useEffect } from 'react'
import { Header } from './components/Header'
import { City } from './components/City'
import { Hourly_Forcast } from './components/Hourly_Forcast'
import { HWA } from './components/HWA' // HWA = Humidity Wind AQI.
import { Daily_Forcast } from './components/5-days_Forcast'
import { Footer } from './components/Footer'

const LAST_CITY_KEY = 'lastCity'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = useCallback(() => {
    setIsDarkMode(prev => !prev)
  }, [])

  const [lat_and_lon, set_lat_and_lon] = useState({})
  // console.log(lat_and_lon.latitude) 
  // console.log(lat_and_lon.longitude) 

  const [weatherData, setWeatherData] = useState()
    const WeatherInfo = async () => {
      const weather_Base_Url = import.meta.env.VITE_BASE_URL_Weather;
      const weather_Url = `${weather_Base_Url}?latitude=${lat_and_lon.latitude}&longitude=${lat_and_lon.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,is_day&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`
  
      try {
      const response = await fetch(weather_Url);
      const data = await response.json();
      setWeatherData(data);
      // console.log(weatherData)
    } catch (error) {
      alert("Error fetching weather:", error);
    }
    }

    useEffect(() => {
      if (Object.keys(lat_and_lon).length === 0) return;
      WeatherInfo();
    }, [lat_and_lon]);

    // Whenever the selected city changes, save it so it persists across reloads.
    useEffect(() => {
      if (Object.keys(lat_and_lon).length === 0) return;
      try {
        localStorage.setItem(LAST_CITY_KEY, JSON.stringify(lat_and_lon))
      } catch (error) {
        console.error('Error saving last city to localStorage:', error)
      }
    }, [lat_and_lon]);

    // On first load, use the last saved city if one exists; otherwise fall back
    // to Nagpur as the default.
    useEffect(()=>{
      try {
        const saved = localStorage.getItem(LAST_CITY_KEY)
        if (saved) {
          set_lat_and_lon(JSON.parse(saved))
          return
        }
      } catch (error) {
        console.error('Error reading last city from localStorage:', error)
      }
      set_lat_and_lon({ city: 'nagpur' ,latitude: 21.14631, longitude: 79.08491})
    },[])
  

  return(
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} set_lat_and_lon={set_lat_and_lon}/>
      <City isDarkMode={isDarkMode} weatherData={weatherData} city={lat_and_lon}/>
      <Hourly_Forcast isDarkMode={isDarkMode} weatherData={weatherData}/>
      <HWA isDarkMode={isDarkMode} lat_and_lon={lat_and_lon} weatherData={weatherData}/>
      <Daily_Forcast isDarkMode={isDarkMode} weatherData={weatherData}/>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App