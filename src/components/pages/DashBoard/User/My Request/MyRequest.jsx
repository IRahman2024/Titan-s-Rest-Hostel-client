import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import { axiosSecure } from "../../../../hooks/useAxiosScure";
import useGetPublic from "../../../../hooks/useGetPublic";

const MyRequest = () => {

    const { user } = useAuth();
    //email er je request korse
    const { data, loader, refetch } = useGetPublic('request-data', `/request/${user?.email}`);

    const handleDelete = (id) => {
        axiosSecure.delete(`/request/${id}`)
            .then(res => {
                console.log(res);
                refetch();
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your request has been canceled.",
                        icon: "success"
                    });
                }
            })
            refetch();
    }

    console.log(data);
    // const { email, name, review: reviewCount, title: foodName, status } = data

    if(loader){
        return <p>please wait data loading</p>
    }

    if(data.length === 0){
        refetch();
        return <p>No data Found</p>
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
                                <th>Meal Name</th>
                                <th>Likes</th>
                                <th>Reviews</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                data.map((data, idx) => <tr key={idx}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        {data.title}
                                    </td>
                                    <td>
                                        {data.like}
                                        <br />
                                        {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                    </td>
                                    <td>{data.review}</td>
                                    <td className="text-green-500">{data.status}</td>
                                    <td >
                                        <button 
                                        onClick={()=>handleDelete(data._id)}
                                        className="btn btn-xs btn-error">Cancel</button>
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

export default MyRequest;