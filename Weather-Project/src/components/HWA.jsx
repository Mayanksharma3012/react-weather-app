import './HWA.css'

export function HWA({isDarkMode}) {
    return (
        <>
            <div className={`HWA ${isDarkMode ? 'dark' : 'light'}`}>
                <div className={`HWA-childs ${isDarkMode ? 'dark' : 'light'}`}>

                    <div className={`Humidity ${isDarkMode ? 'dark' : 'light'}`}>
                        <h2>Humidity</h2>
                        <h1><i className="fa-solid fa-droplet"></i>65%</h1>
                    </div>

                    <div className={`Wind ${isDarkMode ? 'dark' : 'light'}`}>
                        <h2>Wind Speed</h2>
                        <h1><i className="fa-solid fa-wind"></i>12 km/h</h1>
                    </div>
                    <div className={`AQI ${isDarkMode ? 'dark' : 'light'}`}>
                        <h2>Air Quality</h2>
                        <h1>72 Good</h1>
                    </div>

                </div>
            </div>
        </>
    );
}