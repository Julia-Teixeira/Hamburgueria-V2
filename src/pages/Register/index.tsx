import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputForm } from "../../components/Input";
import { SchemaRegister } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { iDataRegister } from "../../services/userRegister";
import { SectionForm } from "../../styles/Forms";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { StyledContainer } from "../../components/Toast/style";

interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValidating },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(SchemaRegister),
    mode: "onChange",
  });

  const { registerUser } = useContext(UserContext);

  const registerU = (data: iRegisterFormData) => {
    const dataRegister: iDataRegister = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    registerUser(dataRegister);
  };

  return (
    <SectionForm page="register">
      <article>
        <img src={logo} alt="" />
        <div>
          <figure />
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os
            <strong> melhores </strong>ingredientes.
          </p>
        </div>
        <div className="balls" />
      </article>
      <form onSubmit={handleSubmit(registerU)}>
        <div>
          <h2>Cadastro</h2>
          <Link to="/login">Retornar para o login</Link>
        </div>

        <InputForm
          type="text"
          id="name"
          text="Nome"
          register={register("name")}
          required
          message={errors.name?.message}
          valid={isValidating}
        />
        <InputForm
          type="text"
          id="email"
          text="E-mail"
          register={register("email")}
          required
          message={errors.email?.message}
          valid={isValidating}
        />
        <InputForm
          type="password"
          id="password"
          text="Senha"
          register={register("password")}
          required
          message={errors.password?.message}
          valid={isValidating}
        />
        <InputForm
          type="password"
          id="confirmPassword"
          text="Confirmar senha"
          register={register("confirmPassword")}
          required
          message={errors.confirmPassword?.message}
          valid={isValidating}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </SectionForm>
  );
};
