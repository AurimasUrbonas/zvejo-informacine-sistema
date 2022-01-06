import React, { ReactNode } from "react";
import { useContext } from "react";
import { ModalContext } from "../../../utils/store/modal-context";
import { BackdropWrapper, ModalWrapper } from "./styles";

interface IModal {
  children?: ReactNode;
}

const Backdrop = () => {
  const { hideModal } = useContext(ModalContext);
  return <BackdropWrapper onClick={hideModal} />;
};

export default function Modal(props: IModal) {
  return (
    <>
      <Backdrop />
      <ModalWrapper>{props.children}</ModalWrapper>
    </>
  );
}
