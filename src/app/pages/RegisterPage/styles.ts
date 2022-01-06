import styled from "styled-components";

export const RegisterPageStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  .width-img {
    width: 80vh;
  }
  .img-postion {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
  .form-register {
    padding: 24px;
    width: 100%;
    height: 100%;
    box-shadow: ${(props) => props.theme.boxShadow};
    background-color: ${(props) => props.theme.white};
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    &-main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 15px;
      grid-column-gap: 24px;
      width: 80%;

      &-title {
        padding-bottom: 40px;
      }
      &-postion-error {
        grid-column: 1/3;
      }
    }
    &-header-postion {
      grid-column: 1/3;
    }
    &-btn-postion {
      grid-column: 1/3;
    }
  }

  .slide-in-img {
    animation: slide-in-img 1s forwards;
    -webkit-animation: slide-in-img 1s forwards;
  }

  @keyframes slide-in-img {
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }

  @-webkit-keyframes slide-in-img {
    100% {
      transform: translateX(0);
      -webkit-transform: translateX(0);
    }
  }

  .slide-in {
    animation: slide-in 1s forwards;
    -webkit-animation: slide-in 1s forwards;
  }

  @keyframes slide-in {
    100% {
      transform: translateX(0%);
    }
  }

  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(0%);
    }
  }
`;
