import { useRole } from "../context/RoleContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { role, loading } = useRole();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!allowedRoles.includes(role)) {
    if (role === "Admin") {
      return <Navigate to="/users" replace />;
    } else if (role === "Editor") {
      return <Navigate to="/content" replace />;
    } else if (role === "Viewer") {
      return <Navigate to="/" replace />;
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;