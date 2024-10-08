/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosScure";
import useAuth from "../../hooks/useAuth";


const image_host = import.meta.env.VITE_imagebb_api_key;
const image_host_api = `https://api.imgbb.com/1/upload?key=${image_host}`;

const AddMeals = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    // console.log(user.email);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    {/* //title, category(breakfast, lunch, dinner), img, inggredients, dscription, price, rating, post-time, admin-name, admin-email
     */}

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] };

        //first upload image in imagebb then save the returned url
        const res = await axiosPublic.post(image_host_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            //send menu item form data to database
            const mealItems = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                details: data.details,
                ingredients: data.ingredients,
                distributorEmail: user?.email,
                distributorName: user?.displayName,
                image: res.data.data.display_url
            }
            console.log(mealItems);
            const mealRes = await axiosSecure.post(`/meals/${user.email}`, mealItems);
            console.log(mealRes.data);
            if (mealRes.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} was added`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        // const imageUrl= res.data.data.display_url
        // console.log(imageUrl);
    }

    return (
        <div className="mx-72 my-8">
            <Helmet>
                <title>Titan's Rest | Add Meal</title>
            </Helmet>
            <div>
                <div className='mx-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        {/* <input {...register("name")} /> */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Meal Name</span>
                            </div>
                            <input
                                {...register("name", { required: true })}
                                type="text" placeholder="Type Dish name" className="input input-bordered input-info w-full" />
                        </label>


                        {/* category and price */}
                        <div className='flex gap-x-2'>
                            {/* category */}
                            <div className=' w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Category</span>
                                    </div>
                                    <select id='category'
                                        {...register("category", { required: "Category is required" })}
                                        className={`select select-info w-full ${errors.category ? 'is-invalid' : ''}`
                                        }
                                        defaultValue=''
                                    >
                                        <option value='' disabled>Select a category</option>
                                        <option value='breakfast'>Breakfast</option>
                                        <option value='lunch'>Lunch</option>
                                        <option value='dinner'>Dinner</option>
                                    </select>
                                    {errors.category && <p className="error-message text-red-400">{errors.category.message}</p>}
                                </label>
                            </div>
                            {/* price */}
                            <div className=' w-1/2'>
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Price$</span>
                                    </div>
                                    <input
                                        {...register("price", { required: true })}
                                        type="text" placeholder="Type Price" className="input input-bordered input-info w-full" />
                                </label>
                            </div>
                        </div>
                        {/* admin name and email */}
                        <div className='flex gap-x-2'>
                            {/* admin name */}
                            <div className=' w-1/2'>
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Admin/Distributor Name</span>
                                    </div>
                                    <input
                                        {...register("distributorName")}
                                        type="text" placeholder="Enter Admin or Distributor name" className="input input-bordered input-info w-full"
                                        value={user?.displayName}
                                        readOnly/>
                                </label>
                            </div>
                            {/* distributor email */}
                            <div className=' w-1/2'>
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Distributor/Admin Email</span>
                                    </div>
                                    <input
                                        {...register("distributorEmail")}
                                        type="email" placeholder="Type Admin or distributor Email" className="input input-bordered input-info w-full" 
                                        defaultValue={user?.email}
                                        readOnly/>
                                </label>
                            </div>
                        </div>



                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Ingredients</span>
                                </div>
                                <textarea
                                    {...register("ingredients", { required: true })}
                                    className="textarea textarea-info" placeholder="ingredients"></textarea>
                            </label>
                        </div>
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
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Add Image</span>
                            </div>
                            <input
                                {...register('image', { required: true })}
                                type="file" className="file-input w-full max-w-xs" />
                        </label>
                        <div className='max-w-1/2 mx-auto mt-4'>
                            <button className="btn btn-info">Add Recipe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMeals;