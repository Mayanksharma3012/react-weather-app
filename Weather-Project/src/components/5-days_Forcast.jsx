import './5-days_Forcast.css'
import { getWeatherInfo } from '../utils/WeatherCode'

function formatDayName(dateString, index) {
    const date = new Date(dateString)
    if (index === 0) return 'Today'
    return date.toLocaleDateString('en-US', { weekday: 'short' })
}

function formatMonthDay(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function Daily_Forcast({isDarkMode, weatherData}){
    if (!weatherData?.daily?.time?.length) return null;

    const count = Math.min(weatherData.daily.time.length, 5)
    const days = weatherData.daily.time.slice(0, count).map((date, idx) => ({
        day: formatDayName(date, idx),
        date: formatMonthDay(date),
        high: Math.round(weatherData.daily.temperature_2m_max[idx]),
        low: Math.round(weatherData.daily.temperature_2m_min[idx]),
        icon: getWeatherInfo(weatherData.daily.weather_code[idx]).icon
    }))

    return(
        <>
            <div className={`days_container ${isDarkMode ? 'dark' : 'light'}`}>
                <div className={`days ${isDarkMode ? 'dark' : 'light'}`}>
                    {days.map((item, idx) => (
                        <div key={idx} className={`day ${isDarkMode ? 'dark' : 'light'}`}>
                            <span className='Daily-Weekdays'>{item.day}</span>
                            <div className="Daily-Weather">
                                <i className={`fa-solid ${item.icon}`}></i>
                            </div>
                            <span className="Daily-temp">{item.high}° {item.low}°</span>
                            <div className="Daily-Date">{item.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}