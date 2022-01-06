import styled from "styled-components";
import image from "../../../assets/main-bkg.jpg";

export const MainPageWrapper = styled.main`
  height: 100%;
  .title-color {
    color: ${(props) => props.theme.main};
    animation: scale 2s forwards cubic-bezier(0.5, 1, 0.89, 1);
  }

  .description-color {
    color: #b8b2b2;
    animation: scale 2s forwards cubic-bezier(0.5, 1, 0.89, 1);
  }

  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }

  .animation-text {
    opacity: 0;
    filter: blur(4px);
  }

  .animation-text {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  .main-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${image});
    background-position: center;
    background-size: cover;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    padding-left: 10%;

    .main-center {
      padding-bottom: 5%;
    }

    .main-start-button {
      font-weight: 600;
      color: ${(props) => props.theme.main};
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid ${(props) => props.theme.main};
      border-radius: 20px;
      padding: 15px 20px;
      cursor: pointer;

      :hover {
        color: #5cdb95;
      }
    }
  }
`;
