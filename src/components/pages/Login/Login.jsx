/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import { ToastContainer } from "react-toastify";

const Login = () => {
    const [disabled, setDisabled] = useState(true);

    const captchaRef = useRef()

    const handleValidateCaptcha = () => {
        const value = captchaRef.current.value;
        if (validateCaptcha(value) == true) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    useEffect(() => {
        //koto character er capchat chai oita dite hbe 
        loadCaptchaEnginge(6);
    }, [])

    return (
        <>
            <Helmet>
                <title>Titan's Rest | LogIn</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 md:w-1/2 max-w-xs shadow-2xl bg-base-100">
                        <form
                            // onSubmit={handleLogin}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {/* captcha */}
                            <div className="form-control">
                                {/* <label className="label">
                                    <LoadCanvasTemplate />
                                </label> */}
                                <input
                                    onBlur={handleValidateCaptcha}
                                    type="text" placeholder="type the captcha" ref={captchaRef} className="input input-bordered" required />
                            </div>
                            <p><small>New here <Link className='hover:text-blue-500' to='/signUp'>SignUp here</Link></small></p>
                            <SocialLogin></SocialLogin>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;