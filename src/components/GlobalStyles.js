import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        margin-top:70px;
        font-size:16px;
        /* background-color:rgba(245, 245, 245, 1); */
        background-color: rgba(20, 20, 20, 1);
        color:#636e72;
    }
    input {
        border:none;
        outline:none;
    }
`;

export default GlobalStyles;
