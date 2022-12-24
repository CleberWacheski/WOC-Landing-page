import styled from "styled-components";

export const UniversitiesContainer = styled.article`
    background-color: #F5F8FE;
    margin-top: 150px;
    padding: 94px 120px 200px ;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 84px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 24px;
        text-align: center;

        max-width: 980px;

        h1 {
            font-weight: bolder;
            font-size: 48px;
        }
        p {
            font-weight: 700;
            color: #9F9F9F;
            font-size: 16px;
        }

    }

    div + div {
            display: grid;
            grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr;
            gap: 81px;

            img {
                margin-right: 40px;
                width: 150px;
            }
    }




`