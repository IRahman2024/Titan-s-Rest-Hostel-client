import useMeals from "../../hooks/useMeals";
import MealCard from "../Home/MealsSection/MealCard";

const Meals = () => {
    const meals = useMeals();
    console.log(meals);

    return (
        <div>
            {/* {
                meals.map((meal, idx) => <MealCard key={idx}
                meal={meal}
                ></MealCard>)
            } */}
        </div>
    );
};

export default Meals;