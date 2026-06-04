import './Footer.css'

export function Footer({isDarkMode}){
    return (
        <>
            <footer className={`Foot ${isDarkMode ? 'dark' : 'light'}`}>
                <span>Designed and Coded by :</span>
                <div className='Details'>
                    <span>© 2026</span>
                    <span className="name">Mayank Sharma</span>
                </div>
                <div className="Links">
                    <div className="linkdin"><i className="fa-brands fa-square-linkedin"></i></div>
                    <div className="github"><i className="fa-brands fa-github"></i></div>
                </div>
            </footer>
        </>
    )
}