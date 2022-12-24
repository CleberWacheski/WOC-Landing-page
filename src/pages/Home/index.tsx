import { CoursesComponent } from "../../components/courses";
import { DetailsContent } from "../../components/detailsContent";
import { EndBarContent } from "../../components/endBarContent";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header/Header";
import { Main } from "../../components/main";
import { UniversitiesComponent } from "../../components/universities";

export function Home() {
    return (
        <div>
            <Header />
            <Main />
            <UniversitiesComponent />
            <DetailsContent />
            <CoursesComponent />
            <Footer />
            <EndBarContent />
        </div>

    )
}