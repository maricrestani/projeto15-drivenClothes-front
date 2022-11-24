import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <LoginContainer>
      <h1>Driven Clothes</h1>
      <form onSubmit={""}>
        <input
          required
          name="email"
          value={""}
          placeholder="E-mail"
          type="email"
        />
        <input
          required
          name="password"
          value={""}
          placeholder="Senha"
          type="password"
        />
        <button type="submit">ENTRAR</button>
      </form>
      <Link to={"/signup"}>
        <h3>Não possuí uma conta? Cadastre-se</h3>
      </Link>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  margin-top: 134px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    margin-bottom: 60px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
  }

  input {
    font-size: 16px;
    margin-bottom: 16px;
    width: 300px;
    height: 30px;
    border: 0px;
    border-bottom: 2px solid grey;
  }

  button {
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 24px;
    width: 200px;
    height: 40px;
    border-radius: 40px;
    border: 0px;
    background-color: grey;
    color: #ffffff;
    cursor: pointer;
  }

  h3 {
    font-family: roboto;
    font-weight: 400;
    font-size: 14px;
    color: black;
    margin-bottom: 100px;
  }
`;
