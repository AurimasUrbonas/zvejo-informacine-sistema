import { User, UserCredential } from "@firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../config/firebase";

export const AppContext = createContext<ContextValue>({} as any);

export const useAuth = (): ContextValue => {
  return useContext(AppContext);
};

export const AuthContext: React.FC<Auth> = ({ children }: Auth) => {
  const [user, setUser] = useState<null | string>(null);
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState<null | string>(null);

  const [userAuth, setUserAuth] = useState<User | null>(null);

  const createUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return auth.createUserWithEmailAndPassword(auth.getAuth(), email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUserAuth(user);
        setUser(user.uid);
        setEmail(user.email);
        setLoad(true);
      } else {
        setLoad(true);
      }
    });
    return unsubscribe;
  }, []);

  const value = {
    createUser,
    user,
    email,
    userAuth,
  };

  return (
    <AppContext.Provider value={value}>{load && children}</AppContext.Provider>
  );
};

interface Auth {
  children: React.ReactNode;
}
interface ContextValue {
  createUser: (email: string, password: string) => Promise<UserCredential>;
  user: string | null;
  email: string | null;
  userAuth: User | null;
}
