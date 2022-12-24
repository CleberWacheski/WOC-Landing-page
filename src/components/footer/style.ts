import styled from "styled-components";

interface CircleProps {
    active?: boolean
}

export const FooterContainer = styled.footer`
  
    .rowOne {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 120px;
       
        div:first-child{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
            max-width: 450px;

            h1 {
                font-weight: bolder;
                font-size: 48px;
            }
            p {
                font-size: 18px;
            }
        }
        .rowTwo {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 60px;
            padding: 40px 30px 20px 30px;
            border-radius: 25px;
            background-color: #F5F8FE ;

            span {
                display: flex;
                justify-content: space-between; 
                align-items: center;
                width: 100%;
            }

            small {
                font-weight: bolder;
                font-size: 16px;
                color: #1B1AFF;
            }
            p {
                font-weight: bolder;
                font-size: 24px; 
                max-width: 700px;
            }

            .avatarContent {
               display: flex;
               width: 100%;
               justify-content: space-between;

               .content {
                display: flex;
                gap: 16px;  
                flex-direction: row;
                justify-content: center;
                align-items: center;

               }
                p {
                    font-weight: 400;
                }

                .clientName {
                    font-weight: bolder;
                }

                .buttonContent {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    button {
                        width: 45px;
                        height: 45px;
                        border-radius: 999px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;

                        .right {
                            transform: rotate(180deg);
                        }

                    }
                }

            }
        }

    }

`

export const CircleContainer = styled.div`
        display: flex;
        gap: 3px;
`

export const Circle = styled.div<CircleProps>`
    height: 10px;
    width: 10px;
    border-radius: 5px;

    background-color: ${({ active }) => active ? 'black' : '#D9D9D9'};


`