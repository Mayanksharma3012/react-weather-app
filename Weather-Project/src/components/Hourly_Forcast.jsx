import './Hourly_Forcast.css'

export function Hourly_Forcast({isDarkMode}) {

    return (
        <>
            <div className={`hour ${isDarkMode ? 'dark' : 'light'}`}>

                <div className={`hourly ${isDarkMode ? 'dark' : 'light'}`}>
                    <div className="heading_24">
                        <h2>24-Hour Forecast</h2>
                    </div>
                    <div className={`hourlyContainer ${isDarkMode ? 'dark' : 'light'}`}>
                        {Array.from({ length: 24 }).map((_, i) => {
                            const temp = 18 + Math.floor(Math.random() * 15);
                            return (
                                <div key={i} className={`childContainer ${isDarkMode ? 'dark' : 'light'}`}>
                                    <span>{String(i).padStart(2, '0')}:00</span>
                                    <div className="Sun_Moon_logo">
                                        {i < 6 || i >= 20 ? (
                                            <i className="fa-solid fa-moon"></i>
                                        ) : (
                                            <i className="fa-solid fa-sun"></i>
                                        )}
                                    </div>
                                    <div className="hourly_temp">{temp}°</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
                   