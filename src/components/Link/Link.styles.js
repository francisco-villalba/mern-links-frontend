import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 700px) {
        display: grid;
        grid-row-gap: .5rem;
    }

    input {
        padding-left: 1rem;
        height: 3rem;
        width: 20rem;
        font-size: 2rem;
        font-family: var(--main-font);
        transition: .2s;
        border-radius: .5rem;
        background-color: #fff;
        margin-right: 1rem;
        border: 1px solid black;
        border-color: black;
        
        :focus {
            outline: none;
        }
        
        :disabled {
            background-color: var(--color-light);
            border-color: var(--color-light);
            padding-left: 0;
        }

        :nth-of-type(2) {
            width: 40rem;

            :disabled {
                margin-right: 0;
                width: 0rem;
            }
        }

        @media only screen and (max-width: 700px) {
            width: 100%;

            :nth-of-type(2) {
                width: 100%;
                
                :disabled {
                    width: 100%;
                }
            }
        
        }
    }
    
    button {
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
        padding: .7rem 2rem;
        border-radius: .5rem;
        background-color: var(--color-dark);
        color: var(--color-light);
        backface-visibility: hidden;

        :nth-child(1) {
            margin-right: .5rem;
        }
    }

    .cross {
        padding: 0;
        background-color: transparent;
        
        svg {
            font-size: 1rem;
            color: red;
        }
    }
`