import { Button } from "../button";
import { Banner, EndBar, EndBarContentContainer } from "./style";

import logo from '../../assets/logo-footer.svg'

export function EndBarContent() {
    return (
        <EndBarContentContainer>
            <Banner>
                <h1>Junte-se a mais de 3.000 participantes em todo o mundo
                    e conquiste seu sonho!</h1>

                <Button buttonType="primary">
                    Junte-se a nós
                </Button>
            </Banner>

            <EndBar>
                <img src={logo} alt="logo da woc cursos" />

                <div className="footerGrid">
                    <div>
                        <a>Technology Inc.</a>
                        <a>90B Wherever Street</a>
                        <a>99122 Indonesia</a>
                    </div>
                    <div>
                        <a>+1 234 778 991</a>
                        <a>hello@woc.com</a>
                    </div>
                    <div>
                        <a>FAQ</a>
                        <a>Sobre Nós</a>
                        <a>Centro de Comando</a>

                    </div>
                </div>
            </EndBar>
        </EndBarContentContainer>
    )
}