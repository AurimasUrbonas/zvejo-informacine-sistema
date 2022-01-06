import { Roles } from "../../router/types/roles";

export interface AllUser {
  uid: string;
  name: string;
  surname: string;
  picture: null | string;
  isLoading?: boolean;
  role: Roles;
  error?: null | string;
  email: string;
}
