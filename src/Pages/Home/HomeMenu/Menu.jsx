import MenuData from "./MenuData";
import CommonBtn from "../../../components/CommonButton/CommonBtn";
import useMenu from "../../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(
    (popularData) => popularData.category === "popular"
  );
  return (
    <div className="my_container my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 p-6 lg:p-0">
        {popular.map((data) => (
          <MenuData key={data._id} menudata={data}></MenuData>
        ))}
      </div>
      <div className="w-[230px]  mx-auto">
        <CommonBtn
          text="View Full Menu"
          borderColor="#1F2937"
          textColor="black"
        ></CommonBtn>
      </div>
    </div>
  );
};

export default Menu;
