import './Header.css'
import { useState } from 'react'

export function Header({isDarkMode, toggleTheme, set_lat_and_lon }){

    const [city_Name, setCity_Name] = useState('')

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setCity_Name('')
        }
    }


    const getCoordinates = async (city_Name) => {
        const coordinates_BaseUrl = import.meta.env.VITE_Base_URL_City_Name;

        const coordinate_Url = `${coordinates_BaseUrl}${city_Name}`

        const response = await fetch(coordinate_Url);
        const data = await response.json();
        // console.log(data)
        // console.log(data?.results?.[0]?.latitude)
        // console.log(data?.results?.[0]?.longitude)
        const lat = data?.results?.[0]?.latitude;
        const lon = data?.results?.[0]?.longitude; 
        set_lat_and_lon({latitude: lat, longitude: lon})

    }

    return(
        <>
            <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="left-header">
                    <img className="Logo" src="/logo.png" alt="Logo" />
                    <h2>Weather</h2>
                </div>

                <div className={`searchbar ${isDarkMode ? 'dark' : 'light'}`}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input 
                        type="text" 
                        placeholder="Search City" 
                        maxLength={33}
                        value={city_Name}
                        onChange={(e) => {
                            setCity_Name(e.target.value)
                            getCoordinates(e.target.value)
                        }}
                        onKeyDown={handleSearchKeyDown}
                    />
                </div>

                <div className="right-header">
                    <button className={`Location ${isDarkMode ? 'dark' : 'light'}`}>
                        <i className="fa-solid fa-location-crosshairs"></i>
                        Current Location
                    </button>
                    <button className={`themeChanger ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
                        <i className={isDarkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
                    </button>
                </div>
            </div>
        </>
    );
}