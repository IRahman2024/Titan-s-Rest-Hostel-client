import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useGetPublic from "../../../../hooks/useGetPublic";
import MyRequest from "../My Request/MyRequest";
import { Link } from "react-router-dom";

const MyReview = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const { data, loader, refetch } = useGetPublic('review-email', `/reviews-email/${user?.email}`);

    const handleEdit = async (id) => {
        // console.log(id);
        const text = document.getElementById('bio-textarea').value;
        // console.log();
        document.getElementById(id).close();
        console.log(text);
        const review ={
            review: text
        }

        const res = await axiosPublic.patch(`/review/${id}`, review);
        if(res.status == 200){
            refetch();
        }
        // console.log(res);
    }

    const handleDel = async (id) => {
        // console.log(id);

        const res = await axiosPublic.delete(`/review/${id}`);
        if (res.status == 200) {
            refetch();
        }
        console.log(res);
    }

    if (loader) {
        return <p>Please wait...</p>
    }

    if (data.length === 0) {
        refetch();
        return <p className="text-4xl">No review yet</p>;
        // return <p>Almost done..</p>;
    }
    //review onno khan theke ante hbe
    const { email, image, reviewId, title: foodName, userName } = data;
    // console.log(data);

    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Meal Title</th>
                                <th>Likes</th>
                                <th>Reviews</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                data?.map((data, idx) => <tr key={idx}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        {data.title ? data.title : 'no data'}
                                    </td>
                                    <td>
                                        likes baki
                                    </td>
                                    <td>{data.review}</td>
                                    {/* edit btn */}
                                    <td>
                                        <button className="btn btn-warning btn-xs" onClick={() => document.getElementById(data._id).showModal()}>Edit</button>
                                        <dialog id={data._id} className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Write Your Review Here</h3>
                                                {/* text area here */}

                                                <div className="grid justify-items-start gap-2">
                                                    <textarea
                                                        id="bio-textarea"
                                                        className="textarea textarea-primary w-full" placeholder="Bio">
                                                    </textarea>
                                                </div>

                                                <div className="modal-action">
                                                    <button
                                                        onClick={() => handleEdit(data._id)}
                                                        className="btn btn-warning btn-xs">Done</button>
                                                    <form
                                                        method="dialog"
                                                    >
                                                        {/* if there is a button in form, it will close the modal */}
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDel(data._id)}
                                            className="btn btn-error btn-xs">Delete</button>
                                    </td>
                                    <td>
                                        <Link to={`/meals/${data.reviewId}`}>
                                            <button className="btn btn-success btn-xs">View Meal</button>
                                        </Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReview;