import styled from "styled-components";

export const EndBarContentContainer = styled.footer`
    margin-top: 120px;
    width: 100%;

`

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #1B1AFF;
    text-align: center;
    padding: 100px;
    gap: 40px ;

    h1 {    
        color: white;
        font-size: 48px;
        max-width: 800px;
    }

    button {
        font-weight: bolder;
    }

`

export const EndBar = styled.div`
    padding: 20px 120px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    


    .footerGrid {
        max-width: 700px;
        display: grid;
        gap: 50px;
        grid-template: 1fr / repeat(3,1fr);

        a {
            font-weight: 500;
            color: white;
            display: block;
        }

        a+ a {
            margin-top: 5px;
        }
    }


`