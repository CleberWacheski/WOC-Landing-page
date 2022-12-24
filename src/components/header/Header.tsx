import { HeaderContainer } from './style'
import Logo from '../../assets/logo.svg'
import { Button } from '../button'

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt='Logo da landing page' />
            <nav>
                <ul>
                    <li><a href=""> Home  </a></li>
                    <li><a href=""> Cursos  </a></li>
                    <li><a href=""> Sobre  </a></li>
                    <li><a href=""> FAQ  </a></li>
                    <li><a href=""> Blog  </a></li>
                </ul>
            </nav>
            <div>
                <Button buttonType='default'>
                    Login
                </Button>
                <Button buttonType='primary'>
                    Cadastrar
                </Button>
            </div>
        </HeaderContainer>
    )
}