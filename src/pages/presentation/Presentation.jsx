import { Container } from "./components/Container"
import { Skills } from "./components/Skills"
import { Contact } from "./contact/Contact"

import './presentation.scss'

export const Presentation = () => {
    return (
        <section className="presentation">
            <div className="section-content">
                <Container />
                <Skills />
                <Contact />
            </div>
        </section>
    )
}
