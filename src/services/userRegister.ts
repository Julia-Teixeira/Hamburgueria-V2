import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast/index";
import { apiHamburgueria } from "./apiHamburgueria";

export interface iResponsePost {
  accessToken: string;
  user: iDataUser;
}

export interface iDataUser {
  email: string;
  name: string;
  id: number;
}

export interface iDataRegister {
  name: string;
  email: string;
  password: string;
}
export const UserRegister = async (
  dataUser: iDataRegister
): Promise<iResponsePost | any> => {
  try {
    const { data } = await apiHamburgueria.post<iResponsePost>(
      "/users",
      dataUser,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    ToastSucess("Cadastro feito com sucesso!!");
    localStorage.setItem("@UserId", JSON.stringify(data.user.id));
    localStorage.setItem("@Token", data.accessToken);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    localStorage.clear();
  }
};
