import './Footer.css'

export function Footer({isDarkMode}){
    const openGithub = () => {
        window.open('https://github.com/Mayanksharma3012', '_blank')
    }

    const openLinkedin = () => {
        window.open('https://www.linkedin.com/in/mayank-sharma-43bb27381', '_blank')
    }

    return (
        <>
            <footer className={`Foot ${isDarkMode ? 'dark' : 'light'}`}>
                <span>Designed and Coded by :</span>
                <div className='Details'>
                    <span>© 2026</span>
                    <span className="name">Mayank Sharma</span>
                </div>
                <div className="Links">
                    <div className="linkdin" onClick={openLinkedin} title="Visit LinkedIn">
                        <i className="fa-brands fa-square-linkedin"></i>
                    </div>
                    <div className="github" onClick={openGithub} title="Visit GitHub">
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
            </footer>
        </>
    )
}