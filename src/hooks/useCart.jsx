import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import useAxiosSecure from "./useAxiosSecure";
const useCart = () => {
  const { user, loader } = useContext(AuthContext);
  // const token = localStorage.getItem("acces-token");
  const [axiosSecure] = useAxiosSecure();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loader,
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `beare ${token}`,
    //       },
    //     }
    //   );

    //   return response.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);

      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
