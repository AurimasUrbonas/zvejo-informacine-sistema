import { createStore, Store, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleWare();

export const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
