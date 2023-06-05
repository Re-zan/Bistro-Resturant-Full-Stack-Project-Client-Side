import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-white">
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" bg-[#1F2937] text-end py-24 pl-0  lg:pl-32">
          <h2 className=" font-medium text-3xl uppercase text-center">
            Contact US
          </h2>
          <p className=" text-xl font-normal pt-8  text-center">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789
            <br /> Mon - Fri: 08:00 - 22:00 <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className=" bg-[#111827] py-24 pl-0 text-center lg:text-left  lg:pl-36">
          <h2 className=" font-medium text-3xl uppercase ">Follow US</h2>
          <p className=" text-xl font-normal pt-8  ">Join us on social media</p>
          <p className=" flex items-center text-3xl justify-center mx-auto lg:mx-0 lg:justify-between w-[169px] pt-8">
            {" "}
            <FaFacebook />
            <FaInstagram className="mx-4 lg:mx-0" />
            <FaTwitter />
          </p>
        </div>
      </div>{" "}
      <footer className="footer footer-center p-4 bg-[#151515] ">
        <div>
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
