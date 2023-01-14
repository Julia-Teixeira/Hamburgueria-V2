import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldsetInput } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  text: string;
  type: string;
  register: UseFormRegisterReturn;
  message?: string;
  valid?: boolean;
}
export const InputForm = ({
  id,
  text,
  type,
  register,
  message,
  valid,
  ...rest
}: iInputProps) => {
  return (
    <FieldsetInput
      borderColor={message ? "--color-negative" : "--color-grey600"}
      validColor={!message ? "--color-sucess" : "--color-negative"}
    >
      <input id={id} type={type} {...register} {...rest} />
      <label htmlFor={id}>{text}</label>
      {message ? <p>{message}</p> : null}
    </FieldsetInput>
  );
};
