import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("signIn") ||
    location.pathname.includes("signUp");
  return (
    <div>
      {noHeaderFooter || <Header></Header>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
