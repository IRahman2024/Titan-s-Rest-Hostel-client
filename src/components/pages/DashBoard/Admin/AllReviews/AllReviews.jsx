import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosScure";
import useGetPublic from "../../../../hooks/useGetPublic";
import { Link } from "react-router-dom";

const AllReviews = () => {
    const axiosSecure = useAxiosSecure();

    const { data, loader, refetch } = useGetPublic('all-review-data', `/reviews`);

    if (loader) {
        return <p>please wait</p>
    }

    if (!data.length) {
        return <p className="text-4xl">No Reviews Yet</p>
    }

    console.log(data);

    const handleDel = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((res) => {
            // console.log(res);
            if (res.isConfirmed) {
                axiosSecure.delete(`review/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Meal Name</th>
                            <th>Review</th>
                            <th>Likes</th>
                            <th>Total Reviews</th>
                            <th>Delete</th>
                            <th>View Meal</th>
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
                                    {data.title}
                                </td>
                                <td>
                                    {data.review}
                                </td>
                                <td>
                                    {data.mealInfo.likeCount ? data.mealInfo.likeCount : 0}
                                </td>
                                <td>
                                    {data.mealInfo.reviewCount ? data.mealInfo.reviewCount : 0}
                                </td>
                                {/* button */}
                                <td>
                                    <button
                                        onClick={() => handleDel(data._id)}
                                        className="btn btn-error btn-xs">Delete</button>
                                </td>
                                <td>
                                    <Link to={`/meals/${data.reviewId}`}>
                                        <button
                                            className="btn btn-success btn-xs">View Meal
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    {data.badge}
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllReviews;