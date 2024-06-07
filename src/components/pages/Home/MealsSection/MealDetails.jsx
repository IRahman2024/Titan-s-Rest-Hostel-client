import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

const MealDetails = () => {

    const axiosPublic = useAxiosPublic();
    const [like, setLike] = useState(false);

    const { id } = useParams();

    const { data: meal, isPending: loader, refetch } = useQuery({
        queryKey: ['singleMeal'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/meals/${id}`);
            return res.data;
        }
    })

    if (loader) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const { name, category, price, details, ingredients, distributorEmail, distributorName, image, _id } = meal;

    console.log(like);

    return (
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
                <div className="card-actions justify-end">
                    {
                        like ? <button onClick={()=>setLike(false)} className="btn btn-primary">
                            <AiFillLike />Unlike</button> :
                            <button 
                            onClick={()=>setLike(true)}
                            className="btn btn-primary">
                            <AiOutlineLike />Like</button>
                    }


                    <button className="btn btn-success">Request</button>
                    <button className="btn btn-error">Review</button>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;