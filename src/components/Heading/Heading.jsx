const Heading = ({ time, title }) => {
  return (
    <div className="text-center my-16 w-[200px] md:w-[424px] mx-auto">
      <p className=" italic text-[#D99904] text-base md:text-xl">{time}</p>
      <h2 className=" text-[#151515] text-xl md:text-4xl uppercase py-6 border-y-2 my-3">
        {title}
      </h2>
    </div>
  );
};

export default Heading;
