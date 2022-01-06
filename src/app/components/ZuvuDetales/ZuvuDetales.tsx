import { IZuvuData } from "../../../utils/types/IZuvuData";
import { ZuvuDetalesWrapper } from "./styles";

interface IZuvuDetales {
  zuviesData: IZuvuData;
}

export default function ZuvuDetales(props: IZuvuDetales) {
  const { Paveikslelis, Pavadinimas, Kimba, Nerstas, Apibudinimas, Minta } =
    props.zuviesData;

  return (
    <ZuvuDetalesWrapper>
      <h3 className="zuvies-pavadinimas">{Pavadinimas}</h3>
      <img
        src={`assets/${Paveikslelis}`}
        alt="Zuvis"
        className="zuvies-image"
      />
      <div className="zuvies-info-wrapper">
        <div className="zuvies-info">
          <div className="zuvies-info-label">Geriausiai kimba:</div>
          <div>{Kimba}</div>
        </div>
        <div className="zuvies-info">
          <div className="zuvies-info-label">Nerštas:</div>
          <div>{Nerstas}</div>
        </div>
        <div className="zuvies-info">
          <div className="zuvies-info-label">Apibūdinimas:</div>
          <div>{Apibudinimas}</div>
        </div>
        <div className="zuvies-info">
          <div className="zuvies-info-label">Minta:</div>
          <div>{Minta}</div>
        </div>
      </div>
    </ZuvuDetalesWrapper>
  );
}
