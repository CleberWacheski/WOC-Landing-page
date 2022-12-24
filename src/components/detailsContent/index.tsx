import { Button } from "../button";
import { DetailsContainer, MainTextContent } from "./style";

import detailsImage from '../../assets/detailsImage.svg'

export function DetailsContent() {
    return (
        <DetailsContainer>
            <div>
                <img src={detailsImage} alt="imagem da modelo representado a empresa de cursos online" />
            </div>
            <MainTextContent>
                <h1>
                    Estamos comprometidos para ajudá-lo no processo de realização de seus sonhos
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Nibh proin proin eget neque. Tortor tempus massa dui viverra in justo gravida. At justo eget volutpat leo fermentum scelerisque cursus sit donec. Nisl id velit faucibus vel. Amet cras diam non habitasse a arcu. Urna nulla felis diam nisl et.
                </p>
                <div>
                    <Button buttonType="secondary">
                        Ver detalhes
                    </Button>
                </div>


            </MainTextContent>
        </DetailsContainer>
    )
}