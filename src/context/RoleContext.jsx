import { createContext, useContext, useState, useEffect } from "react";
import { fetchUserRole, updateUserRole } from "../services/mockApi";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("Viewer");
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const loadUserRole = async () => {
      try {
        const userData = await fetchUserRole();
        setUser(userData);
        setRole(userData.role);
      } catch (error) {
        console.error("Failed to fetch user role:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUserRole();
  }, []);

  const switchRole = async (newRole) => {
    setLoading(true);
    try {
      const updatedUser = await updateUserRole(user?.id || 1, newRole);
      setUser(updatedUser);
      setRole(newRole);
    } catch (error) {
      console.error("Failed to update role:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoleContext.Provider value={{ role, switchRole, loading, user }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
