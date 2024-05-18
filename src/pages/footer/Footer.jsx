import './footer.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h3>Alonso Massa</h3>
                <p>Desarrollador de aplicaciones</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/alonsomassa" target="_blank">
                        <img src="assets/svg/linkedin.svg" />
                    </a>
                    <a href="https://github.com/joalmr" target="_blank">
                        <img src="assets/svg/github.svg" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
