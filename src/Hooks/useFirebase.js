import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from '../Pages/Login/Firebase/firebaseInitialize'

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    // google sign in 
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // github sign in 
    const handleGithubSignInBtn = () => {
        setIsLoading(true)
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
            .catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    //for onAuthStateChange 

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unSubscribe;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }

    //manual login part
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleSubmitBtn = e => {
        e.preventDefault();
        // console.log(email, password)
        if (user.email === email) {
            setError("invalid email")
            return
        }
        if (password.length < 10) {
            setError("Password must be more than 6 character long")
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain two uppercase letters")
            return;
        }
        if ((/[0-9]/) < 0) {
            setError("Your password must contain at least one digit.")
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                console.log(user);
            }).catch(error => {
                setError(error.message)
            })
    }
    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleEmail,
        handlePassword,
        handleSubmitBtn,
        error,
        handleGithubSignInBtn
    }

}

export default useFirebase;