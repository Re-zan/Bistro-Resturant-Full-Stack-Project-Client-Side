import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  // const token = localStorage.getItem("acces-token");
  const [axiosSecure] = useAxiosSecure();
  const { data: adminData = [], refetch } = useQuery({
    queryKey: ["isAdmin", user.email],
    queryFn: async () => {
      //   const res = await fetch(
      //     `http://localhost:5000/users/admin?email=${user.email}`,
      //     {
      //       headers: {
      //         authorization: `beare ${token}`,
      //       },
      //     }
      //   );
      //   return res.json();
      const res = await axiosSecure.get(`/users/admin?email=${user.email}`);

      return res.data.admin;
    },
  });
  return [adminData, refetch];
};

export default useAdmin;
