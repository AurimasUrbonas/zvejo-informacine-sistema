import styled from "styled-components";

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 10vh;
  left: 5%;
  width: 90%;
  max-height: 80%;
  overflow-y: auto;
  background-color: white;
  padding: 24px;
  border-radius: 14px;
  box-shadow: ${(props) => props.theme.boxShadown};
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
