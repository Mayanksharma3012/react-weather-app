import './Hourly_Forcast.css'
import { useEffect, useRef } from 'react'
import { getWeatherIcon } from '../utils/weatherCode'

export function Hourly_Forcast({isDarkMode, weatherData}) {

    const scrollRef = useRef(null)
    const currentHourRef = useRef(null)
    const currentHour = new Date().getHours()

    // Scroll the current hour's card into view once the data renders.
    // Runs whenever weatherData changes (e.g. when the user switches city),
    // since the DOM node for "now" gets recreated each time.
    useEffect(() => {
        if (currentHourRef.current && scrollRef.current) {
            currentHourRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
        }
    }, [weatherData])

    return (
        <>
            <div className={`hour ${isDarkMode ? 'dark' : 'light'}`}>
                <div className={`hourly ${isDarkMode ? 'dark' : 'light'}`}>
                    <div className="heading_24">
                        <h2>24-Hour Forecast</h2>
                    </div>
                    <div ref={scrollRef} className={`hourlyContainer ${isDarkMode ? 'dark' : 'light'}`}>
                        {weatherData?.hourly?.temperature_2m ? (
                            weatherData.hourly.temperature_2m.slice(0, 24).map((temp, i) => {
                                const code = weatherData.hourly.weather_code?.[i]
                                const isDay = weatherData.hourly.is_day?.[i]
                                const icon = getWeatherIcon(code, isDay)
                                const isNow = i === currentHour

                                return (
                                    <div
                                        key={i}
                                        ref={isNow ? currentHourRef : null}
                                        className={`childContainer ${isDarkMode ? 'dark' : 'light'} ${isNow ? 'now' : ''}`}
                                    >
                                        <span>{isNow ? 'Now' : `${String(i).padStart(2, '0')}:00`}</span>
                                        <div className="Sun_Moon_logo">
                                            <i className={`fa-solid ${icon}`}></i>
                                        </div>
                                        <div className="hourly_temp">{Math.round(temp)}°</div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="hourly-loading">Loading hourly forecast...</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}