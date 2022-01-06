import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  position: relative;
  height: 100%;
  border-bottom: 1px solid #e6e6e6;
  z-index: 10;
  min-height: 56px;
  a {
    text-decoration: none;
    padding: 0 24px;
    :visited {
      color: black;
    }
    :hover {
      color: red;
    }
  }
  .name {
    font-size: 10px;
    display: block;
    color: ${(props) => props.theme.dark};
    text-align: center;
  }

  .active-default {
    position: relative;
  }

  .active {
    position: relative;
  }
  .active > .name {
    font-size: 10px;
    display: block;
    color: ${(props) => props.theme.green};
    text-align: center;
    font-weight: 700;
  }

  /* .active > .bubbles {
    background-color: ${(props) => props.theme.white};
    width: 8px;
    height: 8px;
    outline: 1px solid ${(props) => props.theme.green};
    :hover {
      background-color: ${(props) => props.theme.white};
      color: ${(props) => props.theme.green};
    }
  } */

  .logo {
    height: 44px;
  }
  .postion {
    padding: 0 24px 0 0;
  }

  /* .bubbles {
    border-radius: 50%;
    width: 6px;
    height: 6px;
    border: 1px solid transparent;
    background-color: #999;
    :hover {
      background-color: ${(props) => props.theme.green};
    }
  } */
`;
