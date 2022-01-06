import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import { errorReducer } from "./errorMessage";
import { urlReducer } from "./setUrl";

export const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
  url: urlReducer,
});
