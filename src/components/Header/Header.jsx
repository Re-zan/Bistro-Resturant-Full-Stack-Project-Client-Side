import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../hooks/useCart";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handaleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const mainmMenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-yellow-200" : " text-white"
        }
      >
        <li className="mx-1 uppercase">Home</li>
      </NavLink>
      <NavLink
        to="/contact-us"
        className={({ isActive }) =>
          isActive ? "text-yellow-200" : " text-white"
        }
      >
        <li className="mx-1 uppercase">Contact US </li>
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "text-yellow-200" : " text-white"
        }
      >
        <li className="mx-1 uppercase">DashBoard</li>
      </NavLink>{" "}
      <NavLink
        to="/our-menu"
        className={({ isActive }) =>
          isActive ? "text-yellow-200" : " text-white"
        }
      >
        <li className="mx-3 uppercase">Our Menu</li>
      </NavLink>
      <NavLink
        to="/our-shop"
        className={({ isActive }) =>
          isActive ? "text-yellow-200" : " text-white"
        }
      >
        <li className="mx-1 uppercase">Our Shop</li>
      </NavLink>
      <Link to="/dashboard/mycart">
        <li className=" -mt-2">
          <div>
            <FaCartArrowDown className="text-white"></FaCartArrowDown>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
          </div>
        </li>
      </Link>
      {user ? (
        <>
          <li className="mx-1 uppercase" onClick={handaleSignOut}>
            Sign Out
          </li>
        </>
      ) : (
        <>
          {" "}
          <NavLink
            to="/signIn"
            className={({ isActive }) =>
              isActive ? "text-yellow-200" : " text-white"
            }
          >
            <li className="mx-1 uppercase">Sign IN</li>
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-black text-white px-10 py-8 fixed z-10 bg-opacity-50">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-black"
          >
            {mainmMenu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost   font-[Cinzel] uppercase ">
          {" "}
          <h2 className="text-2xl ">
            {" "}
            BISTRO BOSS <br />
            Restaurant
          </h2>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1"> {mainmMenu}</ul>
      </div>
    </div>
  );
};

export default Header;
