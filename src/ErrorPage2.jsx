import { Link } from 'react-router-dom';
import './ErrorPage2.css'
const ErrorPage2 = () => {
    
    return (
        <div>
            <section className="page_404 flex justify-center mt-24">
                <div className="container">
                    <div className="">
                        <div className="">
                            <div className="text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center text-8xl text-black">404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="text-3xl font-semibold">
                                        Look like you're lost
                                    </h3>
                                    <p>the page you are looking for not avaible!</p>
                                    <Link to='/' className="link_404">Go to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage2;