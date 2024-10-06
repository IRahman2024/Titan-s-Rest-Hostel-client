import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosScure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";

const AllComplains = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data, isPending: loader, refetch } = useQuery({
        queryKey: ['all-complains', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/complains');
            return res.data;
        }
    })

    if (loader) {
        return <p>please wait</p>
    }

    if (!data.length) {
        return <p className="text-4xl">No Complains Yet</p>
    }

    console.log(data);

    const handleChange = (id, x) => {
        console.log(id, x);   
        //pending and solved
        const status = {
            status: x
        }
        
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to take action now?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Now!"
        }).then((res) => {
            console.log(res);
            if (res.isConfirmed) {
                axiosSecure.patch(`changeStatus/${id}`, status)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            Swal.fire({
                                title: "Thanks",
                                text: "Status Changed!",
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
                            <th>Student Name</th>
                            <th>E-mail</th>
                            <th>Description</th>
                            <th>Change Status</th>
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
                                    {data?.name}
                                </td>
                                <td>
                                    {data?.email}
                                </td>
                                <td>
                                    {data.details ? data.details : 'no complain found!'}
                                </td>
                                {/* button */}
                                <td>
                                    <div className="dropdown dropdown-bottom">
                                        <div tabIndex={0} role="button" className="btn m-1">{data?.status}</div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                            <li 
                                            className="bg-red-500 text-black font-black"
                                            onClick={() => handleChange(data?._id, 'pending')}><a>Pending</a></li>
                                            <li 
                                            className="bg-yellow-400
                                            text-red-600 font-black"
                                            onClick={() => handleChange(data?._id, 'working')}><a>Working`</a></li>
                                            <li
                                            className="bg-green-500
                                            font-black"
                                            onClick={() => handleChange(data?._id, 'solved')}><a>Resolved</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllComplains;