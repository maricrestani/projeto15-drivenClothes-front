import axios from "axios";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const URL = "http://localhost:5000";

export default function SignUp() {
  const [register, setRegister] = useState({
    email: "",
    name: "",
    password: "",
    repeat_password: "",
  });
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  }

  function signUp(e) {
    e.preventDefault();

    axios
      .post(`${URL}/signup`, register)

      .then((res) => {
        navigate("/");
      })

      .catch((err) => {
        alert(`Falha no cadastro - ${err.message}`);
      });
  }

  return (
    <LoginContainer>
      <h1>Driven Clothes</h1>
      <h2>CRIE UMA CONTA</h2>
      <form onSubmit={signUp}>
        <input
          required
          name="name"
          value={register.name}
          placeholder="Nome"
          type="text"
          onChange={handleForm}
        />
        <input
          required
          name="email"
          value={register.email}
          placeholder="E-mail"
          type="email"
          onChange={handleForm}
        />
        <input
          required
          name="password"
          value={register.password}
          placeholder="Senha"
          type="password"
          onChange={handleForm}
        />
        <input
          required
          name="repeat_password"
          value={register.repeat_password}
          placeholder="Confirme a senha"
          type="password"
          onChange={handleForm}
        />
        <button type="submit">CADASTRAR</button>
      </form>
      <Link to={"/signin"}>
        <h3>Já possuí uma conta? Entre</h3>
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
  h2 {
    font-size: 16px;
    margin-bottom: 10px;
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
