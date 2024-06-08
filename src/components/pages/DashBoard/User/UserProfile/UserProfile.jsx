import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useState } from "react";
import { useForm } from "react-hook-form";

const UserProfile = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [addAbout, setAbout] = useState(false);

    const { data: userProfile, isPending: loader, refetch } = useQuery({
        queryKey: ['oneUser', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`);
            return res.data;
        }
    })

    if (loader) {
        return <p>Please wait</p>
    }

    const { name, email, image, badge } = userProfile;
    // console.log(userProfile);

    // const handleUpdate = async(e) => {
    //     e.preventDefault();
    //     const bio = document.getElementById('bio-textarea').value;
    //     console.log(bio);
    //     const res = await axiosPublic.put(`/users/${user.email}`, {bio: bio});
    // }




    if (!user) {
        return <p>No user Found</p>
    }
    console.log(addAbout);


    return (
        <div className="flex gap-x-5">
            <div className="card card-side bg-base-100 shadow-xl max-w-2xl">
                <figure><img
                    className="w-44"
                    src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-400">Badge: {badge}</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">About me!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-center">
                        <button
                            onClick={() => setAbout(true)}
                            className="btn btn-primary">Add/update</button>
                    </div>
                </div>
            </div>
            {/* <div className="grid justify-items-end gap-2">
                <textarea
                    id="bio-textarea"
                    className="textarea textarea-primary" placeholder="Bio"></textarea>
                <button
                    onClick={handleUpdate}
                    className="btn btn-square px-10">Add</button>
            </div> */}
        </div>
    );
};

export default UserProfile;