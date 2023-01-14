import { AxiosError } from "axios";
import { ToastError } from "../components/Toast";
import { apiHamburgueria } from "./apiHamburgueria";

export interface iGetProfile {
  email: string;
  password: string;
  name: string;
  id: number;
}

export const getUser = async (
  userId: string,
  tokenId: string
): Promise<iGetProfile | void> => {
  try {
    const { data } = await apiHamburgueria.get<iGetProfile>(
      "/users/" + userId,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenId}`,
        },
      }
    );
    return data;
  } catch (error) {
    ToastError("Ops, token expirado, favor fazer o login novamente.");

    localStorage.clear();
  }
};
