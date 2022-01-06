import React, { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext({
  modal: false,
  showModal: () => {},
  hideModal: () => {},
});

const { Provider } = ModalContext;

interface IModalContextProvider {
  children?: ReactNode;
}

export const ModalContextProvider = (props: IModalContextProvider) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
  };

  const contextValue = {
    modal,
    showModal,
    hideModal,
  };

  return <Provider value={contextValue}>{props.children}</Provider>;
};
