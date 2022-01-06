import { Errors } from ".";

export interface IErrorType {
  errorType: string;
}

export interface ErrorAction {
  type: typeof Errors.ERROR_GETMESSAGE;
  payload: string;
}
export type ErrorActions = ErrorAction;
