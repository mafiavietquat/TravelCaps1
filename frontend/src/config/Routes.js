import Home from "../pages/Home/Home";
import PlaceDetail from "../pages/PlaceDetail/PlaceDetail";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/place/:id",
    component: PlaceDetail,
  },
  {
    path: "/signin",
    component: SignIn,
    layout: null,
  },
  {
    path: "/signup",
    component: SignUp,
    layout: null,
  },
];

export const privateRoutes = [];
