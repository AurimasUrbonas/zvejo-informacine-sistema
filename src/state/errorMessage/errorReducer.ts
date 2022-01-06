import { ErrorActions, Errors, IErrorType } from "./index";

const initialState: IErrorType = {
  errorType: "",
};

export const errorReducer = (
  state = initialState,
  action: ErrorActions
): IErrorType => {
  switch (action.type) {
    case Errors.ERROR_GETMESSAGE: {
      return { ...state, errorType: action.payload };
    }
    default:
      return state;
  }
};
