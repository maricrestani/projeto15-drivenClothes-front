import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Coats() {
  const [CasacoAzul, setCasacoAzul] = useState([]);
  const [CasacoBranco, setCasacoBranco] = useState([]);
  const [CasacoPreto, setCasacoPreto] = useState([]);
  const [CasacoVerde, setCasacoVerde] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Stockin")
      .then((res) => {
        setCasacoAzul(res.data.filter((e) => e.serial === "3001"));
        setCasacoBranco(res.data.filter((e) => e.serial === "3002"));
        setCasacoPreto(res.data.filter((e) => e.serial === "3003"));
        setCasacoVerde(res.data.filter((e) => e.serial === "3004"));
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Header></Header>
      <ContainerBody>
        <SingleClass>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU"
            style={{ height: 100, width: 100 }}
          />
          <ContainerBuy>
            {" "}
            <h1>Casaco azul</h1>
            <BotaoComprar>COMPRAR</BotaoComprar>
            <h2>Total disponível: {CasacoAzul.length}</h2>
          </ContainerBuy>
        </SingleClass>
        <SingleClass>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU"
            style={{ height: 100, width: 100 }}
          />
          <ContainerBuy>
            {" "}
            <h1>Casaco branco</h1>
            <BotaoComprar>COMPRAR</BotaoComprar>
            <h2>Total disponível: {CasacoBranco.length}</h2>
          </ContainerBuy>
        </SingleClass>
        <SingleClass>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU"
            style={{ height: 100, width: 100 }}
          />
          <ContainerBuy>
            {" "}
            <h1>Casaco preto</h1>
            <BotaoComprar>COMPRAR</BotaoComprar>
            <h2>Total disponível: {CasacoPreto.length}</h2>
          </ContainerBuy>
        </SingleClass>
        <SingleClass>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU"
            style={{ height: 100, width: 100 }}
          />
          <ContainerBuy>
            {" "}
            <h1>Casaco verde</h1>
            <BotaoComprar>COMPRAR</BotaoComprar>
            <h2>Total disponível: {CasacoVerde.length}</h2>
          </ContainerBuy>
        </SingleClass>
      </ContainerBody>
    </>
  );
}

const ContainerBuy = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 15px;
    color: grey;
    margin-top: 5px;
  }
`;
const BotaoComprar = styled.button`
  width: 70px;
  height: 20px;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  font-size: 10px;
`;
const ContainerBody = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;
const SingleClass = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  img {
    border-radius: 5px;
    margin-right: 20%;
  }
  h1 {
    font-size: 30px;
  }
`;
