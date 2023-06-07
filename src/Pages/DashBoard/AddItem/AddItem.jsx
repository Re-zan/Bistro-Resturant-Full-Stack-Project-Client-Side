import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const token = import.meta.env.VITE_Image_APi_key;
const imge_api_url = `https://api.imgbb.com/1/upload?key=${token}`;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imge_api_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((resPonseData) => {
        if (resPonseData.success) {
          const imaag_url = resPonseData.data.display_url;
          const { name, price, category, recipe } = data;
          const menuItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imaag_url,
          };
          axiosSecure.post("/menus", menuItem).then((data) => {
            console.log(data.data);
          });
        }
      });

    reset();
  };

  return (
    <div className="m-10 bg-[#E8E8E8]">
      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        <div className="form-control w-full my-3">
          <input
            {...register("name", { required: true })}
            className=" p-3"
            placeholder="Recipe Name"
          />
        </div>
        <div className="form-control w-full my-3">
          <input
            {...register("price", { required: true })}
            className=" p-3"
            placeholder="Recipe price"
          />
        </div>
        <div className="form-control w-full my-3">
          <select {...register("category")}>
            <option value="Salad">Salad</option>
            <option value="Drinks">Drinks</option>
            <option value="Dessert">Dessert</option>
            <option value="Deshi">Deshi</option>
          </select>
        </div>
        <div className="form-control w-full my-3">
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            {...register("image", { required: true })}
          />
        </div>
        <div className="form-control w-full my-3">
          <div className="form-control  my-3">
            <textarea
              className="textarea h-24"
              {...register("recipe", { required: true })}
              placeholder="Details"
            ></textarea>
          </div>
        </div>

        {/* {errors.exampleRequired && (
          <span className="text-red-800">This field is required</span>
        )} */}
        <button type="submit" className="btn">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
