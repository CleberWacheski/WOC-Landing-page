import styled from "styled-components";

export const MainContainer = styled.main`
    margin-top: 70px;
    margin-left: 120px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;


`

export const MainTextContent = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    h1 {
        font-weight: bolder;
        font-size: 60px;

        strong {
            font-weight: bolder;
            font-size: 60px;
            border-bottom: 5px #1B1AFF solid;

        }
    }
    p {
        font-size: 18px;
    }
    
    div {
        display: flex;
        gap: 48px;
        align-items: center;

        a {
            font-weight: 700;
            border-bottom: 2px #1C1C1C solid;
        }
    }

`