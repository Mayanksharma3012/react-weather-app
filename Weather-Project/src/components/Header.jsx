import './Header.css'
import { useState } from 'react'

export function Header({isDarkMode, toggleTheme, set_lat_and_lon }){

    const [city_Name, setCity_Name] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (suggestions.length > 0) {
                selectSuggestion(suggestions[0])
            }
        }
    }

    const getSuggestions = async (city_Name) => {
        if (!city_Name.trim()) {
            setSuggestions([])
            setShowSuggestions(false)
            return
        }

        try {
            const coordinates_BaseUrl = import.meta.env.VITE_Base_URL_City_Name;
            const coordinate_Url = `${coordinates_BaseUrl}${city_Name}`
            
            const response = await fetch(coordinate_Url);
            const data = await response.json();
            
            if (data?.results) {
                setSuggestions(data.results.slice(0, 5))
                setShowSuggestions(true)
            } else {
                setSuggestions([])
                setShowSuggestions(false)
            }
        } catch (error) {
            console.error('Error fetching suggestions:', error)
            setSuggestions([])
            setShowSuggestions(false)
        }
    }

    const selectSuggestion = (suggestion) => {
        const cityDisplayName = suggestion.name + (suggestion.admin1 ? `, ${suggestion.admin1}` : '') + (suggestion.country ? `, ${suggestion.country}` : '')
        setCity_Name(cityDisplayName)
        setSuggestions([])
        setShowSuggestions(false)
        set_lat_and_lon({latitude: suggestion.latitude, longitude: suggestion.longitude})
        setCity_Name('')
    }


    return(
        <>
            <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="left-header">
                    <img className="Logo" src="/logo.png" alt="Logo" />
                    <h2>Weather</h2>
                </div>

                <div className={`searchbar-container`}>
                    <div className={`searchbar ${isDarkMode ? 'dark' : 'light'}`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input 
                            type="text" 
                            placeholder="Search City" 
                            maxLength={33}
                            value={city_Name}
                            onChange={(e) => {
                                setCity_Name(e.target.value)
                                getSuggestions(e.target.value)
                            }}
                            onFocus={() => city_Name.trim() && setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                            onKeyDown={handleSearchKeyDown}
                        />
                    </div>
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className={`suggestions-list ${isDarkMode ? 'dark' : 'light'}`}>
                            {suggestions.map((suggestion, index) => (
                                <li 
                                    key={index}
                                    onClick={() => selectSuggestion(suggestion)}
                                    className="suggestion-item"
                                >
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="suggestion-text">
                                        <div className="city-name">{suggestion.name}</div>
                                        <div className="city-details">
                                            {suggestion.admin1 && <span>{suggestion.admin1}</span>}
                                            {suggestion.country && <span>{suggestion.country}</span>}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
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