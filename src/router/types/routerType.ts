import { ReactElement, ReactNode } from "react";
import { Roles } from "./roles";

export type IRouterType = {
  id: number;
  name: string;
  component: ReactElement;
  path: string;
  icon: string;
  role: Roles[];
};
export interface IRoute {
  path: string;
  component?: React.ComponentType<unknown> | undefined;
  children?: ReactNode;
}
