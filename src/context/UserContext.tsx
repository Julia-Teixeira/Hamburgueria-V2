import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastInfo } from "../components/Toast";
import { getUser } from "../services/getProfile";
import { iLoginUser, LoginUser } from "../services/userLogIn";

import {
  iDataRegister,
  iDataUser,
  UserRegister,
} from "../services/userRegister";

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserContext {
  userData: iDataUser | null;
  userId: string | null;
  userToken: string | null;
  registerUser: (data: iDataRegister) => void;
  loginUser: (data: iLoginUser) => void;
  logOutUser: () => void;
  getProfileUser: (userId: string, userToken: string) => void;
}
export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [userData, setUserData] = useState<iDataUser | null>(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("@UserId");
  const userToken = localStorage.getItem("@Token");

  const registerUser = async (data: iDataRegister) => {
    const dataUser = await UserRegister(data);

    if (dataUser !== undefined) {
      setUserData(dataUser.user);

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };

  const loginUser = async (data: iLoginUser) => {
    const dataUser = await LoginUser(data);
    if (dataUser !== undefined) {
      setUserData(dataUser.user);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  };
  const logOutUser = () => {
    localStorage.clear();
    ToastInfo("Saindo...");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const getProfileUser = async (userId: string, userToken: string) => {
    const dataUser = await getUser(userId, userToken);
    if (dataUser !== undefined) {
      const user = {
        email: dataUser.email,
        id: dataUser.id,
        name: dataUser.name,
      };
      setUserData(user);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        registerUser,
        loginUser,
        userId,
        userToken,
        getProfileUser,
        logOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
