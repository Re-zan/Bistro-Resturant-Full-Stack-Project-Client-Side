import useUser from "../../../hooks/useUser";

const Alluser = () => {
  const [user, refetch] = useUser();
  const handleDelete = () => {};
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then(() => {
        refetch();
      })
      .catch(() => {});
  };
  return (
    <div>
      <div className=" uppercas font-semibold text-4xl">
        <p>Totatl user: {user.length} </p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name </th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((items, index) => (
              <>
                {" "}
                <tr key={items._id}>
                  <th>{index + 1}</th>

                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>
                    {items.role === "admin" ? (
                      "admin"
                    ) : (
                      <>
                        <button onClick={() => handleMakeAdmin(items)}>
                          another role
                        </button>
                      </>
                    )}
                  </td>
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

export default Alluser;
