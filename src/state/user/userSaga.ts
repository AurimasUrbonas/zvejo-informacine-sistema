import { auth } from "../../config/firebase";
import { call, put, takeEvery } from "redux-saga/effects";
import { doc, getDoc } from "firebase/firestore";
import { ActionTypes } from "./index";

async function getUser(uid: string) {
  const docRef = doc(auth.getFirestore(), "users", uid);
  return getDoc(docRef)
    .then((res) => {
      if (res.exists()) {
        return res.data();
      }
    })
    .catch((e) => {
      return e;
    });
}

function* fetchUser(action: {
  type: ActionTypes.USER_REQUEST;
  payload: string;
}): Generator<unknown> {
  try {
    const user = yield call(getUser, action.payload);
    yield put({ type: ActionTypes.USER_SUCCESS, payload: user });
  } catch ({ code }: unknown) {
    yield put({ type: "USER_FAILED", payload: code });
  }
}

export function* userSaga(): Generator<unknown> {
  yield takeEvery(ActionTypes.USER_REQUEST, fetchUser);
}
