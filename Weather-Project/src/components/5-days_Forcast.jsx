import './5-days_Forcast.css'

export function Daily_Forcast({isDarkMode}){
    const days = [
        { day: 'Today', high: 41, low: 31, date: 'Jun 4', icon: 'fa-sun' },
        { day: 'Thu', high: 40, low: 30, date: 'Jun 5', icon: 'fa-cloud-sun' },
        { day: 'Fri', high: 38, low: 28, date: 'Jun 6', icon: 'fa-cloud-rain' },
        { day: 'Sat', high: 42, low: 32, date: 'Jun 7', icon: 'fa-sun' },
        { day: 'Sun', high: 39, low: 29, date: 'Jun 8', icon: 'fa-cloud' }
    ];

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