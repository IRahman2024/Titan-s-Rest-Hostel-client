import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import useGetPublic from "../../hooks/useGetPublic";

const SocialLogin = () => {
    const { googleSignIn, gitHubSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { data, loader } = useGetPublic('all-users', '/users');
    const emailList = data?.map(item => item.email)
    // console.log(emailList);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                console.log(result.user);
                if (!emailList.includes(result.user?.email)) {
                    const userInfo = {
                        email: result.user?.email,
                        name: result.user?.displayName,
                        image: result.user?.photoURL,
                        badge: 'Bronze',
                        role: 'user'
                    }
                    axiosPublic.post('/users', userInfo)
                }
            })
    }

    const handleGithubSignIn = () => {
        gitHubSignIn()
            .then(result => {
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                console.log(result.user);
                if (!emailList.includes(result.user?.email)) {
                    const userInfo = {
                        email: result.user?.email,
                        name: result.user?.displayName,
                        image: result.user?.photoURL,
                        badge: 'Bronze',
                        role: 'user'
                    }
                    axiosPublic.post('/users', userInfo)
                }
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