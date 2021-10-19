import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from '../Pages/Login/Firebase/firebaseInitialize'

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                setUser(result.user)

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
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
        if (password.length < 6) {
            setError("password must be more than 6 character long")
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("password must contain two uppercase letters")
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
        error
    }

}

export default useFirebase;