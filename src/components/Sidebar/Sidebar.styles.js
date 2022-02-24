import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 30%;
    background-color: var(--color-dark);
    padding: 3rem;
    display: grid;
    grid-row-gap: 2.5rem;
    align-content: start;
    opacity: 0;
    animation: fadeIn .2s forwards;

    @media only screen and (max-width: 900px) {
        width: 70%;
        min-height: calc(100vh - 5rem);
    }

    @media only screen and (max-width: 700px) {
        width: 90%;
    }

    font-size: 55%; 
`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    
    textarea, input {
        width: 100%;
        outline: none;
        background-color: #fff;
        border: none;
        border-radius: .5rem;
        transition: .2s;
        color: var(--color-dark);
        font-family: var(--main-font);
        font-size: 2rem;
        padding: 1rem;
        
        :disabled {
            background-color: var(--color-dark);
            border: none;
            color: var(--color-light);
            padding: 0;
            text-align: center;
        }
    }
    
    input {
        height: 3rem;
    }

    textarea {
        height: 10rem;
        resize: none;
        font-size: 1.5rem;
    }
`

export const Button = styled.button`
    // height: 3rem;
    width: 100%;
    background-color: var(--color-dark);
    color: var(--color-light);
    font-size: 1.5rem;
    font-weight: bold;
    padding: .7rem 2rem;
    border: 1px solid var(--color-light);
    border-radius: .5rem;
    cursor: pointer;
`
