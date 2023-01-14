import { Route, Routes } from "react-router-dom";
import { Page404 } from "../pages/404";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route index path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};
