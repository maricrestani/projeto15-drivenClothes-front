import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import { arrayTenis } from "./ArrayProdutos";
import { PostItem } from "./PostItemFunction";
import DisableButton from "./DisableButton";
export default function Shoes() {
  const [TenisAzul, setTenisAzul] = useState([]);
  const [TenisBranco, setTenisBranco] = useState([]);
  const [TenisPreto, setTenisPreto] = useState([]);
  const [TenisVerde, setTenisVerde] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Stockin")
      .then((res) => {
        setTenisAzul(res.data.filter((e) => e.serial === "4001"));
        setTenisBranco(res.data.filter((e) => e.serial === "4002"));
        setTenisPreto(res.data.filter((e) => e.serial === "4003"));
        setTenisVerde(res.data.filter((e) => e.serial === "4004"));
      })
      .catch((err) => console.log(err));
  });

  function ShoesReturn(e) {
    if (e === "4001") {
      return TenisAzul.length;
    } else if (e === "4002") {
      return TenisBranco.length;
    } else if (e === "4003") {
      return TenisPreto.length;
    } else if (e === "4004") {
      return TenisVerde.length;
    }
  }

  return (
    <>
      <Header></Header>
      <ContainerBody>
        {arrayTenis.map((b) => (
          <SingleClass>
            <img src={b.img} style={{ height: 100, width: 100 }} />
            <ContainerBuy>
              {" "}
              <h1>{b.description}</h1>
              <BotaoComprar
                onClick={() =>
                  PostItem(b.img, b.description, b.serial, b.value)
                }
                disabled={DisableButton(ShoesReturn(b.serial))}
              >
                COMPRAR
              </BotaoComprar>
              <h2>Total disponível: {ShoesReturn(b.serial)}</h2>
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
