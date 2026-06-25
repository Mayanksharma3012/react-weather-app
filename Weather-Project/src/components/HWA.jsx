import { useState, useEffect} from 'react';
import './HWA.css'
export function HWA({isDarkMode, lat_and_lon, weatherData}) {

    if (!weatherData?.current) return null;
    
    const [aqi, setAqi] = useState();


    const aqiInfo = async () => {
      const BASE_URL_AQI=import.meta.env.VITE_BASE_URL_AQI
      const aqi_Url = `${BASE_URL_AQI}?latitude=${lat_and_lon.latitude}&longitude=${lat_and_lon.longitude}&current=pm2_5,pm10,carbon_monoxide&hourly=pm2_5,pm10&timezone=auto`

      const response = await fetch(aqi_Url);
      const data = await response.json();
      setAqi(data)
      //   console.log(aqi)
    }
    
    useEffect(()=>{
        aqiInfo()
    },[lat_and_lon])

    if (!aqi?.current) return null;
    
// todo need to work on it
    return (
        <>
            <div className={`HWA ${isDarkMode ? 'dark' : 'light'}`}>
                <div className={`HWA-childs ${isDarkMode ? 'dark' : 'light'}`}>

                    <div className={`Humidity ${isDarkMode ? 'dark' : 'light'}`}>
                        <h2>Humidity</h2>
                        <h1><i className="fa-solid fa-droplet"></i>{weatherData.current.relative_humidity_2m}%</h1>
                    </div>

                    <div className={`Wind ${isDarkMode ? 'dark' : 'light'}`}>
                        <h2>Wind Speed</h2>
                        <h1><i className="fa-solid fa-wind"></i>{weatherData.current.wind_speed_10m}km/h</h1>
                    </div>
                    <div className={`AQI ${isDarkMode ? 'dark' : 'light'}`}>
                        <h2>Air Quality</h2>
                        <h1>{Math.round(aqi.current.pm2_5)} {aqi.current.pm2_5 <= 50 ? 'good' : 'risky'}</h1>
                    </div>

                </div>
            </div>
        </>
    );
}