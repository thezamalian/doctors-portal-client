import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();

    // observer of user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              setError("");
            } else {
                setUser({});
            }
            setIsLoading(false);
          });
        return () => unsubscribe;
    }, []);

    const registerUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password) 
            .then((userCredential) => {
                // Signed in 
                // const newUser = userCredential.user;
                // setUser(newUser);
                setError("");
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                setError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               const destination = location?.state?.from || '/';
               history.replace(destination);
                setError("");
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        error,
        registerUser,
        loginUser,
        logOut
    }
};

export default useFirebase;