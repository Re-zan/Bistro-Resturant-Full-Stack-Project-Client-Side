import { useEffect, useState } from "react";
import ChefReoData from "./ChefReoData";

const ChefReo = () => {
  const [chefreo, setChefreo] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const dataFilter = data
          .filter((chetreoData) => chetreoData.category === "pizza")
          .slice(0, 3);
        setChefreo(dataFilter);
      });
  }, []);

  return (
    <div className="my_container grid grid-cols-1 lg:grid-cols-3 p-5 lg:p-0 gap-16">
      {chefreo.map((datas) => (
        <ChefReoData key={datas._id} chefreoData={datas}></ChefReoData>
      ))}
    </div>
  );
};

export default ChefReo;
