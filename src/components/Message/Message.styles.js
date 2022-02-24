import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-self: end;
    align-items: center;
    justify-content: center;
    color: var(--color-light);
    font-size: 2rem;
    background-color: red;
    position: fixed;
    z-index: 2;
    bottom: 0;
    right: 0;
    opacity: 0;
    animation: fadeup 5s forwards;

    @keyframes fadeup {
        0% {
            opacity: 0;
            transform: translateY(5rem);
        } 5% {
            opacity: 1;
            transform: translateY(0);
        } 95% {
            opacity: 1;
            transform: translateY(0);
        } 100% {
            opacity: 0;
            transform: translateY(5rem);
        }
    }
`