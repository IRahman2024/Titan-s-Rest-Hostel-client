import { useState } from "react";
// import useMeals from "../../hooks/useMeals";
import MealCard from "../Home/MealsSection/MealCard";
import './searchbar.css';
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosScure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { axiosPublic } from "../../hooks/useAxiosPublic";

const Meals = () => {
    // const [meals, refetch] = useMeals();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [range, setRange] = useState(0);
    const axiosSecure = useAxiosSecure();


    const handleSearch = e => {
        e.preventDefault();
        setSearch(e.target.search.value);
    }
    // console.log(range);

    const url = `/meals?name=${search}&category=${category}&range=${range}`;
    const { data: meals, isPending: loader } = useQuery({
        queryKey: ['allFoods', url],
        queryFn: async () => {
            const response = await axiosPublic.get(url)
            // console.log(response);
            return response.data;
        }
    })

    if (loader) {
        return <div className="grid grid-cols-4 space-y-3 m-5">
            <div className="flex flex-col gap-4 w-52 m-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52 m-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52 m-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52 m-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52 m-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52 m-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52 m-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex flex-col gap-4 w-52 m-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>    
        </div>
    }

    // console.log(meals);


    return (
        <div>
            <div className="flex m-4">
                <div className="dropdown btn-primary">
                    <div tabIndex={0} role="button" className="btn m-1 px-7">Filter By Category</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-500 rounded-box w-52">
                        <li onClick={() => setCategory('breakfast')}><a>Breakfast</a></li>
                        <li onClick={() => setCategory('lunch')}><a>Lunch</a></li>
                        <li onClick={() => setCategory('dinner')}><a>Dinner</a></li>
                    </ul>
                </div>
                {/* range */}
                <div className="dropdown btn-primary">
                    <div tabIndex={0} role="button" className="btn m-1 px-7">Filter Price Range</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-blue-500 rounded-box w-52">
                        <li onClick={() => setRange(100)}><a>Above 100</a></li>
                        <li onClick={() => setRange(200)}><a>Above 200</a></li>
                        <li onClick={() => setRange(300)}><a>Above 300</a></li>
                    </ul>
                </div>
                
                <form
                    onSubmit={handleSearch}
                    className="search-bar">
                    <input type="search" name="search" pattern=".*\S.*" required />
                    <button className="search-btn" type="submit">
                        <span>Search</span>
                    </button>
                </form>
            </div>
            <SectionTitle heading={'Our Meals'}></SectionTitle>
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