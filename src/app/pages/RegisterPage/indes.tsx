import { SignUp } from "../../api/SignUp/SignUp";
import { ErrorMessage } from "../../components/Generic/ErrorMessage";
import { ErrorType } from "../../components/Generic/ErrorMessage/types/errorType";
import { RegisterPageStyle } from "./styles";
import Register from "../../../assets/register.jpg";

export const RegisterPage: React.FC = ({ children }) => {
  return (
    <RegisterPageStyle>
      <div className="g-center img-postion slide-in">
        <img className="width-img" src={Register} alt="" />
      </div>

      <div className="form-register g-center slide-in">
        <form className="form-register-main" onSubmit={SignUp(Event as any)}>
          <div className="form-register-header-postion font40-bold form-register-main-title g-center">
            Registracija
          </div>
          <input
            className="font12-normal g-input"
            type="text"
            placeholder="Vardas"
            name="name"
          />
          <input
            className="font12-normal g-input"
            type="text"
            placeholder="Pavardė"
            name="surname"
          />
          <input
            type="text"
            placeholder="El. pašto adresas"
            name="email"
            className="font12-normal g-input"
          />
          <input
            type="password"
            placeholder="Slaptažodis"
            name="pass"
            className="font12-normal g-input"
          />
          <div
            style={{ height: "16px" }}
            className="form-register-main-postion-error g-center"
          >
            <ErrorMessage
              type={[
                ErrorType.Email,
                ErrorType.UserNotFound,
                ErrorType.WrongPassword,
                ErrorType.Empty,
              ]}
            />
          </div>
          <button className="font12-bold form-register-btn-postion g-button g-center">
            Registruotis
          </button>
          <div className="font12-bold form-register-btn-postion g-center">
            {children}
          </div>
        </form>
      </div>
    </RegisterPageStyle>
  );
};
