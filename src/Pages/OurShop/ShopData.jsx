import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCart from "../../hooks/useCart";
const ShopData = ({ chefreoData }) => {
  const { user } = useContext(AuthContext);
  const navigat = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const { image, name, recipe, _id, price } = chefreoData;

  const handaleAddToCart = () => {
    if (user && user.email) {
      const cartItems = {
        email: user.email,
        menuId: _id,
        image,
        name,
        recipe,
        price,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      })
        .then((res) => res.json())
        .then(() => {
          refetch();
          toast("Data Added!");
        });
    } else {
      navigat("/signIN", { state: { from: location } });
    }
  };

  return (
    <div className="bg-[#F3F3F3] shadow-xl">
      <figure className="">
        <img src={image} alt={name} className="h-[320px] w-full" />
      </figure>

      <div className="card-body items-center text-center ">
        <p className="  text-2xl">Price:$ {price}</p>
        <h2 className="card-title text-[#151515] font-bold">{name}</h2>
        <p className=" text-base h-[120px]">{recipe}</p>

        <div className="w-[230px]  mx-auto text-center border-b-2 rounded-lg  py-4  pt-2  shadow-xl bg-[#E8E8E8] border-[#BB8506] hover:bg-black">
          <button
            className=" uppercase text-xl font-medium text-[#BB8506]"
            onClick={handaleAddToCart}
          >
            Add to card{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopData;
