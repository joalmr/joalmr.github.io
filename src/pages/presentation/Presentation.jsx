import { Container } from "./components/Container"
import { Skills } from "./components/Skills"

import './presentation.scss'

export const Presentation = () => {
    return (
        <section className="presentation">
            <div className="section-content">
                <Container />
                <Skills />
            </div>
        </section>
    )
}
