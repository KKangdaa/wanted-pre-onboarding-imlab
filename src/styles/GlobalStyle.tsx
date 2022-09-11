import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body,
    html {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    background-color: ${theme.colors.BACKGROUND};

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
    color: inherit;
    text-decoration: none;
    }
    ol,
    li,
    ul {
        list-style: none;
    }
    textarea {
        resize: none;
        outline: none;
    }
    input,
    select,
    button {
        border: none;
        outline: none;
        box-sizing: border-box;
        background: none;
    }
    button {
        background: none;
        cursor: pointer;
    }
}
`;
