import axios from "axios";
import AuthContext from "./auth.js";
import Header from "./Header";
import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const URL = "http://localhost:5000";

export default function SignIn() {
  const { setUser } = useContext(AuthContext);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }

  function SignIn(e) {
    e.preventDefault();

    axios
      .post(`${URL}/signin`, login)
      .then((res) => {
        localStorage.setItem("tokenLocalStorage", res.data.token);
        localStorage.setItem("emailLocalStorage", res.data.email);
        setUser(res.data.email);
        navigate("/");
      })

      .catch((err) => {
        alert(`Falha no login - ${err.message}`);
      });
  }

  return (
    <>
      <Header></Header>
      <LoginContainer>
        <h1>Driven Clothes</h1>
        <form onSubmit={SignIn}>
          <input
            required
            name="email"
            value={login.email}
            placeholder="E-mail"
            type="email"
            onChange={handleForm}
          />
          <input
            required
            name="password"
            value={login.password}
            placeholder="Senha"
            type="password"
            onChange={handleForm}
          />
          <button type="submit">ENTRAR</button>
        </form>
        <Link to={"/signup"}>
          <h3>Não possuí uma conta? Cadastre-se</h3>
        </Link>
        <Link to={"/"}>
          <h3>Retonar para a página inicial</h3>
        </Link>
      </LoginContainer>
    </>
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
    font-family: "Saira Stencil One", cursive;
    color: black;
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
    border-bottom: 2px solid black;
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
    border-radius: 10px;
    border: 0px;
    background-color: black;
    color: #ffffff;
    cursor: pointer;
    box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.75);
  }

  h3 {
    font-family: roboto;
    font-weight: 400;
    font-size: 14px;
    color: black;
    margin-bottom: 30px;
  }
`;
