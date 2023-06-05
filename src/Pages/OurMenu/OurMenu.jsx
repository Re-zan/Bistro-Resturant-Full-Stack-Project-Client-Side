import { Helmet } from "react-helmet-async";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import Heading from "../../components/Heading/Heading";
import useMenu from "../../hooks/useMenu";

import bannerImg1 from "../../assets/menu/banner3.jpg";
import bannerImg2 from "../../assets/menu/dessert-bg.jpeg";
import bannerImg3 from "../../assets/menu/pizza-bg.jpg";
import bannerImg4 from "../../assets/menu/soup-bg.jpg";
import bannerImg5 from "../../assets/menu/salad-bg.jpg";
import MenuCategory from "./MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((datas) => datas.category === "offered");
  const dessert = menu.filter((datas) => datas.category === "dessert");
  const pizza = menu.filter((datas) => datas.category === "pizza");
  const salad = menu.filter((datas) => datas.category === "salad");
  const soup = menu.filter((datas) => datas.category === "soup");
  return (
    <div>
      {" "}
      <Helmet>
        <title>Home | Our Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <CommonBanner
        img={bannerImg1}
        title="OUR MENU"
        des="WOULD YOU LIKE TO TRY A DISH"
      ></CommonBanner>
      {/* offered part start */}
      <div className="pb-20">
        <Heading time="---Don't miss---" title="TODAY'S OFFER"></Heading>

        <MenuCategory items={offered}></MenuCategory>
      </div>
      {/* offered part end */}
      {/* dessert part start */}
      <CommonBanner
        img={bannerImg2}
        title="DESSERTS"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></CommonBanner>
      <div className="py-20">
        <MenuCategory items={dessert}></MenuCategory>
      </div>
      {/* dessert part end */}
      {/* pizza part start */}
      <CommonBanner
        img={bannerImg3}
        title="PIZZA"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></CommonBanner>
      <div className="py-20">
        <MenuCategory items={pizza}></MenuCategory>
      </div>
      {/* pizza part end */}
      {/* salad part start */}
      <CommonBanner
        img={bannerImg5}
        title="SALAD"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></CommonBanner>
      <div className="py-20">
        <MenuCategory items={salad}></MenuCategory>
      </div>
      {/* salad part end */}
      {/* soup part start */}
      <CommonBanner
        img={bannerImg4}
        title="SOUP"
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></CommonBanner>
      <div className="py-20">
        <MenuCategory items={soup}></MenuCategory>
      </div>
      {/* soup part end */}
    </div>
  );
};

export default OurMenu;
