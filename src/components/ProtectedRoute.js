import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //TODO: write authentication logic here
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
