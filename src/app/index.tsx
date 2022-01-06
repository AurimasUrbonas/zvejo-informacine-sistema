import { Route, Routes } from "react-router";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {
  FooterWrapper,
  HeaderWrapper,
  Layout,
  MainContentWrapper,
} from "../styles";
import { RouterList } from "../router/RouterList";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { ActionTypes, User } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import "../utils/global-styles/fonts";
import "../utils/global-styles/colors";
import "../utils/global-styles/postions";
import { themeLight } from "../utils/global-styles/colors";
import { ThemeProvider } from "styled-components";
import { GlobalFont } from "../utils/global-styles/fonts";
import { GlobalPosition } from "../utils/global-styles/postions";
import { GenericStyle } from "../utils/global-styles/generic";
import { PageNotFound } from "./pages/PageNotFound";

export default function App() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { role } = useSelector((state: { user: User }) => state.user);

  useEffect(() => {
    dispatch({ type: ActionTypes.USER_REQUEST, payload: user });
  }, [dispatch, user]);

  return (
    <ThemeProvider theme={themeLight}>
      <Layout>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <MainContentWrapper>
          <Routes>
            {RouterList.filter((x) => x.role.includes(role)).map(
              ({ id, path, component }) => (
                <Route key={id} path={path} element={component} />
              )
            )}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MainContentWrapper>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Layout>
      <GlobalFont />
      <GenericStyle />
      <GlobalPosition />
    </ThemeProvider>
  );
}
