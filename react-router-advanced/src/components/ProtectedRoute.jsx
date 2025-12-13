import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth.js";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // redirect to login, preserving where user wanted to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
