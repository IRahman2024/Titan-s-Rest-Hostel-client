import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetPublic = (key, url) => {
    // console.log(`key ${key} and url ${url}`);
    
    const axiosPublic = useAxiosPublic();
    const { data, isPending: loader, refetch } = useQuery({
        queryKey: key,
        queryFn: async () => {
            const res = await axiosPublic.get(url);
            return res.data;
        }
    })

    return {data, loader, refetch};
};

export default useGetPublic;