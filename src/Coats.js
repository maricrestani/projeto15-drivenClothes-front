import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { arrayCasacos } from "./ArrayProdutos";
import { PostItem } from "./PostItemFunction";

export default function Coats() {
  const [CasacoAzul, setCasacoAzul] = useState([]);
  const [CasacoBranco, setCasacoBranco] = useState([]);
  const [CasacoPreto, setCasacoPreto] = useState([]);
  const [CasacoVerde, setCasacoVerde] = useState([]);

  function CoatReturn(e) {
    if (e === "3001") {
      return CasacoAzul.length;
    } else if (e === "3002") {
      return CasacoBranco.length;
    } else if (e === "3003") {
      return CasacoPreto.length;
    } else if (e === "3004") {
      return CasacoVerde.length;
    }
  }

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
        {arrayCasacos.map((b) => (
          <SingleClass>
            <img src={b.img} style={{ height: 100, width: 100 }} />
            <ContainerBuy>
              <h1>{b.description}</h1>
              <BotaoComprar
                onClick={() =>
                  PostItem(b.img, b.description, b.serial, b.value)
                }
              >
                COMPRAR
              </BotaoComprar>
              <h2>Total disponível: {CoatReturn(b.serial)}</h2>
              <br />
              <h2>Valor:{b.value},00</h2>
            </ContainerBuy>
          </SingleClass>
        ))}
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
