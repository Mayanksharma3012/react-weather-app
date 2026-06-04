import './Header.css'
export function Header({isDarkMode, toggleTheme}){

    return(
        <>
            <div className={`header ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="left-header">
                    <img className="Logo" src="/logo.png" alt="Logo" />
                    <h2>Weather</h2>
                </div>

                <div className={`searchbar ${isDarkMode ? 'dark' : 'light'}`}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <textarea type="text" placeholder="Search City" maxLength={33} />
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