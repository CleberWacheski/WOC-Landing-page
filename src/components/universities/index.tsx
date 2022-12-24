import { UniversitiesContainer } from "./style";


import Bandung from '../../assets/Group-5.svg'
import Havard from '../../assets/Group-6.svg'
import Stanford from '../../assets/Group-8.svg'
import Google from '../../assets/Group-1.svg'
import Tokopedia from '../../assets/Group-7.svg'
import Cambridge from '../../assets/Group-3.svg'
import Oxford from '../../assets/Group-4.svg'
import Microsoft from '../../assets/Group-9.svg'
import Amazon from '../../assets/Group-10.svg'
import Sansung from '../../assets/Group-2.svg'



export function UniversitiesComponent() {
    return (
        <UniversitiesContainer>
            <div>
                <h1>
                    Aprovada por mais de 100+ universidades e empresas líderes no mercado.
                </h1>
                <small>
                    A WOC tem contribuído para que os alunos possam trabalhar na sua empresa de seus sonho, vamos continuar a manter o nosso compromisso de criar uma geração avançada no mercado em geral.
                </small>
            </div>
            <div>
                <img src={Bandung} alt='Bandung' />
                <img src={Havard} alt='Havard' />
                <img src={Stanford} alt='Stanford' />
                <img src={Google} alt='Google' />
                <img src={Tokopedia} alt='Tokopedia' />
                <img src={Cambridge} alt='Bandung' />
                <img src={Oxford} alt='Havard' />
                <img src={Microsoft} alt='Stanford' />
                <img src={Amazon} alt='Google' />
                <img src={Sansung} alt='Tokopedia' />

            </div>
        </UniversitiesContainer>
    )
}