import { deleteUser, getAuth, updateEmail } from "firebase/auth";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { AllUser } from "../../../state/allUsers";

export const ChangeUser = () => {
  const authFirebase = getAuth();
  const { user, userAuth } = useAuth();
  const handleChangeUser = async (data: AllUser) => {
    try {
      if (user) await setDoc(doc(auth.getFirestore(), "users", data.uid), data);
      if (authFirebase.currentUser)
        updateEmail(authFirebase.currentUser, data.email);

      alert("Pakeitimas sėkmingas!");
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      if (user) await deleteDoc(doc(auth.getFirestore(), "users", id));
      if (userAuth) deleteUser(userAuth);
      alert("Naudotojas ištrintas!");
    } catch (error: any) {
      console.log(error);
    }
  };

  return { handleChangeUser, handleDeleteUser };
};
export default ChangeUser;
