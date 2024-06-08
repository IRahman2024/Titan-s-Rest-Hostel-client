import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { updateProfile } from "firebase/auth/cordova";
// import { app } from "../../Firebase/firebase.config";
import useAxiosPublic from "../components/hooks/useAxiosPublic";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    

    const axiosPublic = useAxiosPublic();

    const createUser = (email, pass) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const signIn = (email, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }
    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }
    const gitHubSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            //todo:
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            // console.log(res.data.token);
                            setLoader(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoader(false);
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        googleSignIn,
        gitHubSignIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;