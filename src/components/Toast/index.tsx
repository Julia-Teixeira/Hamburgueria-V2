import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastSucess = (msg: string) => {
  return toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const ToastError = (msg: string) => {
  return toast.error(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const ToastWarning = (msg: string) => {
  return toast.warn(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const ToastInfo = (msg: string) => {
  return toast.info(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
