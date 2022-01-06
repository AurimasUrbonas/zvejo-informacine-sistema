import { FormEvent, useContext, useEffect, useState } from "react";
import { ZymeklioInfoContext } from "../../../utils/store/zymeklio-info-context";
import { IZymeklis } from "../../../utils/types/IZymeklis";
import ZymeklioInfo from "../../api/ZymeklioInfo/ZymeklioInfo";
import { ZemelapioZymeklioInfoWrapper } from "./styles";

interface IZemelapioZymeklioInfo {
  zymeklis: IZymeklis;
}

export default function ZemelapioZymeklioInfo(props: IZemelapioZymeklioInfo) {
  const { zymeklis } = props;

  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");

  const { zymekliuArray, hideZymeklioInfo, setZymeklius, addZymeklis } =
    useContext(ZymeklioInfoContext);

  const { handleZymeklioInfoSave, handleZymeklioInfoDelete } = ZymeklioInfo();

  useEffect(() => {
    setInput(zymeklis.pavadinimas);
    setTextarea(zymeklis.informacija);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const latlng = zymeklis.id.split("*");

    let data = {
      id: zymeklis.id,
      pavadinimas: input,
      informacija: textarea,
      position: {
        lat: parseFloat(latlng[0]),
        lng: parseFloat(latlng[1]),
      },
    };

    const checkIfExists = zymekliuArray.findIndex(
      (zymeklisItem) => zymeklisItem.id === data.id
    );

    if (checkIfExists !== -1) {
      const updatedObj = {
        ...zymekliuArray[checkIfExists],
        pavadinimas: data.pavadinimas,
        informacija: data.informacija,
      };

      const updatedArray = [
        ...zymekliuArray.slice(0, checkIfExists),
        updatedObj,
        ...zymekliuArray.slice(checkIfExists + 1),
      ];

      setZymeklius(updatedArray);
    } else {
      addZymeklis(data);
    }

    handleZymeklioInfoSave(data);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    hideZymeklioInfo();
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const checkIfExists = zymekliuArray.findIndex(
      (zymeklisItem) => zymeklisItem.id === zymeklis.id
    );

    if (checkIfExists !== -1) {
      const updatedArray = [
        ...zymekliuArray.slice(0, checkIfExists),
        ...zymekliuArray.slice(checkIfExists + 1),
      ];

      setZymeklius(updatedArray);
      handleZymeklioInfoDelete(zymeklis.id);
    }

    hideZymeklioInfo();
  };

  return (
    <ZemelapioZymeklioInfoWrapper>
      <form
        className="zymeklio-form"
        id="zymeklio-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="zymeklio-form-input-wrapper">
          <label className="zymeklio-form-label" htmlFor="pavadinimas">
            Pavadinimas
          </label>
          <input
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            className="zymeklio-form-input"
            id="pavadinimas"
            type="text"
          />
        </div>
        <div className="zymeklio-form-input-wrapper">
          <label className="zymeklio-form-label" htmlFor="informacija">
            Informacija
          </label>
          <textarea
            value={textarea}
            onChange={(e) => setTextarea(e.currentTarget.value)}
            className="zymeklio-form-textarea"
            form="zymeklio-form"
            id="informacija"
          />
        </div>
        <div className="zymeklio-form-actions">
          <button type="submit">Išsaugoti</button>
          <button onClick={(e) => handleDelete(e)}>Ištrinti</button>
          <button onClick={(e) => handleCancel(e)}>Uždaryti</button>
        </div>
      </form>
    </ZemelapioZymeklioInfoWrapper>
  );
}
