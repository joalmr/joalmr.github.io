import './profile.scss'

export const Profile = () => {
    return (
        <div className="container">
            <img src="./assets/img/me-pop.jpeg" alt="me" />
            
            <h1>Alonso Massa</h1>
            <span>Mobile Developer</span>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/alonsomassa" target="_blank">
                    <img src="assets/svg/linkedin.svg" />
                </a>
                <a href="https://github.com/joalmr" target="_blank">
                    <img src="assets/svg/github.svg" />
                </a>
            </div>
        </div>
    )
}
