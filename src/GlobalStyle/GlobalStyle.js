import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        transition: 1s;
       text-align:center;
       background:${({theme}) => theme.background};
       color: ${({theme}) =>theme.text};
       font-family: 'Gugi',cursive;
}
`