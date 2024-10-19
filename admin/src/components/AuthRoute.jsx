import React, { Suspense } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import AuthenticationForm from "../pages/AuthenticationForm.jsx";

const AuthRoute = (Component) => {
  return (props) => {
    const { isAuth } = useAuth();

    // Check if the user is authenticated
    if (!isAuth) {
      return <AuthenticationForm/> 
    }

    // Check if roles are defined and if the user has the required role(s)
    

    return  <Suspense fallback={<div className="fixed top-0 left-0 w-full h-screen z-[999] flex items-center justify-center bg-[#41414156]"> Please Wait</div>}>
    <Component {...props} />;
  </Suspense>
  };
};

export default AuthRoute;
