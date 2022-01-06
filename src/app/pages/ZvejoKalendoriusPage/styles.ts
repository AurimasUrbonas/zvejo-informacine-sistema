import styled from "styled-components";

export const ZvejoKalendoriusWrapper = styled.main`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;

  hr {
    margin: 24px 0px;
  }

  .orai-wrapper {
    padding: 24px;
    width: 300px;
    box-shadow: -4px 0px 5px -4px #5cdb95;

    .orai-vieta,
    .orai-siandien-label {
      text-align: center;
      margin: 0px;
    }

    .orai-siandien-label {
      margin-bottom: 24px;
    }

    .orai-siandien-info-wrapper {
      hr {
        margin: 16px;
      }

      .orai-siandien-info-valanda {
        margin: 0px 0px 16px 0px;
      }

      .orai-siandien-info {
        display: flex;
        align-items: center;
        width: 100%;

        .orai-siandien-info-prognoze {
          width: 100%;

          .orai-siandien-info-temperatura {
            margin: 0px;
          }

          .orai-siandien-info-prognoze-detales {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        }
      }
    }
  }

  .rekomendacijos-wrapper {
    display: flex;
    flex-direction: column;
    width: calc(100% - 300px);

    .zvejybos-rekomendacijos-wrapper {
      padding: 24px;
      height: 40%;
      box-shadow: 0px 3px 5px -4px #5cdb95;
      overflow-y: auto;
    }

    .zuvu-rekomendacijos-wrapper {
      padding: 24px;
      height: 60%;
      box-shadow: 0px -3px 5px -4px #5cdb95;
    }

    .rekomendacijos-label {
      margin: 0;
      margin-bottom: 24px;
      width: 100%;
    }
  }
`;
