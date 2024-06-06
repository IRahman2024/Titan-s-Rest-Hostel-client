/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Banner.css'

const Banner = () => {
    return (
        <div className="">
            <Carousel
                useKeyboardArrows={true}
                showThumbs={false}
            >
                <div className="flex items-center justify-center img1 py-32 md:py-36 lg:py-64">
                    <div>
                        <p className="text-6xl text-black font-bold mb-4"><span className="text-4xl">Welcome to </span><br /> Titan's Nest</p>
                        <label className="input input-bordered rounded-full flex items-center gap-2 max-w-96">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-center img2 py-32 md:py-36 lg:py-64">
                    <div>
                        <p className="text-6xl text-black font-bold mb-4"><span className="text-4xl">Welcome to </span><br /> Titan's Nest</p>
                        <label className="input input-bordered rounded-full flex items-center gap-2 max-w-96">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                </div>
                <div className="flex items-center justify-center img3 py-32 md:py-36 lg:py-64">
                    <div>
                        <p className="text-6xl text-black font-bold mb-4"><span className="text-4xl">Welcome to </span><br /> Titan's Nest</p>
                        <label className="input input-bordered rounded-full flex items-center gap-2 max-w-96">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;