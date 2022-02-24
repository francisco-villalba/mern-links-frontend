import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: calc(100vh - 5rem);
    ${({ theme }) => theme.style}
    background-size: cover;
    background-position: center;
    opacity: 0;
    animation: fadeIn .2s forwards;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar {
        width: 20rem;
        height: 20rem;
    }
`

export const Info = styled.div`
    display: grid;
    grid-row-gap: 1rem;
    margin-bottom: 3rem;

    h1, p {
        text-align: center;
        color: ${({ theme }) => theme.color};
    }

    h2 {
        font-size: 4rem;
    }

    p {
        font-size: 1.5rem;
    }
`

export const Links = styled.div`
    display: grid;
    grid-row-gap: 1rem;
    width: 20%;

    @media only screen and (max-width: 500px) {
        width: 50%
    }
`

export const Link = styled.a`
    border: 1px solid var(--color-light);
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: var(--color-dark);
    color: var(--color-light);
    font-size: 2rem;

`