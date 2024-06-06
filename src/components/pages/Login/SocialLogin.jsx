import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn, gitHubSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
            }
            console.log(result.user);
            //todo: 
            // axiosPublic.post('/users', userInfo)
            // .then(res=>{
            //     console.log(res.data);
            //     navigate('/');
            // })
        })
    }

    const handleGithubSignIn = () =>{
        gitHubSignIn()
        .then(result =>{
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
            }
            console.log(result.user);
            //todo: 
            // axiosPublic.post('/users', userInfo)
            // .then(res=>{
            //     console.log(res.data);
            //     navigate('/');
            // })
        })
    }


    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline mr-2">
                    <FaGoogle></FaGoogle>
                </button>
                <button onClick={handleGithubSignIn} className="btn btn-outline">
                <FaGithub />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;