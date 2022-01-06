import styled from "styled-components/macro";

export const PageNotFoundStyle = styled.main`
  position: relative;
  height: calc(100vh - 113px);
  background-color: ${(props) => props.theme.white};
  overflow: hidden;

  .notfound {
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    text-align: center;

    h1 {
      text-transform: uppercase;
      text-shadow: -15px 5px 20px #00b1e2;
      color: ${(props) => props.theme.white};
      letter-spacing: -0.05em;
      font-family: "Anton", Arial, sans-serif;
      transition: all 0.25s ease-out;
      margin: 0;
      :hover {
        text-shadow: -16px 6px 15px #00b1e2;
      }
    }
  }
`;
