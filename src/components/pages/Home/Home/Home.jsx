import MemberShip from "../../MemberShip/MemberShip";
import MealsSection from "../MealsSection/MealsSection";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div>
            <div className="my-5">
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