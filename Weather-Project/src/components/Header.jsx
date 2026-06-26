import './Header.css'
import { useState, useRef, useEffect } from 'react'
 
export function Header({isDarkMode, toggleTheme, set_lat_and_lon }){
 
    const [city_Name, setCity_Name] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [locating, setLocating] = useState(false)
    const debounceTimer = useRef(null)
 
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
 
    // Debounce: wait 300ms after the user stops typing before firing the request.
    // Clears any pending timer on every keystroke so only the *last* keystroke
    // in a burst actually triggers a fetch.
    const handleInputChange = (value) => {
        setCity_Name(value)
 
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current)
        }
 
        debounceTimer.current = setTimeout(() => {
            getSuggestions(value)
        }, 300)
    }
 
    // Clean up any pending debounce timer if the component unmounts mid-type
    useEffect(() => {
        return () => {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current)
            }
        }
    }, [])
 
    const selectSuggestion = (suggestion) => {
        const cityDisplayName = suggestion.name + (suggestion.admin1 ? `, ${suggestion.admin1}` : '') + (suggestion.country ? `, ${suggestion.country}` : '')
        setCity_Name(cityDisplayName)
        setSuggestions([])
        setShowSuggestions(false)
        set_lat_and_lon({city: suggestion.name ,latitude: suggestion.latitude, longitude: suggestion.longitude})
        setCity_Name('')
    }
 
    // Reverse-geocode lat/lon into a city name using OpenStreetMap's Nominatim,
    // since Open-Meteo's geocoding API only supports forward search (name -> coords).
    const reverseGeocode = async (latitude, longitude) => {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        const response = await fetch(url)
        const data = await response.json()
        const address = data?.address || {}
        // Fall back through likely fields since not every location has a "city" key
        return address.city || address.town || address.village || address.county || 'Current Location'
    }
 
    const handleCurrentLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser')
            return
        }
 
        setLocating(true)
 
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords
                try {
                    const cityName = await reverseGeocode(latitude, longitude)
                    set_lat_and_lon({ city: cityName, latitude, longitude })
                } catch (error) {
                    console.error('Error reverse geocoding:', error)
                    // Still set coordinates even if the city name lookup fails,
                    // so weather data can still load.
                    set_lat_and_lon({ city: 'Current Location', latitude, longitude })
                } finally {
                    setLocating(false)
                }
            },
            (error) => {
                console.error('Geolocation error:', error)
                setLocating(false)
                if (error.code === error.PERMISSION_DENIED) {
                    alert('Location access was denied. Please enable location permissions to use this feature.')
                } else {
                    alert('Unable to retrieve your location. Please try again.')
                }
            }
        )
    }
 
 
    return(
        <>
            <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="left-header">
                    <img className="Logo" src="/logo.png" alt="Logo" />
                    <h2>MySky</h2>
                </div>
 
                <div className={`searchbar-container`}>
                    <div className={`searchbar ${isDarkMode ? 'dark' : 'light'}`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search City"
                            maxLength={33}
                            value={city_Name}
                            onChange={(e) => handleInputChange(e.target.value)}
                            onFocus={() => city_Name.trim() && setShowSuggestions(true)}
                            onBlur={() => setShowSuggestions(false)}
                            onKeyDown={handleSearchKeyDown}
                        />
                    </div>
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className={`suggestions-list ${isDarkMode ? 'dark' : 'light'}`}>
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onMouseDown={(e) => {
                                        // onMouseDown fires BEFORE the input's onBlur.
                                        // preventDefault stops the input from losing
                                        // focus/blurring before the click is processed,
                                        // which is what was causing the unreliable clicks.
                                        e.preventDefault()
                                        selectSuggestion(suggestion)
                                    }}
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
                    <button className={`Location ${isDarkMode ? 'dark' : 'light'}`} onClick={handleCurrentLocation} disabled={locating}>
                        <i className={`fa-solid ${locating ? 'fa-spinner fa-spin' : 'fa-location-crosshairs'}`}></i>
                        {locating ? 'Locating...' : 'Current Location'}
                    </button>
                    <button className={`themeChanger ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
                        <i className={isDarkMode ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
                    </button>
                </div>
            </div>
        </>
    );
}