import { URLS } from ".";
export interface IUrlLink {
  urlLink: string;
}
export interface UrlAction {
  type: typeof URLS.GET_URL;
  payload: string;
}
export type UrlActions = UrlAction;
