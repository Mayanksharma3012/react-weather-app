// HWA = Humidity Wind AQI.
import './HWA.css'

export function HWA() {
    return (
        <>
            <div className="HWA">
                <div className="HWA-childs">

                    <div className="Humidity">
                        <h2>Humidity</h2>
                        <h1><i class="fa-solid fa-droplet"></i>15%</h1>
                    </div>

                    <div className="Wind">
                        <h2>Wind</h2>
                        <h1><i class="fa-solid fa-wind"></i>10km/h</h1>
                    </div>
                    <div className="AQI">
                        <h2>AQI</h2>
                        <h1>58</h1>
                    </div>

                </div>
            </div>
        </>
    );
}