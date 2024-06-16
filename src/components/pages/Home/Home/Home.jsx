import { Helmet } from "react-helmet-async";
import MemberShip from "../../MemberShip/MemberShip";
import MealsSection from "../MealsSection/MealsSection";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Titan's Nest | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            <div className='my-10 mx-20 gap-x-10'>
                <div className="flex justify-center">
                    <MemberShip></MemberShip>
                </div>
                <MealsSection></MealsSection>
            </div>
        </div>
    );
};

export default Home;