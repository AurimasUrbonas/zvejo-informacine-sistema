import React, { createContext, ReactNode, useState } from "react";
import { IZymeklis } from "../types/IZymeklis";

export const ZymeklioInfoContext = createContext({
  zymekliuArray: [] as IZymeklis[],
  zymeklioInfo: false,
  showZymeklioInfo: () => {},
  hideZymeklioInfo: () => {},
  setZymeklius: (zymekliuArray: IZymeklis[]) => {},
  addZymeklis: (zymeklis: IZymeklis) => {},
});

const { Provider } = ZymeklioInfoContext;

interface ZymeklioInfoCContextProvider {
  children?: ReactNode;
}

export const ZymeklioInfoContextProvider = (
  props: ZymeklioInfoCContextProvider
) => {
  const [zymeklioInfo, setZymeklioInfo] = useState(false);

  const [zymekliuArray, setZymekliuArray] = useState<IZymeklis[]>([]);

  const showZymeklioInfo = () => {
    setZymeklioInfo(true);
  };

  const hideZymeklioInfo = () => {
    setZymeklioInfo(false);
  };

  const setZymeklius = (zymekliuArray: IZymeklis[]) => {
    setZymekliuArray(zymekliuArray);
  };

  const addZymeklis = (zymeklis: IZymeklis) => {
    setZymekliuArray((prevState) => [...prevState, zymeklis]);
  };

  const contextValue = {
    zymekliuArray,
    zymeklioInfo,
    showZymeklioInfo,
    hideZymeklioInfo,
    setZymeklius,
    addZymeklis,
  };

  return <Provider value={contextValue}>{props.children}</Provider>;
};
