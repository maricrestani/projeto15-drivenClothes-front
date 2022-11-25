import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
export default function Pants() {
  const [CalcaAzul, setCalcaAzul] = useState([]);
  const [CalcaBranca, setCalcaBranca] = useState([]);
  const [CalcaMarrom, setCalcaMarrom] = useState([]);
  const [CalcaPreta, setCalcaPreta] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Stockin")
      .then((res) => {
        setCalcaAzul(res.data.filter((e) => e.serial === "2001"));
        setCalcaBranca(res.data.filter((e) => e.serial === "2002"));
        setCalcaMarrom(res.data.filter((e) => e.serial === "2003"));
        setCalcaPreta(res.data.filter((e) => e.serial === "2004"));
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
            <h1>Calça azul</h1>
            <BotaoComprar>COMPRAR</BotaoComprar>
            <h2>Total disponível: {CalcaAzul.length}</h2>
          </ContainerBuy>
        </SingleClass>
        <SingleClass>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU"
            style={{ height: 100, width: 100 }}
          />
          <ContainerBuy>
            {" "}
            <h1>Calça branca</h1>
            <BotaoComprar>COMPRAR</BotaoComprar>
            <h2>Total disponível: {CalcaBranca.length}</h2>
          </ContainerBuy>
        </SingleClass>
        <SingleClass>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU"
            style={{ height: 100, width: 100 }}
          />
          <ContainerBuy>
            {" "}
            <h1>Calça Marrom</h1>
            <BotaoComprar>COMPRAR</BotaoComprar>
            <h2>Total disponível: {CalcaMarrom.length}</h2>
          </ContainerBuy>
        </SingleClass>
        <SingleClass>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU"
            style={{ height: 100, width: 100 }}
          />
          <ContainerBuy>
            {" "}
            <h1>Calça preta</h1>
            <BotaoComprar>COMPRAR</BotaoComprar>
            <h2>Total disponível: {CalcaPreta.length}</h2>
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
