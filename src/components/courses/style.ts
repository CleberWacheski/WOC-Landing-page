import styled from "styled-components";

export const CoursesContainer = styled.article`
    margin-top: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;

    h1 {
        font-weight: bolder;
        font-size: 48px;
    }

    .gridCards {
        display: grid;
        gap: 24px;
        grid-template: 1fr 1fr 1fr/ 1fr 1fr 1fr;
        max-height: 900px;
    }

`