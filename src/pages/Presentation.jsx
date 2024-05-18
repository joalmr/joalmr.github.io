import { Container } from "./presentation/Container"
import { Skills } from "./presentation/Skills"

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
