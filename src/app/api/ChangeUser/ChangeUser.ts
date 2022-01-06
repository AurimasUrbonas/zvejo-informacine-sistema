import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { AllUser } from "../../../state/allUsers";

export const ChangeUser = () => {
  const { user } = useAuth();
  const handleChangeUser = async (data: AllUser) => {
    try {
      if (user) await setDoc(doc(auth.getFirestore(), "users", data.uid), data);

      alert("Pakeitimas sėkmingas!");
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      if (user) await deleteDoc(doc(auth.getFirestore(), "users", id));
      alert("Naudotojas ištrintas!");
    } catch (error: any) {
      console.log(error);
    }
  };

  return { handleChangeUser, handleDeleteUser };
};
export default ChangeUser;
