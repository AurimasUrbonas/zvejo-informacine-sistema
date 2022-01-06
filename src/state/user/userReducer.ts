import { User, ActionTypes, Actions } from "./index";

const initialState: User = {
  uid: "",
  name: "",
  surname: "",
  picture: null,
  role: 0,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action: Actions): User => {
  switch (action.type) {
    case ActionTypes.USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ActionTypes.USER_SUCCESS: {
      return {
        uid: action.payload.uid,
        name: action.payload.name,
        surname: action.payload.surname,
        picture: action.payload.picture,
        role: action.payload.role,
        isLoading: false,
        error: null,
      };
    }
    case ActionTypes.USER_FAILED: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
