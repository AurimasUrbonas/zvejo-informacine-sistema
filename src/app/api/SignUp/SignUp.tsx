import { setDoc } from "@firebase/firestore";
import { doc } from "firebase/firestore";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import { Roles } from "../../../router/types/roles";
import { Errors } from "../../../state/errorMessage";

export const SignUp = (e: FormEvent) => {
  const { createUser } = useAuth();
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();
    const { name, surname, email, pass } = e.target as typeof e.target & {
      name: { value: string };
      surname: { value: string };
      pass: { value: string };
      email: { value: string };
    };
    if (
      name.value.length &&
      surname.value.length &&
      email.value.length &&
      pass.value.length
    ) {
      try {
        createUser(email.value, pass.value)
          .then(({ user }) => {
            setDoc(doc(auth.getFirestore(), "users", user.uid), {
              uid: user.uid,
              name: name.value,
              surname: surname.value,
              email: email.value,
              picture: null,
              role: Roles.User,
            })
              .then(() => {
                history("/");
              })
              .catch((e) => console.log(e));
          })
          .catch(({ code }) =>
            dispatch({ type: Errors.ERROR_GETMESSAGE, payload: code })
          );
      } catch ({ message }) {
        console.log(message);
      }
    } else {
      dispatch({ type: Errors.ERROR_GETMESSAGE, payload: "auth/empty" });
    }
  };
  return handleRegistration;
};
