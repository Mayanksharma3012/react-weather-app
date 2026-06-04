import './App.css'
import { Header } from './components/Header'
import { City } from './components/City'
import { Hourly_Forcast } from './components/Hourly_Forcast'
import { HWA } from './components/HWA' // HWA = Humidity Wind AQI.
import { Daily_Forcast } from './components/5-days_Forcast'

function App() {
  
    return(
        <>
            <Header/>
            <City/>
            <Hourly_Forcast/>
            <HWA/>
            <Daily_Forcast/>
        </>
    )
}

export default App
