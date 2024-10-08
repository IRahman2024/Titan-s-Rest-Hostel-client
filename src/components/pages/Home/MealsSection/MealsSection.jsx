import { useState } from "react";
import { Helmet } from "react-helmet-async";
import useMeals from "../../../hooks/useMeals";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import MealTab from "./MealTab";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const MealsSection = () => {

    const initialIndex = 0;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [meals, loader] = useMeals();
    // console.log(meals);

    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    const breakfast = meals?.filter(meal => meal.category === 'breakfast');
    const lunch = meals?.filter(meal => meal.category === 'lunch');
    const dinner = meals?.filter(meal => meal.category === 'dinner');

    return (
        <div>
            <SectionTitle heading={'Our Meals'}></SectionTitle>
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