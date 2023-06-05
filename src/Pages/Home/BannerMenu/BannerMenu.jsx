import chefService from "../../../assets/home/featured.jpg";
import CommonBtn from "../../../components/CommonButton/CommonBtn";
import Heading from "../../../components/Heading/Heading";
const BannerMenu = () => {
  return (
    <div
      className="hero h-[1040px] md:h-[840px] my-20 "
      style={{
        backgroundImage: `url(${chefService})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="my_container">
        <Heading time="Check it out" title="From our menu"></Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 my-16">
          <div>
            <img src={chefService} alt={chefService} />
          </div>
          <div>
            <p className="text-white text-xl space-y-3 py-12 ">
              March 20, 2023<br></br>
              WHERE CAN I GET SOME?<br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className="w-[200px] ">
              <CommonBtn
                text="Read More"
                textColor="#FFFFFF"
                borderColor="#FFFFFF"
              ></CommonBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMenu;
