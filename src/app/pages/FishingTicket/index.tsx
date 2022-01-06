/* eslint-disable no-restricted-globals */

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import FishingTickets from "../../api/FishingTickets/FishingTickets";
import { IFishingTicket } from "../../api/FishingTickets/types/fishingTicket";
import { BilietasStyle } from "./styles";

export const FishingTicket = () => {
  const current = new Date();
  const [ikiKada, setIkiKada] = useState<string>();

  const { user } = useAuth();
  const date = current.toISOString().substring(0, 10);
  const { handleSubmitTicket } = FishingTickets();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { ikiKada } = event.target as typeof event.target & {
      ikiKada: { value: string };
    };
    let data = {
      ikiKada: ikiKada.value,
    } as IFishingTicket;
    handleSubmitTicket(data);
    bilietas();
  };

  const bilietas = async () => {
    if (user) {
      const ref = await getDoc(doc(auth.getFirestore(), "bilietas", user));
      if (ref.exists()) {
        setIkiKada(ref.data().ikiKada);
      }
    }
  };

  useEffect(() => {
    bilietas();
  }, []);

  return (
    <BilietasStyle>
      <form className="form-main" onSubmit={() => handleSubmit(event as any)}>
        <div className="g-center font20-bold text-transfomTicet">
          Bilieto galiojimas
        </div>
        <div className="date-grid">
          <div className="now-date font20-bold">{date}</div>
          <div className="line" />
          <div className="font20-bold">Šiandienos data</div>
        </div>
        <input
          className="g-input"
          name="ikiKada"
          type="date"
          placeholder="Iki kada"
        />
        <div className="date-grid">
          <div className="now-date font20-bold">{ikiKada}</div>
          <div className="line" />
          <div className="font20-bold">Jūsų bilieto galiojimo data</div>
        </div>

        <button className="g-button g-center">Atnaujinti bilietą</button>
      </form>
    </BilietasStyle>
  );
};
