const ChefReoData = ({ chefreoData }) => {
  const { image, name, recipe } = chefreoData;
  return (
    <div className="bg-[#F3F3F3] shadow-xl">
      <figure className="">
        <img src={image} alt={name} className="h-[320px] w-full" />
      </figure>
      <div className="card-body items-center text-center ">
        <h2 className="card-title text-[#151515] font-bold">{name}</h2>
        <p className=" text-base h-[120px]">{recipe}</p>
        <div className="w-[230px]  mx-auto text-center border-b-2 rounded-lg  py-4  pt-2  shadow-xl bg-[#E8E8E8] border-[#BB8506] hover:bg-black">
          <button className=" uppercase text-xl font-medium text-[#BB8506]">
            Add to card{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefReoData;
