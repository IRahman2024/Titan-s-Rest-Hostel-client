import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosScure";

const useMeals = () => {
    const axiosPublic = useAxiosSecure();

    const { data: menu=[], isPending: loader, refetch } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const res = await axiosPublic.get('/meals');
            return res.data;
        }

    })


    return [menu, loader, refetch];
}

export default useMeals;