import { Helmet } from "react-helmet-async";
import Heading from "../../components/Heading/Heading";
import Banner from "./Banner/Banner";
import BannerMenu from "./BannerMenu/BannerMenu";
import CallIUs from "./CallUs/CallIUs";
import ChefReo from "./ChefReco/ChefReo";
import Menu from "./HomeMenu/Menu";
import SideDishes from "./SideDishes/SideDishes";
import Testimonial from "./Tesimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Banner></Banner>
      <Heading
        time="---From 11:00am to 10:00pm---"
        title="ORDER ONLINE"
      ></Heading>
      <SideDishes></SideDishes>
      <Heading time="---Check it out---" title="FROM OUR MENU"></Heading>
      <Menu></Menu>
      <CallIUs></CallIUs>
      <Heading time="---Should Try---" title="CHEF RECOMMENDS"></Heading>
      <ChefReo></ChefReo>
      <BannerMenu></BannerMenu>
      <Heading time="---What Our Clients Say---" title="TESTIMONIALS"></Heading>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
