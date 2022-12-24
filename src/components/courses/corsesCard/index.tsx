import { Button } from "../../button";
import { CoursesCardContainer } from "./style";

interface CoursesCardProps {
    icon: string;
    title: string;
    description: string;

}

export function CoursesCard({ description, icon, title }: CoursesCardProps) {

    return (
        <CoursesCardContainer>
            <img src={icon} alt="icon" />
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
            <Button buttonType="primary">
                Saber mais
            </Button>
        </CoursesCardContainer>
    )
}