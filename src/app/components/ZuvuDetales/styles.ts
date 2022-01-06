import styled from "styled-components";

export const ZuvuDetalesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .zuvies-pavadinimas {
    margin: 0 auto;
  }

  .zuvies-image {
    width: 60%;
    margin: auto;
  }

  .zuvies-info-wrapper {
    .zuvies-info {
      margin-bottom: 16px;

      .zuvies-info-label {
        font-weight: 600;
      }
    }
  }
`;
