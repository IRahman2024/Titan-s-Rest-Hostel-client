import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../hooks/useAxiosScure";
import { useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Serve = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const axiosPublic = useAxiosPublic();

    const handleSearchByEmail = e => {
        e.preventDefault();
        setEmail(e.target.search.value);
        // console.log(e.target.search.value);
    }

    const handleSearchByUserName = e => {
        e.preventDefault();
        setUserName(e.target.search.value);
        // console.log(e.target.search.value);
    }

    const url = `/request?email=${email}&userName=${userName}`
    const { data, loader, refetch } = useQuery({
        queryKey: ['upcoming-meals', url],
        queryFn: async () => {
            const response = await axiosPublic.get(url)
            // console.log(response);
            return response.data;
        }
    });

    // const { data, loader, refetch } = useGetPublic('request-serve', '/request');

    // console.log(data);

    if (loader) {
        return <p className="test-4xl">Please Wait...</p>
    }

    const handleServe = id => {
        console.log(id);
        axiosSecure.patch(`/request/${id}`);
        refetch();
    }

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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Food Title</th>
                            <th>Status</th>
                            <th>Button</th>
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
                                <td>
                                    {data.title}
                                </td>
                                <td>
                                    {data.status}
                                </td>
                                {/* button */}
                                <td>
                                    {
                                        data.status === 'Requested' ?
                                            <button
                                                onClick={() => handleServe(data._id)}
                                                className="btn btn-xs btn-success">Serve</button>
                                            : <p className="text-green-400">Already Served</p>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Serve;