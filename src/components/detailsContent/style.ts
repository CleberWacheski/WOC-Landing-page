import styled from "styled-components";

export const DetailsContainer = styled.main`
    margin-top: 40px;
    margin-right: 120px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 120px;


`

export const MainTextContent = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    h1 {
        font-weight: bolder;
        font-size: 48px;

        strong {
            font-weight: bolder;
            font-size: 60px;
            border-bottom: 5px #1B1AFF solid;

        }
    }
    p {
        font-size: 18px;
    }
    

`