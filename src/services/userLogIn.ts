import { AxiosError } from "axios";
import { ToastError, ToastSucess } from "../components/Toast";
import { apiHamburgueria } from "./apiHamburgueria";
import { iResponsePost } from "./userRegister";

export interface iLoginUser {
  email: string;
  password: string;
}

export const LoginUser = async (
  dataUser: iLoginUser
): Promise<iResponsePost | void> => {
  try {
    const { data } = await apiHamburgueria.post<iResponsePost>(
      "/login",
      dataUser,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    ToastSucess("Login feito com sucesso!!");
    localStorage.setItem("@UserId", JSON.stringify(data.user.id));
    localStorage.setItem("@Token", data.accessToken);

    return data;
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
    localStorage.clear();
  }
};
