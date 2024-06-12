import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const AdminProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()
    const adminEmail = user?.email;
    // console.log(adminEmail);

    const { data, isPending: loader } = useQuery({
        queryKey: ['admin-single', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/admin/${adminEmail}`);
            return res.data;
        }
    })
    
    if (loader) {
        return <p>Please wait..</p>
    }
    const { name, image, email, foodCount } = data;

    // console.log(data);

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl max-w-2xl">
                <figure><img
                    className="w-44"
                    src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Total Food Added: {foodCount ? foodCount : 0}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;