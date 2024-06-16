import { useLoaderData, useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosScure";

const image_host = import.meta.env.VITE_imagebb_api_key;
const image_host_api = `https://api.imgbb.com/1/upload?key=${image_host}`;

const UpdateItem = () => {
    
    const data = useLoaderData();
    const id = useParams();
    const {category, details, distributorEmail, distributorName, image, ingredients, name, price, rating, _id} = data;

    console.log(data);

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
    } = useForm();


    const onSubmit = async (data) => {
        // console.log(data)
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
                distributorEmail: data.distributorEmail,
                distributorName : data.distributorName ,
                image: res.data.data.display_url,
                updateTime: new Date(),
                rating: data.rating
            }
            // console.log(mealItems);
            const mealRes = await axiosSecure.patch(`/meals/${_id}`, mealItems);
            console.log(mealRes.data);
            if (mealRes.data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} was updated`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            console.log(mealRes);
        }
        // const imageUrl= res.data.data.display_url
        // console.log(imageUrl);
    }

    return (
        <div className="mx-72 my-8">
            <Helmet>
                <title>Titan's Rest | Update Meal</title>
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
                            <input defaultValue={name}
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
                                    <select defaultValue={category}
                                        {...register("category", { required: true })}
                                        className="select select-info w-full">
                                        <option disabled>Select a category</option>
                                        <option value='breakfast'>Breakfast</option>
                                        <option value='lunch'>Lunch</option>
                                        <option value='dinner'>Dinner</option>
                                    </select>
                                </label>
                            </div>
                            {/* price */}
                            <div className=' w-1/2'>
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Price$</span>
                                    </div>
                                    <input
                                        defaultValue={price}
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
                                        defaultValue={distributorName}
                                        {...register("distributorName", { required: true })}
                                        type="text" placeholder="Enter Admin or Distributor name" className="input input-bordered input-info w-full" />
                                </label>
                            </div>
                            {/* distributor email */}
                            <div className=' w-1/2'>
                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Distributor/Admin Email</span>
                                    </div>
                                    <input
                                        defaultValue={distributorEmail}
                                        {...register("distributorEmail", { required: true })}
                                        type="email" placeholder="Type Admin or distributor Email" className="input input-bordered input-info w-full" />
                                </label>
                            </div>
                        </div>



                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Ingredients</span>
                                </div>
                                <textarea
                                defaultValue={ingredients}
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
                                defaultValue={details}
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
                        <div className=' w-1/2'>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">rating</span>
                                    </div>
                                    <select defaultValue={rating}
                                        {...register("rating", { required: true })}
                                        className="select select-info w-full">
                                        <option disabled>Select rating</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </label>
                            </div>
                        <div className='max-w-1/2 mx-auto mt-4'>
                            <button className="btn btn-info">Update Recipe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;