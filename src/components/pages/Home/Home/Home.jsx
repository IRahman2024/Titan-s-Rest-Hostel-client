import MemberShip from "../../MemberShip/MemberShip";
import MealsSection from "../MealsSection/MealsSection";
import Banner from "../banner/Banner";

const Home = () => {
    return (
        <div>
            <div className="my-4">
                <Banner></Banner>
            </div>
            <div className='mb-10 flex justify-center'>

                <MemberShip></MemberShip>
            </div>
            <MealsSection></MealsSection>
        </div>
    );
};

export default Home;