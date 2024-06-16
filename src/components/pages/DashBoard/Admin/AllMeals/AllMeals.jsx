import { Link } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
// import useGetPublic from "../../../../hooks/useGetPublic";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosScure";
import Swal from "sweetalert2";

const AllMeals = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [likeSort, setLikeSort] = useState('');
    const [reviewSort, setReviewSort] = useState('');
    console.log(reviewSort);

    // const { data, loader, refetch } = useGetPublic('all-meals-admin', `/mealsAdmin?likeSort=${likeSort}&&reviewSort${reviewSort}`);
    // console.log(data);

    const url = `/mealsAdmin?likeSort=${likeSort}&&reviewSort=${reviewSort}`;
    const { data, isPending: loader, refetch } = useQuery({
        queryKey: ['all-meals-admin', url],
        queryFn: async () => {
            const response = await axiosPublic.get(url)
            // console.log(response);
            return response.data;
        }
    })

    //title, likeCount, reviewCount,distname
    // const { name, distributorName, reviewCount, likeCounts } = data;

    const handleDel = async (id) => {
        // console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
        .then(async (res)=>{
            if (res.isConfirmed) {
                axiosSecure.delete(`/meals/${id}`)
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
        })

    }

    if (loader) {
        return <p>please wait...</p>
    }

    return (
        <div>
            <div className="flex">
                {/* sort by like count */}
                <div>
                    <div className="dropdown btn-primary">
                        <div tabIndex={0} role="button" className="btn m-1 px-7">Sort By LikeCount</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-500 rounded-box w-52">
                            <li onClick={() => setLikeSort(-1)}><a>Ascending</a></li>
                            <li onClick={() => setLikeSort(1)}><a>Descending</a></li>
                        </ul>
                    </div>
                </div>
                {/* sort by review count */}
                <div>
                    <div className="dropdown btn-primary">
                        <div tabIndex={0} role="button" className="btn m-1 px-7">Sort By Review Count</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-500 rounded-box w-52">
                            <li onClick={() => setReviewSort(-1)}><a>Ascending</a></li>
                            <li onClick={() => setReviewSort(1)}><a>Descending</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Meal Title</th>
                                <th>Distributor Name</th>
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
                                        {data.name}
                                    </td>
                                    <td>
                                        {data.distributorName}
                                    </td>
                                    <td>
                                        {data.likeCount ? data.likeCount : '0'}
                                    </td>
                                    <td>{data.reviewCount ? data.reviewCount : '0'}</td>
                                    {/* update btn */}
                                    <td>
                                        <Link to={`/dashboard/updateItem/${data._id}`}>
                                            <button className="btn btn-warning btn-xs">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDel(data._id)}
                                            className="btn btn-error btn-xs">Delete</button>
                                    </td>
                                    <td>
                                        <Link to={`/meals/${data._id}`}>
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

export default AllMeals;