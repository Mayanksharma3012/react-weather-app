import './Header.css'
export function Header(){


    return(
        <>
            <div className="header">
                <div className="left-header">
                    <img className="Logo"src="/logo.png" alt="Logo" />
                    <h2>Weather Dashboard</h2>
                </div>

                <div className="searchbar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <textarea type="text" placeholder="Search City" maxLength={3} />
                </div>

                <div className="right-header">
                    <button className="Location"><i className="fa-solid fa-location-crosshairs"></i>Current Location</button>
                    <button className="themeChanger"><i class="fa-solid fa-sun"></i></button>
                </div>
            </div>
        </>
    );
}