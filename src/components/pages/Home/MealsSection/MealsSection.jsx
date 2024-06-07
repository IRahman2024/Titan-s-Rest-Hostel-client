import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useMeals from "../../../hooks/useMeals";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MealTab from "./MealTab";

const MealsSection = () => {

    const categories = ['breakfast', 'lunch', 'dinner'];
    // const { category } = useParams();
    // console.log(category);
    // const initialIndex = categories.indexOf(category);
    // console.log(initialIndex);
    const [tabIndex, setTabIndex] = useState(1);
    const [meals] = useMeals();

    const breakfast = meals?.filter(meal => meal.category === 'breakfast');
    const lunch = meals?.filter(meal => meal.category === 'lunch');
    const dinner = meals?.filter(meal => meal.category === 'dinner');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Orders</title>
            </Helmet>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Breakfast</Tab>
                    <Tab>Lunch</Tab>
                    <Tab>Dinner</Tab>
                </TabList>
                <TabPanel>
                    <MealTab meal={breakfast}></MealTab>
                </TabPanel>
                <TabPanel>
                    <MealTab meal={lunch}></MealTab>
                </TabPanel>
                <TabPanel>
                    <MealTab meal={dinner}></MealTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default MealsSection; 