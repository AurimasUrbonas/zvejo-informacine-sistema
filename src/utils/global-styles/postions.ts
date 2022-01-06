import { createGlobalStyle } from "styled-components";

export const GlobalPosition = createGlobalStyle`
 .g-center {
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    align-self: center;
}
.g-right {
    display: flex;
    justify-self: flex-end;
    justify-content: flex-end;
    align-items: flex-end;
    align-self:  flex-end;
}
.g-left {
    display: flex;
    justify-self: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
}
.g-left-center {
    display: flex;
    justify-self: flex-start;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: center;
}
.g-right-center {
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    align-self: center;
}
.g-position-center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
`;
