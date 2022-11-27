import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { React, useState, useContext } from "react";
import Header from "./Header";
import AuthContext from "./auth.js";
const URL = "http://localhost:5000";

export default function Checkout() {
  const { orderData, priceOrder } = useContext(AuthContext);
  const navigate = useNavigate();
  const email = localStorage.getItem("emailLocalStorage");

  const [purchase, setPurchase] = useState({
    email: email,
    cpf: "",
    cardName: "",
    cardNumber: "",
    securityNumber: "",
    expirationDate: "",
    order: orderData,
    price: priceOrder,
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setPurchase({ ...purchase, [name]: value });
  }

  function registerPurchase(e) {
    e.preventDefault();

    axios
      .post(`${URL}/checkout`, purchase)

      .then((res) => {
        alert("Compra realizada com sucesso!");
        navigate("/");
      })

      .catch((err) => {
        alert(`Falha na compra - ${err.message}`);
      });
  }

  return (
    <>
      <Header />
      <CheckoutContainer>
        <h1>CHECKOUT</h1>
        <FormContainer>
          <h2>DETALHES DA COMPRA</h2>
          <CartContainer>
            {orderData.map((m) => (
              <CartItem>
                <Thumbnail src={m.img} />
                <ItemInformation>
                  <h2>{m.description}</h2>
                  <h2>Valor: R${m.value},00 </h2>
                </ItemInformation>
              </CartItem>
            ))}
          </CartContainer>
          <h3>Valor Total: R${priceOrder},00</h3>
        </FormContainer>
        <h2>DETALHES DO PAGAMENTO</h2>
        <form onSubmit={registerPurchase}>
          <FormContainer>
            <FormItem>
              <label>CPF</label>
              <input
                required
                name="cpf"
                value={purchase.cpf}
                placeholder=""
                type="number"
                onChange={handleForm}
              />
            </FormItem>
            <FormItem>
              <label>NOME IMPRESSO NO CARTÃO</label>
              <input
                required
                name="cardName"
                value={purchase.cardName}
                placeholder=""
                type="text"
                onChange={handleForm}
              />
            </FormItem>
            <FormItem>
              <label>NÚMERO DO CARTÃO</label>
              <input
                required
                name="cardNumber"
                value={purchase.cardNumber}
                placeholder=""
                type="number"
                onChange={handleForm}
              />
            </FormItem>
            <AlignDiv>
              <FormItem2>
                <label>VALIDADE</label>
                <input
                  required
                  name="expirationDate"
                  value={purchase.expirationDate}
                  placeholder="mm/aaaa"
                  type="text"
                  onChange={handleForm}
                />
              </FormItem2>
              <FormItem2>
                <label>CVV</label>
                <input
                  required
                  name="securityNumber"
                  value={purchase.securityNumber}
                  placeholder=""
                  type="text"
                  onChange={handleForm}
                />
              </FormItem2>
            </AlignDiv>
            <button type="submit">COMPRAR</button>
          </FormContainer>
        </form>
      </CheckoutContainer>
    </>
  );
}

const CartItem = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: flex-start;
`;
const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
`;

const ItemInformation = styled.div`
  margin-left: 5%;
`;

const AlignDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckoutContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    background-color: black;
    color: #ffffff;
    cursor: pointer;
    box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.75);
  }
  h3 {
    font-size: 18px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    margin-bottom: 2px;
  }

  input {
    font-size: 16px;
    margin-bottom: 16px;
    width: 300px;
    height: 40px;
    border: 1px solid grey;
  }
`;

const FormItem2 = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
    margin-bottom: 2px;
  }

  input {
    font-size: 16px;
    margin-bottom: 16px;
    width: 145px;
    height: 40px;
    border: 1px solid grey;
  }
`;
