import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";

const ManageItem = () => {
  const [menu, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menus/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className=" m-8">
      <div className=" items-center uppercase flex justify-between font-semibold">
        <p>Totatl Items: {menu.length} </p>
      </div>
      <div className="">
        <div className="overflow-x-auto ">
          <table className="table w-full my-8">
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
              {menu.map((items, index) => (
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
                      {/* The button to open modal */}

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
    </div>
  );
};

export default ManageItem;
