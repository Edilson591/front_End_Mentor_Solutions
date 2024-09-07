import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: RedHatText-Regular,RedHatText-Bold,sans-serif ;
        src: url("./assets/fonts/static/RedHatText-Regular"),
            url("./assets/fonts/static/RedHatText-Bold");
    }
    html {
        font-size: 62.5%; 
        background: hsl(20, 50%, 98%);
    }
        *, body{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-size: 1.6rem;
        font-family: RedHatText-Regular, sans-serif;
        list-style: none;
        
        
        body {
            margin: 0 auto;
            max-width: 1024px;
            max-width: 90%;
            padding: 5.6vw;
            display: flex;
            align-items: center;
            justify-content: center;
            
            @media (max-width: 1024px) {
            padding: 5.6vw 0; 

        }
        .login {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top-color: hsl(14, 86%, 42%);
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        }
        button {
            border: none;
            cursor: pointer;
        }
        button:focus {
            border: none;
        }

        .conteiner-grid {
            display: grid;
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 3rem;

            .itemSection1 {
                grid-area: 1 / 1 / 1 / 4;
                ;
            }
            .itemSection2 {
                grid-area: 2/1/3/4;
            }
            .itemSection3 {
                grid-area: 1/4/4/4;
                grid-column: span 2;
            }

            @media (max-width: 1024px) {
                display: block;
            }
        }

        .confirm-button {
                margin-top: 20px;
                background-color: hsl(14, 86%, 42%);
                color: hsl(20, 50%, 98%);
                border: none;
                padding: 1.5rem 2rem;
                border-radius: 25px;
                cursor: pointer;
                width: 100%;
                display: block;
                transition: background-color 0.3s ease;

                &:hover {
                    
                }
            }
    }
`;
