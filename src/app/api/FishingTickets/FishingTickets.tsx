import { doc, setDoc } from "firebase/firestore";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { IFishingTicket } from "./types/fishingTicket";

export const FishingTickets = () => {
  const { user } = useAuth();
  const handleSubmitTicket = async (data: IFishingTicket) => {
    try {
      if (user) await setDoc(doc(auth.getFirestore(), "bilietas", user), data);
      alert("Bilietas atnaujintas!");
    } catch (error: any) {
      console.log(error);
    }
  };
  return { handleSubmitTicket };
};
export default FishingTickets;
