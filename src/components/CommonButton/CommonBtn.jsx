const CommonBtn = ({ text, textColor, borderColor }) => {
  return (
    <div
      className=" text-center border-b-2 rounded-lg  pb-3"
      style={{ borderBottomColor: `${borderColor}`, color: `${textColor}` }}
    >
      <button className=" uppercase text-xl font-medium">{text}</button>
    </div>
  );
};

export default CommonBtn;
