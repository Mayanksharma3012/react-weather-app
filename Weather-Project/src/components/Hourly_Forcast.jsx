import './Hourly_Forcast.css'

export function Hourly_Forcast({isDarkMode, weatherData}) {

    return (
        <>
            <div className={`hour ${isDarkMode ? 'dark' : 'light'}`}>

                <div className={`hourly ${isDarkMode ? 'dark' : 'light'}`}>
                    <div className="heading_24">
                        <h2>24-Hour Forecast</h2>
                    </div>
                    <div className={`hourlyContainer ${isDarkMode ? 'dark' : 'light'}`}>
                        {weatherData?.hourly?.temperature_2m ? (
                            weatherData.hourly.temperature_2m.slice(0, 24).map((temp, i) => (
                                <div key={i} className={`childContainer ${isDarkMode ? 'dark' : 'light'}`}>
                                    <span>{String(i).padStart(2, '0')}:00</span>
                                    <div className="Sun_Moon_logo">
                                        {i < 6 || i >= 20 ? (
                                            <i className="fa-solid fa-moon"></i>
                                        ) : (
                                            <i className="fa-solid fa-sun"></i>
                                        )}
                                    </div>
                                    <div className="hourly_temp">{Math.round(temp)}°</div>
                                </div>
                            ))
                        ) : (
                            <div className="hourly-loading">Loading hourly forecast...</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
                   