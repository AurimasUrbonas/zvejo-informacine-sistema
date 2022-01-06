import { Roles } from "./../../router/types/roles";
interface UserRequest {
  type: "USER_REQUEST";
  payload: string;
}
interface UserSuccess {
  type: "USER_SUCCESS";
  payload: {
    uid: string;
    name: string;
    surname: string;
    picture: null | string;
    isLoading: boolean;
    role: Roles;
    error: null | string;
  };
}
interface UserFailed {
  type: "USER_FAILED";
  payload: string;
}

export type Actions = UserRequest | UserSuccess | UserFailed;

export interface User {
  uid: string;
  name: string;
  surname: string;
  picture: null | string;
  isLoading: boolean;
  role: Roles;
  error: null | string;
}
export interface UserType {
  uid: string;
  name: string;
  surname: string;
  picture: null | string;
  isLoading: boolean;
  role: Roles;
  error: null | string;
}
