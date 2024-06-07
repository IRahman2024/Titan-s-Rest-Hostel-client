import MealCard from "./MealCard";

const MealTab = ({meal}) => {
    return (
        <div className='grid md:grid-cols-3 gap-y-9 justify-items-center'>
            {
                meal?.map((meal,idx)=> <MealCard key={idx}
                meal={meal}
                ></MealCard>)
            }
        </div>
    );
};

export default MealTab;