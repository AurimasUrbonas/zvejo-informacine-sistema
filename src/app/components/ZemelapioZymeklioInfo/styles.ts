import styled from "styled-components";

export const ZemelapioZymeklioInfoWrapper = styled.div`
  position: absolute;
  background-color: white;
  padding: 16px;
  width: 228px;
  height: 400px;
  top: 100px;
  left: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 4px -1px rgb(0 0 0 / 30%);

  .zymeklio-form {
    &-label {
      font-weight: 600;
    }

    &-input {
      width: 100%;
    }

    &-textarea {
      width: 100%;
      height: 260px;
      resize: none;
    }

    &-input-wrapper {
      margin-bottom: 8px;
    }

    &-actions {
      display: flex;
      justify-content: space-between;
    }
  }
`;
