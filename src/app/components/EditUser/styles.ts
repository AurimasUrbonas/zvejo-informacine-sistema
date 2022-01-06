import styled from "styled-components";

export const EditUserWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  hr {
    width: 100%;
    margin: 10px 0px;
  }

  .form-detail {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 300px;
    }
  }
`;
