import { Roles } from "../types/roles";
import { IRouterType } from "../types/routerType";
import ZvejoKalendoriusPage from "../../app/pages/ZvejoKalendoriusPage";
import ZemelapisPage from "../../app/pages/ZemelapisPage";
import { FishingDashboard } from "../../app/pages/FishingDashboard";
import { FishingTicket } from "../../app/pages/FishingTicket";
import ZuvuSarasasPage from "../../app/pages/ZuvuSarasasPage";
import MainPage from "../../app/pages/MainPage";
import { LoginPage } from "../../app/pages/LoginPage";
import { UserDashboard } from "../../app/pages/UserDashboard";

export const RouterList: IRouterType[] = [
  {
    id: 7,
    name: "PAGRINDINIS",
    component: <MainPage />,
    path: "/",
    icon: "",
    role: [Roles.None, Roles.Admin, Roles.User],
  },
  {
    id: 0,
    name: "PRISIJUNGTI",
    component: <LoginPage />,
    path: "/prisijungti",
    icon: "",
    role: [Roles.None],
  },
  {
    id: 8,
    name: "VARTOTOJAI",
    component: <UserDashboard />,
    path: "/vartotojai",
    icon: "",
    role: [Roles.Admin],
  },
  {
    id: 2,
    name: "ŽVEJO BILIETAS",
    component: <FishingTicket />,
    path: "/zvejo-bilietas",
    icon: "",
    role: [Roles.Admin, Roles.User],
  },
  {
    id: 3,
    name: "PAGAUTŲ ŽUVŲ DIENORAŠTIS",
    component: <FishingDashboard />,
    path: "/pagautu-zuvu-dienorastis",
    icon: "",
    role: [Roles.Admin, Roles.User],
  },
  {
    id: 4,
    name: "ŽUVŲ SĄRAŠAS",
    component: <ZuvuSarasasPage />,
    path: "/zuvu-sarasas",
    icon: "",
    role: [Roles.None, Roles.Admin, Roles.User],
  },
  {
    id: 5,
    name: "ŽVEJO KALENDORIUS",
    component: <ZvejoKalendoriusPage />,
    path: "/zvejo-kalendorius",
    icon: "",
    role: [Roles.Admin, Roles.User, Roles.None],
  },
  {
    id: 6,
    name: "ŽEMĖLAPIS",
    component: <ZemelapisPage />,
    path: "/zemelapis",
    icon: "",
    role: [Roles.None, Roles.Admin, Roles.User],
  },
];
