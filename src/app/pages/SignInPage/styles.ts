import styled from "styled-components";

export const SignInStyle = styled.section`
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

  .form-login {
    box-shadow: ${(props) => props.theme.boxShadow};
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 24px;
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    &-main {
      display: grid;
      width: 80%;

      grid-template-columns: 1fr;
      grid-row-gap: 15px;
      &-title {
        padding-bottom: 25px;
      }
      &-postion-error {
        grid-row: 1/3;
      }
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
