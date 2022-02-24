import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
min-height: 100vh;
color: var(--color-light);
animation: fadeIn .2s forwards;

    video {
        position: fixed;
        right: 0;
        top: 0;
        min-height: 100vh;
        min-width: 100vw;
        z-index: -1;
    }

    div {
        padding: 3rem;
        background-color: rgba(0, 0, 0, .5);
        border-radius: .5rem;
    }
`

export const Heading = styled.h1`
    font-size: 4rem;
    margin-bottom: 2rem;
`

export const Form = styled.form`
    display: grid;
    grid-row-gap: 1rem;
    width: 100%;
    transition: height .3s;

    input {
        height: 4rem;
        width: 100%;
        padding-left: 1rem;
        font-size: 2rem;
        border-radius: .5rem;
        border: none;
        font-family: var(--main-font);
        font-weight: 300;

        :focus {
            background-color: #ddd;
            outline: none;
            border: none;
        }
    }
    
    p { 
        font-size: 1.5rem;
        cursor: pointer;
        justify-self: start;
    }
`

export const Button = styled.button`
    height: 4rem;
    width: 100%;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: .5rem;
    border: none;
    transition: .2s;
    backface-visibility: hidden;
    cursor: pointer;
    background-color: green;
    color: var(--color-light);

    :active {
        transform: scale(1.1);
    }
`


