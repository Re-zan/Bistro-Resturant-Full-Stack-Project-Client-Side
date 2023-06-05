import { Link } from "react-router-dom";
import CommonBtn from "../../components/CommonButton/CommonBtn";
import MenuData from "../Home/HomeMenu/MenuData";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 p-6 lg:p-0 my_container">
        {items.map((data) => (
          <MenuData key={data._id} menudata={data}></MenuData>
        ))}
      </div>
      <Link to={`/our-shop`}>
        <div className="w-[430px]  mx-auto">
          <CommonBtn
            text="ORDER YOUR FAVOURITE FOOD"
            borderColor="#1F2937"
            textColor="black"
          ></CommonBtn>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
