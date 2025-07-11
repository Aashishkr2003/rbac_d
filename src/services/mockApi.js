
const mockUsers = {
  admin: { id: 1, name: "Admin User", role: "Admin" },
  editor: { id: 2, name: "Editor User", role: "Editor" },
  viewer: { id: 3, name: "Viewer User", role: "Viewer" }
};


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchUserRole = async (userId = "viewer") => {
  await delay(500); 
  
  const user = mockUsers[userId];
  if (!user) {
    throw new Error("User not found");
  }
  
  return user;
};

export const updateUserRole = async (userId, newRole) => {
  await delay(300);
  
  return {
    id: userId,
    name: `${newRole} User`,
    role: newRole
  };
};
