import { toast } from "react-toastify";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (items) => {
    fetch(`http://localhost:5000/carts/${items._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast("Data deleted");
        }
      });
  };
  return (
    <div>
      <div className=" items-center uppercase flex justify-between font-semibold">
        <p>Totatl Items: {cart.length} </p>
        <p className=" mx-8">Total Price : $ {total}</p>
        <button className="btn btn-warning">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Items Image </th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((items, index) => (
              <>
                {" "}
                <tr key={items._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={items.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{items.name}</td>
                  <td>{items.price}</td>
                  <th>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => handleDelete(items)}
                    >
                      {" "}
                      Delete
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
