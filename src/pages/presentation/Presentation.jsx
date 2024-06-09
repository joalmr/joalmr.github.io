

import { Contact, Profile, Skills } from './components'
import './presentation.scss'

export const Presentation = () => {
    return (
        <section className="presentation">
            <div className="section-content">
                <Profile />
                <Skills />
                <Contact />
            </div>
        </section>
    )
}
