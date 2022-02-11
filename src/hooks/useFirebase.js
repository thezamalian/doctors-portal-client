import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut, onAuthStateChanged, GoogleAuthProvider,signInWithPopup, updateProfile } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

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

    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password) 
            .then((userCredential) => {
                const newUser = {displayName: name, email};
                setUser(newUser);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                  }).catch((error) => {
                  });
                setError("");
                history.replace('/');
            })
            .catch((error) => {
                // const errorCode = error.code;
                setError(error.message);
                // ..
            }).finally(() => setIsLoading(false));
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
            }).finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, histoy) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setError("");
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          }).finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        error,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut
    }
};

export default useFirebase;