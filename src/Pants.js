import styled from "styled-components";
import Header from "./Header";
export default function Pants() {
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
          </ContainerBuy>
        </SingleClass>
      </ContainerBody>
    </>
  );
}

const ContainerBuy = styled.div`
  display: flex;
  flex-direction: column;
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
