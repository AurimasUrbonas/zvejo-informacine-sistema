/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LoginHandle } from "../../api/Login/Login";
import { Errors } from "../../../state/errorMessage";
import { ErrorType } from "../../components/Generic/ErrorMessage/types/errorType";
import { ErrorMessage } from "../../components/Generic/ErrorMessage";
import { SignInStyle } from "./styles";
import LogIN from "../../../assets/logIn.jpg";

export const SignInPage: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: Errors.ERROR_GETMESSAGE, payload: "" });
  }, []);

  return (
    <SignInStyle>
      <div className="g-center img-postion slide-in">
        <img className="width-img" src={LogIN} alt="" />
      </div>
      <div className="form-login g-center slide-in">
        <form onSubmit={LoginHandle(Event as any)} className="form-login-main">
          <span className="g-center font40-bold form-login-main-title">
            Prisijungti
          </span>
          <input
            className="font12-normal g-input"
            type="text"
            placeholder="El. pašto adresas"
            name="email"
          />
          <input
            className="font12-normal g-input"
            type="password"
            placeholder="Slaptažodis"
            name="password"
          />
          <div style={{ height: "16px" }} className="g-center">
            <ErrorMessage
              type={[
                ErrorType.Email,
                ErrorType.UserNotFound,
                ErrorType.WrongPassword,
                ErrorType.Empty,
              ]}
            />
          </div>
          <button className="font12-bold g-button g-center">Prisijungti</button>
          <div className="font12-bold g-center">{children}</div>
        </form>
      </div>
    </SignInStyle>
  );
};
