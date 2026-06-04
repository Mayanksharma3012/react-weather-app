import './City.css'
export function City({isDarkMode}){
    return(
        <>
            <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
                <h1 className="temp">40°C</h1>
                <h2 className="city">Nagpur</h2>
                <p className="weather">Clear Sky</p>
            </div>
        
        </>
    );
}
