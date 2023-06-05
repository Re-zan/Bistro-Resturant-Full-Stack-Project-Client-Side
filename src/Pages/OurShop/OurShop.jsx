import CommonBanner from "../../components/CommonBanner/CommonBanner";
import bannerImg from "../../assets/home/banner.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import ShopCategory from "./ShopCategory";
import "./Shop.css";

const OurShop = () => {
  const [menu] = useMenu();
  const drink = menu.filter((datas) => datas.category === "drinks");
  const dessert = menu.filter((datas) => datas.category === "dessert");
  const pizza = menu.filter((datas) => datas.category === "pizza");
  const salad = menu.filter((datas) => datas.category === "salad");
  const soup = menu.filter((datas) => datas.category === "soup");

  return (
    <div>
      <CommonBanner
        img={bannerImg}
        title="OUR SHOP"
        des="WOULD YOU LIKE TO TRY A DISH"
      ></CommonBanner>

      <div className="my_container my-20">
        <Tabs>
          <TabList className="text-center mx-4 uppercase text-[#151515] text-xl mb-10 font-semibold">
            <Tab>Salad</Tab>
            <Tab> pizza</Tab>
            <Tab> soups</Tab>
            <Tab> desserts</Tab>
            <Tab> drinks</Tab>
          </TabList>

          <TabPanel>
            <ShopCategory items={salad}></ShopCategory>
          </TabPanel>
          <TabPanel>
            <ShopCategory items={pizza}></ShopCategory>
          </TabPanel>
          <TabPanel>
            <ShopCategory items={soup}></ShopCategory>
          </TabPanel>
          <TabPanel>
            <ShopCategory items={dessert}></ShopCategory>
          </TabPanel>
          <TabPanel>
            <ShopCategory items={drink}></ShopCategory>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
