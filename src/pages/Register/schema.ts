import * as yup from "yup";

export const SchemaRegister = yup.object().shape({
  name: yup.string().required("O campo Nome é obrigatório!"),
  email: yup
    .string()
    .required("Campo e-mail obrigatório")
    .email("E-mail inválido"),
  password: yup
    .string()
    .required("Campo senha obrigatório")
    .min(6, "A senha precisa conter pelo menos 6 caracteres!"),

  confirmPassword: yup
    .string()
    .required("Confirmar senha é obrigatório")
    .min(6, "Sua senha precisa ter pelo menos 6 caracteres.")
    .oneOf([yup.ref("password")], "As senhas não coincidem!"),
});
