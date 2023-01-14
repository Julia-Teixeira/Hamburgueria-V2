import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputForm } from "../../components/Input";
import { UserContext } from "../../context/UserContext";
import { iLoginUser } from "../../services/userLogIn";
import { SchemaLogin } from "./schema";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import { SectionForm } from "../../styles/Forms";

export const Login = () => {
  const { loginUser, userId, userToken, getProfileUser } =
    useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUser>({
    resolver: yupResolver(SchemaLogin),
    mode: "onChange",
  });

  useEffect(() => {
    if (userId && userToken) {
      getProfileUser(userId, userToken);
    }
  }, []);

  return (
    <SectionForm page="login">
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
      <form onSubmit={handleSubmit(loginUser)}>
        <h2>Login</h2>
        <InputForm
          type="text"
          id="email"
          text="E-mail"
          register={register("email")}
          required
          message={errors.email?.message}
        />
        <InputForm
          type="password"
          id="password"
          text="Senha"
          register={register("password")}
          required
          message={errors.password?.message}
        />
        <button type="submit">Logar</button>

        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>

        <Link to="/register">Cadastrar</Link>
      </form>
    </SectionForm>
  );
};
