import { UrlActions, URLS, IUrlLink } from "./index";

const initialState: IUrlLink = {
  urlLink: "",
};

export const urlReducer = (
  state = initialState,
  action: UrlActions
): IUrlLink => {
  switch (action.type) {
    case URLS.GET_URL: {
      return { ...state, urlLink: action.payload };
    }
    default:
      return state;
  }
};
