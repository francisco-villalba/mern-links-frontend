import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    animation: fadeIn .2s forwards;
`
    
    export const ThemeGrid = styled.div`
    // width: 100%;
    height: 6rem;
    ${({ theme }) => theme.style }
    background-attachment: center;
    background-size: cover;
    position: relative;
    cursor: pointer;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn .2s forwards;

    svg {
        font-size: 3rem;
        color: green;
    }
`

export const Current = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12rem;
    animation: fadeIn .2s forwards;
    ${({ theme }) => theme.style } 
    background-attachment: center;
    background-size: cover;

    p {
        font-size: 1.5rem;
        color: var(--color-light);
        padding: 1rem;
        background-color: rgba(0, 0, 0, .5)
    }
`