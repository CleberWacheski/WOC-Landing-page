import { MainContainer, MainTextContent } from "./style";
import mainImage from '../../assets/mainImage.svg'
import { Button } from "../button";

export function Main() {
    return (
        <MainContainer>
            <MainTextContent>
                <h1>
                    Pesquise e encontre seus melhores <strong>cursos</strong>  online de forma fácil
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Proin amet ac nunc porta volutpat semper donec eget. Bibendum gravida sagittis tortor eu sit. Tempor molestie eget sit lorem.
                </p>
                <div>
                    <Button buttonType="secondary">
                        Junte-se a nós agora!
                    </Button>
                    <a href="">Ver Todos os Planos</a>
                </div>
            </MainTextContent>
            <div>
                <img src={mainImage} alt="imagem da modelo representado a empresa de cursos online" />
            </div>
        </MainContainer>
    )
}