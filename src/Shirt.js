import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { arrayBlusas } from "./ArrayProdutos";
import { PostItem } from "./PostItemFunction";
import DisableButton from "./DisableButton";
export default function Shirt() {
  const [BlusaAzulLength, setBlusaAzulLength] = useState([]);
  const [BlusaBrancaLength, setBlusaBrancaLength] = useState([]);
  const [BlusaPretaLength, setBlusaPretaLength] = useState([]);
  const [BlusaVerdeLength, setBlusaVerdeLength] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Stockin")
      .then((res) => {
        setBlusaAzulLength(res.data.filter((e) => e.serial === "1001"));
        setBlusaBrancaLength(res.data.filter((e) => e.serial === "1002"));
        setBlusaPretaLength(res.data.filter((e) => e.serial === "1003"));
        setBlusaVerdeLength(res.data.filter((e) => e.serial === "1004"));
      })
      .catch((err) => console.log(err));
  });

  function ShirtReturn(e) {
    if (e == "1001") {
      return BlusaAzulLength.length;
    } else if (e === "1002") {
      return BlusaBrancaLength.length;
    } else if (e === "1003") {
      return BlusaPretaLength.length;
    } else if (e === "1004") {
      return BlusaVerdeLength.length;
    }
  }

  return (
    <>
      <Header></Header>
      <ContainerBody>
        {arrayBlusas.map((b) => (
          <SingleClass>
            <img src={b.img} style={{ height: 100, width: 100 }} />
            <ContainerBuy>
              {" "}
              <h1>{b.description}</h1>
              <BotaoComprar
                onClick={() =>
                  PostItem(b.img, b.description, b.serial, b.value)
                }
                disabled={DisableButton(ShirtReturn(b.serial))}
              >
                COMPRAR
              </BotaoComprar>
              <h2>Total disponível: {ShirtReturn(b.serial)}</h2>
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
  background-color: black;
  font-family: "Saira Stencil One", cursive;
  font-size: 20px;
  color: white;
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
  &:hover {
    border: 1px solid green;
    overflow: hidden;
  }
  img {
    border-radius: 5px;
    margin-right: 20%;
  }
  h1 {
    font-size: 30px;
  }
`;
