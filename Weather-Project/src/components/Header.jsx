import './Header.css'
import { useState } from 'react'

export function Header({isDarkMode, toggleTheme}){
    const [searchValue, setSearchValue] = useState('')

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setSearchValue('')
        }
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
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
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