import styled from "styled-components";

export const Wrapper = styled.div`
    justify-self: center;
    border-radius: 50%;
    border: .3rem solid var(--color-light);
    overflow: hidden;
    height: 15rem;
    width: 15rem;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Overlay = styled.label`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(25%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    animation: fadeIn .2s forwards;
    
    input {
        display: none
    }

    svg {
        font-size: 3rem;
        color: var(--color-light)
    }
`