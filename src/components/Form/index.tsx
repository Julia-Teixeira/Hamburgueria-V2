import React from "react";
import { FormTag } from "./style";

interface iFormProps {
  children: React.ReactNode;
}
export const Form = ({ children }: iFormProps) => {
  return <FormTag>{children}</FormTag>;
};
