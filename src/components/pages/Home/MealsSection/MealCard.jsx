const MealCard = ({meal}) => {
    //todo: rating missing
    const { name, category, price, details, ingredients, distributorEmail, distributorName, image } = meal;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img
                className="w-full h-64"
                src={image} alt="Shoes" /></figure>
            <p className="bg-black rounded-xl p-2 text-white absolute  right-2 top-3">$ {price}</p>
            <div className="card-body bg-green-800 rounded-b-2xl">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button
                        // onClick={() => handleAddToCart(item)}
                        className="btn border-0 border-b-4 border-yellow-100">Details</button>
                </div>
            </div>
        </div>
    );
};

export default MealCard;