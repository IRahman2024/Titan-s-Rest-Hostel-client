import { useState } from "react";
import useGetPublic from "../../../../hooks/useGetPublic";
import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosScure";

const ManageUsers = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const axiosSecure = useAxiosSecure();

    // const {name , email, badge, } 

    const handleSearchByEmail = e => {
        e.preventDefault();
        setEmail(e.target.search.value);
        console.log(e.target.search.value);
    }

    const handleSearchByUserName = e => {
        e.preventDefault();
        setUserName(e.target.search.value);
        console.log(e.target.search.value);
    }

    const url = `/users?email=${email}&userName=${userName}`;
    const { data, isPending: loader, refetch } = useQuery({
        queryKey: ['manage-all-users', url],
        queryFn: async () => {
            const response = await axiosSecure.get(url)
            // console.log(response);
            return response.data;
        }
    })

    const handleMakeAdmin = data => {

        // console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch(`/users/admin/${data._id}`)
                        .then(res => {
                            console.log(res);
                            if (res.data.modifiedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Success!",
                                    text: `${data.name} is a new admin.`,
                                    icon: "success",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })

                }
            });
    }

    console.log(data);
    return (
        <div>
            {/* search */}
            <div>
                <div className="flex mb-4">
                    <div>
                        <form
                            onSubmit={handleSearchByUserName}
                            className="search-bar">
                            <input type="search"
                                placeholder="search by user name"
                                name="search" pattern=".*\S.*" required />
                            <button className="search-btn" type="submit">
                                <span>Search</span>
                            </button>
                        </form>
                    </div>
                    <div>
                        <form
                            onSubmit={handleSearchByEmail}
                            className="search-bar">
                            <input type="search"
                                placeholder="search by email"
                                name="search" pattern=".*\S.*" required />
                            <button className="search-btn" type="submit">
                                <span>Search</span>
                            </button>
                        </form>
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Button</th>
                                <th>Subscription Status</th>
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
                                        {data.email}
                                    </td>
                                    {/* button */}
                                    <td>
                                        {
                                            data.role === 'admin' ?
                                            'Admin' : <button
                                            onClick={() => handleMakeAdmin(data)}
                                            className="btn btn-success btn-xs">Make Admin</button>
                                        }
                                        {/* <button
                                        onClick={handleMakeAdmin}
                                        className="btn btn-success btn-xs">Make Admin</button> */}
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
        </div>
    );
};

export default ManageUsers;