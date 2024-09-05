import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
}
export const authContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
});
export const AuthProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (User) => {
      setUser(User);
      setIsLoading(false);
    });
  }, []);
  return (
    <authContext.Provider value={{ user, isLoading }}>
      {!isLoading && children}
    </authContext.Provider>
  );
};
