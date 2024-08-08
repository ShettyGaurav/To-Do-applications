import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [home,setHome] = useState(false);

  return (
    <UserContext.Provider value={{ home, setHome }}>
      {children}
    </UserContext.Provider>
  );
};
