import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --color-light: #F0F0F0;
        --color-dark: #111;
        --main-font: 'Work Sans', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px;
        scroll-behavior: smooth;
        font-family: var(--main-font);
        scroll-behavior: smooth;
        
        @media only screen and (min-width: 1400px) {
            font-size: 75%; 
        }

        @media only screen and (max-width: 1100px) {
            font-size: 60%; 
        }
    }

    body {
        color: var(--color-text-dark);
        background-color: var(--color-dark);
    }

    a {
        text-decoration: none;
    }

    .loading {
        font-size: 4rem;
        position: fixed;
        right: 2rem;
        bottom: 2rem;
        color: green;
        animation: spin 1s linear infinite;

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
           to {
                transform: rotate(360deg);
            }
        }
    }

    .container {
        min-height: calc(100vh - 5rem);
        display: flex;
        overflow: hidden;

        @media only screen and (max-width: 900px) {
            flex-direction: column; 
            align-items: center;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        } to {
            opacity: 1;       
        }
    }
`