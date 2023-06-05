const MenuData = ({ menudata }) => {
  const { name, image, recipe, price } = menudata;
  return (
    <div className=" md:flex   gap-3">
      <img
        src={image}
        alt={name}
        className=" w-[118px]"
        style={{ borderRadius: "0px 200px 200px 200px" }}
      />
      <div>
        <h3 className=" text-[#151515] uppercase text-xl font-[Cinzel]">
          {name}-------------------
        </h3>
        <p>{recipe}</p>
      </div>
      <p className=" text-[#BB8506] text-xl">${price}</p>
    </div>
  );
};

export default MenuData;
