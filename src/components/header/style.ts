import styled from "styled-components"

export const HeaderContainer = styled.header`
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 35px;
    
    nav {
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 56px;
            

            a {
                &:hover {
                    border-bottom: 1.5px solid #1B1AFF;
                }
            }
        }
    }

    div {
        display: flex;
        gap: 16px;

    }
`