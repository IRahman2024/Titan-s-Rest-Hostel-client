import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const MealCard2 = ({ meal }) => {
    //todo: rating missing
    const { name, price, image, _id, rating } = meal;
    // console.log(meal);
    // const { name, category, price, details, ingredients, distributorEmail, distributorName, image, _id, rating } = meal;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img
                className="w-full h-64"
                src={image} alt="Shoes" /></figure>
            <p className="bg-black rounded-xl p-2 text-white absolute  right-2 top-3">$ {price}</p>
            <div className="card-body bg-green-800 rounded-b-2xl">
                <h2 className="card-title">{name}</h2>
                <div className="flex items-center">
                    Rating: <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                </div>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/upMeals/${_id}`}>
                        <button
                            className="btn border-0 border-b-4 border-yellow-100">Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MealCard2;