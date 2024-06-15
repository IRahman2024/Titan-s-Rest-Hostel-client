import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosScure";
import Swal from "sweetalert2";
import useGetPublic from "../../../hooks/useGetPublic";
import ReviewCard from "./ReviewCard";

const MealDetails = () => {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [like, setLike] = useState(false);
    const { user } = useAuth();

    const { id } = useParams();
    //meal info loader
    const { data: meal = {}, isPending: loader, refetch } = useQuery({
        queryKey: ['singleMeal'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/meals/${id}`);
            // const res2 = await axiosPublic.post(`/meals/${id}`, );
            return res.data;
        }
    })

    const {data: userEmail, loader: userLoader} = useGetPublic('user-for-meal', `/users/${user?.email}`)

    const isLike = meal?.likeArray?.includes(user?.email) || false;
    const isAvailable = meal?.status === 'available';
    const isPremium = !isAvailable && userEmail?.badge !== 'Bronze'


    // console.log({ isAvailable });
    // console.log(userEmail?.badge !== 'Bronze');

    const { data, loader: loader3, refetch: refetch3 } = useGetPublic('review-email-title', `/reviews-email-title/${user?.email}?title=${meal?.name}`);
    // refetch3();
    // console.log(data.like);

    //review loaders only for specific food
    const { data: reviews, loader: loader2, refetch: refetch2 } = useGetPublic('reviews', `/reviews/${id}`)

    // const {_id} = meal;


    // console.log(user);

    const handleReview = async (_id) => {
        // e.preventDefault();
        const text = document.getElementById('bio-textarea').value;
        document.getElementById(_id).close();

        const review = {
            reviewId: id,
            title: meal.name,
            review: text,
            userName: user.displayName,
            email: user.email,
            image: user.photoURL
        }
        console.log('food review ', review);
        const res = await axiosSecure.post(`/reviews`, review);
        const res2 = await axiosPublic.patch(`/mealsReview/${id}`)
            .then(() => {
                Swal.fire({
                    title: "Review Accepted!",
                    text: `Thanks Your Review`,
                    icon: "success"
                });
            })

        // console.log(res);
        // console.log(res2);
        refetch();
        refetch2();
    }

    const handleLike = async () => {
        // console.log(id);
        //like er count +

        let likeArray = [];
        likeArray.push(user.email);
        //setting likeArray
        const res = await axiosPublic.patch(`/meals-likeArray/${meal._id}`, likeArray);
        //setting likeCount
        const res2 = await axiosPublic.patch(`/likeCount/${id}`);
        if (res.data.modifiedCount) {
            refetch();
        }
        console.log(res, res2);

    }

    const handleRequest = async () => {
        const request = {
            title: meal.name,
            requestId: id,
            email: user.email,
            name: user.displayName,
            status: 'Requested',
            review: reviews?.length,
            like: meal?.likeCount
        }
        axiosSecure.post('/request', request)
            .then(() => {
                Swal.fire({
                    title: "Request Successful",
                    text: `Your Request Has Been Received`,
                    icon: "success"
                });
            })
    }

    if (loader) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const { name, category, price, details, ingredients, distributorEmail, distributorName, image, _id, rating, postTime, status } = meal;

    // console.log(showLike);

    return (
        <div>
            <Helmet>
                <title>Titan's Nest | Meal</title>
            </Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-12 lg:mx-64 my-7">
                <figure><img
                    className="lg:w-96 lg:h-96"
                    src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>Description: {details}</p>
                    <p>Ingredients: {ingredients}</p>
                    <p>Distributor name: {distributorName}</p>
                    <p>Distributor email: {distributorEmail}</p>
                    <div className="flex items-center">
                        Rating: <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                            readOnly
                        />
                    </div>
                    <p>Post Time: {postTime}</p>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        {/* {
                            isLike ? '' :
                                <button
                                    onClick={() => handleLike()}
                                    className="btn btn-primary">
                                    <AiOutlineLike />Like</button>
                        } */}
                        {
                            !isLike && isPremium &&
                                <button
                                    onClick={() => handleLike()}
                                    className="btn btn-primary">
                                    <AiOutlineLike />Like</button>
                        }
                        {
                            !isLike && isAvailable &&
                                <button
                                    onClick={() => handleLike()}
                                    className="btn btn-primary">
                                    <AiOutlineLike />Like
                                </button>
                        }
                        {
                            status === 'upcoming' ? '' : <button
                                onClick={handleRequest}
                                className="btn btn-success">Request
                            </button>
                        }
                        {
                            status === 'upcoming' ? '' : <>
                                <button className="btn btn-error" onClick={() => document.getElementById(_id).showModal()}>Review</button>
                                <dialog id={_id} className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Write Your Review Here</h3>
                                        {/* text area here */}

                                        <div className="grid justify-items-start gap-2">
                                            <textarea
                                                id="bio-textarea"
                                                className="textarea textarea-primary w-full" placeholder="Bio">
                                            </textarea>
                                        </div>

                                        <div className="modal-action">
                                            <button
                                                onClick={() => handleReview(_id)}
                                                className="btn">Done</button>
                                            <form
                                                method="dialog"
                                            >
                                                {/* if there is a button in form, it will close the modal */}
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </>
                        }
                    </div>
                </div>
            </div>
            {/* reviews */}
            {
                status === 'upcoming' ? null : (
                    loader2 ? <div className="flex flex-col items-center my-4">
                        < p>Please wait.. loading</p>
                    </div> :
                        <div className="flex flex-col items-center my-4">
                            <p className="text-3xl font-semibold">Total review: {reviews?.length}</p>
                            <div className="grid grid-cols-3 gap-3">
                                {
                                    reviews?.map((review, idx) => <ReviewCard key={idx} data={review}></ReviewCard>)
                                }
                            </div>
                        </div>
                )
            }

            {/* {
                loader2 ? <div className="flex flex-col items-center my-4">
                    < p>Please wait.. loading</p>
                </div> :
                    <div className="flex flex-col items-center my-4">
                        <p className="text-3xl font-semibold">Total review: {reviews?.length}</p>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                reviews?.map((review, idx) => <ReviewCard key={idx} data={review}></ReviewCard>)
                            }
                        </div>
                    </div>
            } */}

        </div>
    );
};

export default MealDetails;