import { Container } from "./stlye.ts"

export const Header = ()=>{
    return(
        <Container>
            <div className="right">
                <h2>Davi Serrano</h2>
            </div>

            <div className="left">
                <h3>Projetos</h3>
                <h3>Contatos</h3>
                <h3>Linkedin</h3>
            </div>
        </Container>
    )
}
