import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoardLayout = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <>
      <div className="my_container">
        <div className="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side bg-[#D1A054]">
            <Link to="/" className="btn btn-ghost   font-[Cinzel] uppercase ">
              {" "}
              <h2 className="text-2xl ">
                {" "}
                BISTRO BOSS <br />
                Restaurant
              </h2>
            </Link>

            <ul className="menu px-4 w-80  mb-3">
              {isAdmin ? (
                <>
                  {" "}
                  <li>
                    <NavLink to="/dashboard/home">
                      <FaHome></FaHome> Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/add-item">
                      <FaCalendarAlt></FaCalendarAlt> Add Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manage-items">
                      <FaWallet></FaWallet> Manage Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manage-booking">
                      <FaWallet></FaWallet> Manage booking
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/all-user">
                      <FaShoppingCart></FaShoppingCart> All User
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink to="/dashboard/home">
                      <FaHome></FaHome> User Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/reservations">
                      <FaCalendarAlt></FaCalendarAlt> Reservations
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/history">
                      <FaWallet></FaWallet> Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/mycart">
                      <FaShoppingCart></FaShoppingCart> My Cart
                      <span className="badge inl badge-secondary">
                        {cart?.length || 0}
                      </span>
                    </NavLink>
                  </li>
                </>
              )}

              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome></FaHome> Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/menu"> Our Menu</NavLink>
              </li>
              <li>
                <NavLink to="/order/salad">Order Food</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
