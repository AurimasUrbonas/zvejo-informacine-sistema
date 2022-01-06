import styled from "styled-components/macro";

export const AvatarStyle = styled.div`
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    position: absolute;
    background-color: #fff;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    border: 1px solid #e6e6e6;
    z-index: 1;
    top: 50px;
    color: #707070;
    width: 100%;
    cursor: pointer;
    &-grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
    &-item {
      padding: 10px 16px;
      width: 100%;
    }
    &-item:hover {
      background: ${(props) => props.theme.bkgHeader};
    }
  }

  .avatar {
    cursor: pointer;
    display: grid;
    font-size: 10px;
    color: #707070;
    grid-template-columns: 1fr auto;
    grid-gap: 6px;
  }
`;
