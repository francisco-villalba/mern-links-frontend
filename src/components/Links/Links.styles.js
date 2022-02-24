import styled from "styled-components";

export const Wrapper = styled.div`
    width: 70%;
    padding: 3rem 3rem;
    background-color: var(--color-light);
    display: grid;
    grid-row-gap: 2rem;
    align-content: start;
    font-size: 2rem;
    opacity: 0;
    animation: fadeIn .2s forwards;

    @media only screen and (max-width: 700px) {
        grid-row-gap: 3rem;
        min-height: 100vh;
    }

    @media only screen and (max-width: 900px) {
            width: 100%;
        }

    svg {
        margin-right: 1rem;
        font-size: 2rem;
    }
`
