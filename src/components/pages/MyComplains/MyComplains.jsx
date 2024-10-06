import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosScure";
import useAuth from "../../hooks/useAuth";

const MyReview = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data, isPending: loader, refetch } = useQuery({
        queryKey: ['complains', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/complains/${user?.email}`);
            return res.data;
        }
    })

    const handleEdit = async (id) => {
        // console.log(id);
        const text = document.getElementById(`complain-textarea-${id}`).value;
        // console.log();
        document.getElementById(id).close();

        console.log(text);

        const issue = {
            details: text
        }

        const res = await axiosSecure.patch(`/complains/${id}`, issue);
        if (res.status == 200) {
            refetch();
        }
        if (res.data.modifiedCount) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Your complain was updated`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        // console.log(res);
    }

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
            .then(async (res) => {
                if (res.isConfirmed) {
                    const res = await axiosSecure.delete(`/complains/${id}`);
                    if (res.status == 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    }

                }
            })
    }

    if (loader) {
        return <p>Please wait...</p>
    }

    if (data?.length === 0) {
        refetch();
        return <p className="text-4xl">No data found</p>;
        // return <p>Almost done..</p>;
    }


    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Details</th>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>Status</th>
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
                                        {data.details ? data.details : 'no data'}
                                    </td>
                                    {/* edit btn */}
                                    {
                                        data?.status == 'pending' ?
                                            <td>
                                                <button className="btn btn-warning btn-xs" onClick={() => document.getElementById(data._id).showModal()}>Edit</button>
                                                <dialog id={data._id} className="modal">
                                                    <div className="modal-box">
                                                        <h3 className="font-bold text-lg">Write Your Review Here</h3>
                                                        {/* text area here */}

                                                        <div className="grid justify-items-start gap-2">
                                                            <textarea
                                                                id={`complain-textarea-${data?._id}`}
                                                                className="textarea textarea-primary w-full" placeholder="complain-Box">
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
                                            </td> :
                                            <div className="badge bg-neutral gap-2">
                                                You can't change now!
                                            </div>
                                    }
                                    <td>
                                        <button
                                            onClick={() => handleDel(data._id)}
                                            className="btn btn-error btn-xs">Delete</button>
                                    </td>
                                    {/* status */}
                                    <td>
                                        {
                                            data?.status == 'pending' ? (
                                                <div className="badge badge-error gap-2">
                                                    Pending
                                                </div>
                                            ) : data?.status == 'solved' ? (
                                                <div className="badge badge-success gap-2">
                                                    Resolved
                                                </div>
                                            ) : (
                                                <div className="badge badge-warning gap-2">
                                                    Working on it
                                                </div>
                                            )
                                        }

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