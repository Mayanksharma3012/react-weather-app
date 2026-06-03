import './App.css'
import { Header } from './components/Header'
import { City } from './components/City'
import { Hourly_Forcast } from './components/Hourly_Forcast'
import { HWA } from './components/HWA' // HWA = Humidity Wind AQI.

function App() {
  
    return(
        <>
            <Header/>
            <City/>
            <Hourly_Forcast/>
            <HWA/>
        </>
    )
}

export default App
