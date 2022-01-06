import styled from "styled-components";

export const FishingDashboardListStyle = styled.div`
  margin: 60px;

  .fishingDashboardList-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 0 24px 0;
    box-shadow: 1px 1px 1px rgb(0 0 0 / 10%);
    padding: 0 24px;
    background-color: ${(props) => props.theme.white};
    border-radius: 5px;
    height: 100%;
    &-block {
      border-left: solid 1px #e4e4e4;
      padding: 16px 24px;
    }
  }
`;
