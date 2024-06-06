import MemberShip from "../../MemberShip/MemberShip";
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
        </div>
    );
};

export default Home;