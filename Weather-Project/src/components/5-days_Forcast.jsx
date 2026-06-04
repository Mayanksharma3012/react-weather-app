import './5-days_Forcast.css'

export function Daily_Forcast(){
    return(
        <>
            <div className="days_container">
                <div className="days">
                    <div className="day">
                        <span className='Daily-Weekdays' >today</span>
                        <div className="Daily-Weather"><i class="fa-solid fa-sun"></i></div>
                        <span className="Daily-temp">41° 31°</span>
                        <div className="Daily-Date">3 june</div>
                    </div>
                    <div className="day">
                        <span className='Daily-Weekdays' >thu</span>
                        <div className="Daily-Weather"><i class="fa-solid fa-moon"></i></div>
                        <span className="Daily-temp">41° 31°</span>
                        <div className="Daily-Date">3 june</div>

                    </div>
                    <div className="day">
                        <span className='Daily-Weekdays' >fri</span>
                        <div className="Daily-Weather"><i class="fa-solid fa-cloud-rain"></i></div>
                        <span className="Daily-temp">41° 31°</span>
                        <div className="Daily-Date">3 june</div>

                    </div>
                    <div className="day">
                        <span className='Daily-Weekdays' >sat</span>
                        <div className="Daily-Weather"><i class="fa-solid fa-sun"></i></div>
                        <span className="Daily-temp">41° 31°</span>
                        <div className="Daily-Date">3 june</div>

                    </div>
                    <div className="day">
                        <span className='Daily-Weekdays' >sun</span>
                        <div className="Daily-Weather"><i class="fa-solid fa-sun"></i></div>
                        <span className="Daily-temp">41° 31°</span>
                        <div className="Daily-Date">3 june</div>

                    </div>
                </div>
            </div>
        </>
    );
}