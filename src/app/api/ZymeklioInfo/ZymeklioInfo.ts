import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { IZymeklis } from "../../../utils/types/IZymeklis";

export default function ZymeklioInfo() {
  const { user } = useAuth();

  const handleZymeklioInfoSave = async (data: IZymeklis) => {
    try {
      if (user)
        await setDoc(
          doc(auth.getFirestore(), "zemelapioZymekliai", data.id),
          data
        );
      alert("Žymeklis išsaugotas!");
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleZymeklioInfoDelete = async (id: string) => {
    try {
      if (user)
        await deleteDoc(doc(auth.getFirestore(), "zemelapioZymekliai", id));
      alert("Žymeklis ištrintas!");
    } catch (error: any) {
      console.log(error);
    }
  };

  return { handleZymeklioInfoSave, handleZymeklioInfoDelete };
}
