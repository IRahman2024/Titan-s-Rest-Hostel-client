import { ModalContainer, Reoverlay } from "reoverlay";
import FormModal from "./FormModal";
import useGetPublic from "../../../../hooks/useGetPublic";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosScure";

const UpcomingMeals = () => {
    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { data, loader, refetch } = useGetPublic('upcoming-meal-table-data', '/upcomingMeals');
    console.log(data);

    if (loader) {
        return <>
            <div className="flex flex-col gap-4 w-full">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </>
    }

    const showFormModal = () => {
        Reoverlay.showModal(FormModal)
    }

    const handlePublish = (id, name) => {
        console.log(name);
        axiosSecure.patch(`/upcomingMeals/${id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: "Published!",
                        text: `${name} has been Published.`,
                        icon: "success"
                    });
                }
            })
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
                            <th>Category</th>
                            <th>Likes</th>
                            <th>Publish</th>
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
                                    {data?.category}
                                </td>
                                <td>
                                    {data.likeCount ? data.likeCount : '0'}
                                </td>
                                {/* button */}
                                <td>
                                    <button
                                        onClick={() => handlePublish(data._id, data.name)}
                                        className="btn btn-success btn-xs">Publish</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
            <div>
                <button onClick={showFormModal} className="btn btn-md btn-success">Add upcoming meal</button>
                <ModalContainer />
            </div>
        </div>
    );
};

export default UpcomingMeals;