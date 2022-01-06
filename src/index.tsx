import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { AuthContext } from "./contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { ModalContextProvider } from "./utils/store/modal-context";
import { ZymeklioInfoContextProvider } from "./utils/store/zymeklio-info-context";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ModalContextProvider>
          <ZymeklioInfoContextProvider>
            <AuthContext>
              <App />
            </AuthContext>
          </ZymeklioInfoContextProvider>
        </ModalContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
