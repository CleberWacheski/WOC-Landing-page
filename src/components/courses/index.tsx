import { CoursesCard } from "./corsesCard";
import { CoursesContainer } from "./style";
import dock from '../../assets/icons/dock.svg'
import mac from '../../assets/icons/mac.svg'
import mobile from '../../assets/icons/mobile.svg'
import like from '../../assets/icons/like.svg'
import chart from '../../assets/icons/chart.svg'

export function CoursesComponent() {
    return (
        <CoursesContainer>
            <h1>
                Nossos melhores cursos para você
            </h1>
            <div className="gridCards">
                <CoursesCard
                    title="Designer de produto"
                    description=" Aprenda vários materiais de UI UX Design, incluindo UX Research, UI Design, UX Writing e Product Design por 4,5 meses com profissionais de design de produto."
                    icon={dock}
                />
                <CoursesCard
                    title="Desenvolvedor Front-End"
                    description="Aprenda a construir uma exibição de site usando HTML, CSS, Bootstrap e React por 4 meses, que será guiado diretamente por profissionais digitais experientes."
                    icon={mac}
                />
                <CoursesCard
                    title="Desenvolvedor Back-End"
                    description="Aprenda a construir bancos de dados e APIs usando MySQL, Node.js e Express.js por 4 meses, que serão guiados diretamente por profissionais digitais experientes."
                    icon={mac}
                />

                <CoursesCard
                    title="Marketing Digital"
                    description="Aprenda várias estratégias de marketing digital atualizadas com as necessidades do setor por 4,5 a 5,5 meses com profissionais digitais experientes."
                    icon={like}
                />
                <CoursesCard
                    title="Ciência de Dados"
                    description="Aprenda a gerenciar dados usando SQL, Machine Learning e Python por 4,5 meses, que serão guiados diretamente por profissionais experientes em ciência de dados."
                    icon={mobile}
                />
                <CoursesCard
                    title="Gestão de produtos"
                    description="Aprenda material de Gerenciamento de Produto sobre Pesquisa de Produto e Mercado, Design de Produto e Metodologia Ágil com profissionais."
                    icon={chart}
                />

            </div>
        </CoursesContainer>
    )
}