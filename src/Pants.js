import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { PostItem } from "./PostItemFunction";
import { arrayCalcas } from "./ArrayProdutos";
import DisableButton from "./DisableButton";
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

  function CoatReturn(e) {
    if (e === "2001") {
      return CalcaAzul.length;
    } else if (e === "2002") {
      return CalcaBranca.length;
    } else if (e === "2003") {
      return CalcaMarrom.length;
    } else if (e === "2004") {
      return CalcaPreta.length;
    }
  }

  return (
    <>
      <Header></Header>
      <ContainerBody>
        {arrayCalcas.map((b) => (
          <SingleClass>
            <img src={b.img} style={{ height: 100, width: 100 }} />
            <ContainerBuy>
              {" "}
              <h1>{b.description}</h1>
              <BotaoComprar
                onClick={() =>
                  PostItem(b.img, b.description, b.serial, b.value)
                }
                disabled={DisableButton(CoatReturn(b.serial))}
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
