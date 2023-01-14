import { AxiosError } from "axios";
import { ToastError } from "../components/Toast";
import { apiHamburgueria } from "./apiHamburgueria";

export interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const getProducts = async (): Promise<iProducts[] | undefined> => {
  const userToken = localStorage.getItem("@Token");
  try {
    const { data } = await apiHamburgueria.get<iProducts[]>("/products", {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return data;
  } catch (error) {
    const err = error as AxiosError;
    ToastError("Ops, " + err.response?.data);
  }
};
