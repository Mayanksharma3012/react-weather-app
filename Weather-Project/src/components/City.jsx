import './City.css'
export function City({isDarkMode, weatherData, city}){
    if (!weatherData?.current) return null;
    
    return(
        <>
            <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
                <h1 className="temp">{weatherData.current.temperature_2m}°</h1>
                <h2 className="city">{city.city}</h2>
                <p className="weather">Clear Sky</p>
            </div>
        </>
    );
}
