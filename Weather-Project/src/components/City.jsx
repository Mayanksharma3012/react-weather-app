import './City.css'
import { getWeatherInfo } from '../utils/WeatherCode'

export function City({isDarkMode, weatherData, city}){
    if (!weatherData?.current) return null;
    const condition = getWeatherInfo(weatherData.current.weather_code)

    return(
        <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 className="temp">{weatherData.current.temperature_2m}°</h1>
            <h2 className="city">{city.city}</h2>
            <p className="weather">{condition.text}</p>
        </div>
    );
}
