import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosScure";

const UserProfile = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [addAbout, setAbout] = useState(false);

    const { data: userProfile, isPending: loader, refetch } = useQuery({
        queryKey: ['oneUser', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        }
    })

    if (loader) {
        return <p>Please wait</p>
    }

    const { name, email, image, badge, about } = userProfile;
    // console.log(about);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const bio = document.getElementById('bio-textarea').value;
        console.log(bio);
        const res = await axiosSecure.put(`/users/${user.email}`, { bio: bio });
        console.log(res);
        setAbout(false);
        refetch();
    }




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
                    <h2 className="card-title text-green-400 uppercase">Badge: {badge}</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">About me!</h2>
                    <p>{about?.bio}</p>
                    <div className="card-actions justify-center">
                        <button
                            onClick={() => setAbout(true)}
                            className="btn btn-primary">Add/update</button>
                    </div>
                </div>
            </div>
            {
                addAbout ? <div className="grid justify-items-end gap-2">
                    <textarea
                        id="bio-textarea"
                        className="textarea textarea-primary" placeholder="Bio"></textarea>
                    <button
                        onClick={handleUpdate}
                        className="btn btn-square px-10">Add</button>
                </div> : " "
            }
        </div>
    );
};

export default UserProfile;