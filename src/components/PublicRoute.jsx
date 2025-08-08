import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Spinner from "./Spinner";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, profileLoaded, profileLoading,user } = useSelector(state => state.auth);
  // Tant que le profil se charge, on peut afficher rien ou un loader
  if (isAuthenticated ) {
    if((profileLoading || !profileLoaded) ||  !user) {
    return (<Spinner />)
  }
   return <Navigate to="/user" replace />;
 }
    console.log("Utilisateur non connecté, affiche la page publique");
  return children;
};

export default PublicRoute;
