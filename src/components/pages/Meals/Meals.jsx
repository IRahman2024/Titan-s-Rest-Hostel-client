import { useState } from "react";
// import useMeals from "../../hooks/useMeals";
import MealCard from "../Home/MealsSection/MealCard";
import './searchbar.css';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Meals = () => {
    // const [meals, refetch] = useMeals();
    const [search, setSearch] = useState('');
    const axiosPublic = useAxiosPublic();


    const handleSearch = e => {
        e.preventDefault();
        setSearch(e.target.search.value);
    }

    const url = `/meals?name=${search}`;
    const { data: meals, isPending: loader } = useQuery({
        queryKey: ['allFoods', url],
        queryFn: async () => {
            const response = await axiosPublic.get(url)
            console.log(response);
            return response.data;
        }
    })

    if (loader) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    console.log(meals);


    return (
        <div>
            <div>
                <form
                    onSubmit={handleSearch}
                    className="search-bar">
                    <input type="search" name="search" pattern=".*\S.*" required />
                    <button className="search-btn" type="submit">
                        <span>Search</span>
                    </button>
                </form>
            </div>
            <div className="mx-36 my-5 gap-y-5 grid grid-cols-3">
                {
                    meals.map((meal, idx) => <MealCard key={idx}
                        meal={meal}
                    ></MealCard>)
                }
            </div>
        </div>
    );
};

export default Meals;