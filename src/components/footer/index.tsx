import { Circle, CircleContainer, FooterContainer } from "./style";
import marks from '../../assets/icons/marks.svg'
import avatar from '../../assets/avatar.png'
import arrow from '../../assets/icons/arrow.png'

export function Footer() {
    return (
        <FooterContainer>
            <div className="rowOne">
                <div>
                    <img src={marks} alt="icone de aspas" />
                    <h1>
                        O que dizem sobre WOC
                    </h1>
                    <p>
                        Mais de 3000 usuários já foram atendidos pelo World Online Course.
                    </p>
                </div>

                <div className="rowTwo">
                    <span>
                        <small>O que eles disseram</small>
                        <CircleContainer>
                            <Circle active />
                            <Circle />
                            <Circle />
                            <Circle />
                            <Circle />
                        </CircleContainer>
                    </span>

                    <p>
                        “Estudar na WOC é divertido, o currículo é completo, os instrutores são competentes e as tarefas dadas também são relevantes para o atual escopo de trabalho.”
                    </p>

                    <div className="avatarContent">

                        <div className="content">
                            <img src={avatar} alt="imagem de um cliente" />
                            <div>
                                <p className="clientName">
                                    Resky Fernanda
                                </p>
                                <p>
                                    Product Designer at Tokopedia
                                </p>
                            </div>
                        </div>

                        <div className="buttonContent">
                            <button>
                                <img src={arrow} alt="botão com icone de seta" />
                            </button>
                            <button>
                                <img src={arrow} alt="botão com icone de seta" className="right" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}