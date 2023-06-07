import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import OurShop from "../Pages/OurShop/OurShop";
import SignIN from "../Pages/SignIn/SignIN";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import PrivateRoute from "./PrivateRoute";
import Alluser from "../Pages/DashBoard/AllUser/Alluser";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";

import ManageItem from "../Pages/DashBoard/ManageItem/ManageItem";
import AdminRoute from "./AdminRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "our-shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "signIN",
        element: <SignIN></SignIN>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "all-user",
        element: <Alluser></Alluser>,
      },
      {
        path: "add-item",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminPrivateRoute>
            {" "}
            <ManageItem></ManageItem>
          </AdminPrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
