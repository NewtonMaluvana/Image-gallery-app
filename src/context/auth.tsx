import { createContext, useState } from "react";
export const authContext = createContext({
  user: null,
  isLoading: false,
});
export const authProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [user, setUser] = useState(null);
  return <authContext.Provider value={}>{children}</authContext.Provider>;
};
