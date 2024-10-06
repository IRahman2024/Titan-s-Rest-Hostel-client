import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosScure";
import useAuth from "../../hooks/useAuth";

const AddComplain = () => {

    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // console.log(user);
    

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        // console.log(data)

        //send menu item form data to database
        const complain = {
            name: user?.displayName,
            email: user?.email,
            details: data.details,
            status: 'pending'
        }
        console.log(complain);
        const complainRes = await axiosSecure.post(`/complains`, complain);
        console.log(complainRes.data);
        if (complainRes.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `you complain has been submitted`,
                showConfirmButton: false,
                timer: 1500
            });
        }


        // const imageUrl= res.data.data.display_url
        // console.log(imageUrl);
    }


    return (
        <div className="mx-72 my-8">
            <Helmet>
                <title>Titan's Rest | Complain</title>
            </Helmet>
            <div className="md:mx-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    {/* <input {...register("name")} /> */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Student Name</span>
                        </div>
                        <input
                            value={user?.displayName}
                            disabled
                            type="text" placeholder="Type Your name" className="input input-bordered input-info w-full" />
                    </label>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Student Email</span>
                        </div>
                        <input
                            value={user?.email}
                            disabled
                            placeholder="Type Your E-mail" className="input input-bordered input-info w-full" />
                    </label>

                    <div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea
                                {...register("details", { required: true })}
                                className="textarea textarea-info" placeholder="details"></textarea>
                        </label>
                    </div>

                    <div className='max-w-1/2 mx-auto mt-4'>
                        <button className="btn btn-info">Add My Complain</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddComplain;