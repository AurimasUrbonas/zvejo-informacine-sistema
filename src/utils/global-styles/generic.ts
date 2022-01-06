import { createGlobalStyle } from "styled-components";

export const GenericStyle = createGlobalStyle`
.g-input{
    padding: 12px;
    border-radius: 5px;
    outline-color:#80d0a7;
    border: solid 1px #ece9e7;
}
.g-button{
    padding: 16px;
    outline: none;
    border: none;
    border-radius: 30px;
    min-width: 140px;
    height: 40px;
    background-color: #80d0a7;
    color: #ffffff;    
    cursor:pointer;
}

`;
