import styled from "styled-components";

export const FishingDashboardStyle = styled.main`
  position: relative;

  .upload-data {
    padding: 24px 24px;
    margin-bottom: 40px;
    grid-column-gap: 24px;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    background-color: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.boxShadow};
    position: sticky;
    top: 0;
  }
`;
