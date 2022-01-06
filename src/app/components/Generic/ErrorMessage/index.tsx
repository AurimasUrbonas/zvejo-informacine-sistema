import { useSelector } from "react-redux";
import { IErrorType } from "../../../../state/errorMessage/errorTypes";
import { ErrorMessageStyle } from "./styles";
import { ErrorType } from "./types/errorType";

interface IProps {
  type: ErrorType[];
}

export const ErrorMessage = (props: IProps) => {
  const store = useSelector((error: { error: IErrorType }) => error.error);
  const validationError = (error: string) => {
    switch (error) {
      case "auth/invalid-email":
        return "Įveskite tinkamą el. pašto adresą";
      case "auth/empty":
        return "Visi laukai yra privalomi";
      case "auth/user-not-found":
        return "Vartotojas nerastas";
      case "auth/wrong-password":
        return "Slaptažodis, kurį įvedėte, yra netinkamas";
      case "auth/email-already-in-use":
        return "Elektroninis paštas jau yra naudojamas";
    }
  };
  return (
    <ErrorMessageStyle>
      {props.type.find((x) => x === store.errorType) && (
        <span className="font12-normal g-center">
          {validationError(store.errorType)}
        </span>
      )}
    </ErrorMessageStyle>
  );
};
