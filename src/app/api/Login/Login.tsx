import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { Errors } from "../../../state/errorMessage/index";

export const LoginHandle = (e: FormEvent) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleLogIn = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = e.target as typeof e.target & {
      password: { value: string };
      email: { value: string };
    };
    if (email.value && password.value) {
      try {
        await auth.signInWithEmailAndPassword(
          auth.getAuth(),
          email.value,
          password.value
        );
        history("/");
      } catch (error: any) {
        dispatch({ type: Errors.ERROR_GETMESSAGE, payload: error.code });
      }
    } else {
      dispatch({ type: Errors.ERROR_GETMESSAGE, payload: "auth/empty" });
    }
  };
  return handleLogIn;
};
