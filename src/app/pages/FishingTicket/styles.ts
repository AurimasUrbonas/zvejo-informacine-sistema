import styled from "styled-components";

export const BilietasStyle = styled.main`
  .text-transfomTicet {
    text-transform: uppercase;
    color: #261e2b;
  }
  .date-grid {
    display: grid;
    grid-template-columns: auto 1fr auto;
  }

  .now-date {
    color: #261e2b;
  }
  .line {
    height: 1px;
    background-color: #aeaeae;
    margin: 12px 32px 0 32px;
  }

  .fishingDashboardList-grid {
    display: grid;
  }
  .form-main {
    margin: 60px;
    display: grid;
    grid-row-gap: 16px;
    grid-template-columns: 1fr;
    background-color: #fff;
    border: 1px solid #e6e6e6;

    padding: 60px 60px;
  }
`;
