const ReviewCard = ({ data }) => {
    // console.log(data);
    const { review, userName, image } = data;

    return (
        <div className="card w-96 bg-teal-600 shadow-xl mt-2">
            <div className="card-body">
                <div className="flex">
                    <div className="avatar">
                        <div className="w-14 rounded-xl mr-3">
                            <img src={image} />
                        </div>
                    </div>
                    <h2 className="card-title">{userName}</h2>
                </div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;