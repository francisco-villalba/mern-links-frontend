import styled from 'styled-components'

export const Wrapper = styled.nav`
    height: 5rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-app);
    background-color: var(--color-dark);
    opacity: 0;
    animation: fadeIn .2s forwards;
    
    a {
        font-size: 2rem;
        color: var(--color-light);
        
        :nth-of-type(1) {
            margin-right: 2rem;
        }
    }
`
    
    export const Brand = styled.span`
    font-size: 3rem;
    color: var(--color-light);
    `
    
    export const List = styled.ul`
    display: flex;
    align-items: center;
    
`