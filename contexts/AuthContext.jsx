import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "./../libraries/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [token, setToken] = useState(null); // The token is the refresh token from firebase auth
  const [error, setError] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const navigation = useNavigation();

  //   Setting the user session on context load
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setToken(user.refreshToken);
        // console.log("The user is: ", user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  // Firebase Error handling
  const handleFirebaseAuthErrors = (err) => {
    if (
      err.code === "auth/user-not-found" ||
      err.code === "auth/wrong-password"
    ) {
      setError("Invalid email or password. Please check and try again");
    } else if (err.code === "auth/weak-password") {
      setError("Your password should be a minimum of 6 characters");
    } else if (err.code === "auth/email-already-in-use") {
      setError("The Email specified is already in use");
    } else if (err.code === "auth/invalid-email") {
      setError("The email address supplied is invalid");
    } else if (err.ocde === "auth/user-not-found") {
      setError("No user with the specified email address");
    } else if (err.code === "auth/too-many-requests)") {
      setError(
        "Access to your account has been temporaily banned due to many failed login attempt. Please try again later or reset your passwordf"
      );
    } else {
      setError("Soemthing went wrong. Please try again", err);
    }
  };

  const signup = (email, password, first_name, last_name, username) => {
    setAuthLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        AsyncStorage.setItem("token", userCredential.user.refreshToken);
        setToken(userCredential.user.refreshToken); // The the user details from the users collection
        // add user to the users collection if user does not exist
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              console.log("The user exists");
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              setDoc(userRef, {
                id: user.uid,
                email: user.email,
                first_name: first_name,
                last_name: last_name,
                username: username,
              })
                .then((doc) => {
                  console.log("Document written to the database");
                  setSession({
                    id: user.uid,
                    email: user.email,
                    first_name: first_name,
                    last_name: last_name,
                    username: username,
                  });
                  navigation.navigate("Tab");
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
        console.log("The user is: ", user);
        setAuthLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("The error is: ", errorMessage);
        handleFirebaseAuthErrors(error);
        setAuthLoading(false);
      });
  };

  const login = (email, password) => {
    setAuthLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        AsyncStorage.setItem("token", userCredential.user.refreshToken);
        setToken(userCredential.user.refreshToken);
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              console.log("The user exists");
              setSession(docSnap.data());
              navigation.navigate("Tab");
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
        console.log("The user is: ", user);
        setAuthLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("The error is: ", errorMessage);
        handleFirebaseAuthErrors(error);
        setAuthLoading(false);
      });
  };

  const logout = () => {
    setAuthLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAuthLoading(false);
      })
      .catch((error) => {
        // An error happened.
        setAuthLoading(false);
      });
  };

  const values = {
    user,
    authLoading,
    signup,
    login,
    logout,
    session,
    token,
    error,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
