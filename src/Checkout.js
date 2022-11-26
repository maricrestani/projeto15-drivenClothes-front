import axios from "axios";
import styled from "styled-components";
import { React, useState, useContext } from "react";
import Header from "./Header";
import AuthContext from "./auth.js";
const URL = "http://localhost:5000";

export default function Checkout() {
  const { orderData, user } = useContext(AuthContext);
  console.log("this is order data", orderData);

  const [purchase, setPurchase] = useState({
    email: user.email,
    adress: {
      cep: "",
      street: "",
      num: "",
      compl: "",
      neighborhood: "",
      city: "",
    },
    payment: { numCard: "", nameCard: "", CVV: "", cpf: "", valCard: "" },
    order: orderData,
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setPurchase({ ...purchase, [name]: value });
  }

  function registerPurchase(e) {
    e.preventDefault();
    console.log("purchase no checkout", purchase);
    axios
      .post(`${URL}/checkout`, purchase)

      .then((res) => {
        alert("Compra realizada com sucesso!");
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
          <h2>DETALHES DA ENTREGA</h2>
          <form onSubmit={registerPurchase}>
            <FormItem>
              <label>CEP</label>
              <input
                required
                name="cep"
                value={purchase.adress.cep}
                placeholder=""
                type="text"
                onChange={handleForm}
              />
            </FormItem>
            <FormItem>
              <label>RUA</label>
              <input
                required
                name="street"
                value={purchase.adress.street}
                placeholder=""
                type="text"
                onChange={handleForm}
              />
            </FormItem>
            <AlignDiv>
              <FormItem2>
                <label>NÚMERO</label>
                <input
                  required
                  name="num"
                  value={purchase.adress.num}
                  placeholder=""
                  type="number"
                  onChange={handleForm}
                />
              </FormItem2>
              <FormItem2>
                <label>COMPLEMENTO</label>
                <input
                  required
                  name="compl"
                  value={purchase.adress.compl}
                  placeholder=""
                  type="number"
                  onChange={handleForm}
                />
              </FormItem2>
            </AlignDiv>
            <AlignDiv>
              <FormItem2>
                <label>BAIRRO</label>
                <input
                  required
                  name="neighborhood"
                  value={purchase.adress.neighborhood}
                  placeholder=""
                  type="text"
                  onChange={handleForm}
                />
              </FormItem2>
              <FormItem2>
                <label>CIDADE</label>
                <input
                  required
                  name="city"
                  value={purchase.adress.city}
                  placeholder=""
                  type="text"
                  onChange={handleForm}
                />
              </FormItem2>
            </AlignDiv>
          </form>
        </FormContainer>
        <FormContainer>
          <h2>DETALHES DO PAGAMENTO</h2>
          <form>
            <FormItem>
              <label>CPF</label>
              <input
                required
                name="cpf"
                value={purchase.payment.cpf}
                placeholder=""
                type="number"
                onChange={handleForm}
              />
            </FormItem>
            <FormItem>
              <label>NOME IMPRESSO NO CARTÃO</label>
              <input
                required
                name="nameCard"
                value={purchase.payment.nameCard}
                placeholder=""
                type="text"
                onChange={handleForm}
              />
            </FormItem>
            <FormItem>
              <label>NÚMERO DO CARTÃO</label>
              <input
                required
                name="numCard"
                value={purchase.payment.numCard}
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
                  name="valCard"
                  value={purchase.payment.valCard}
                  placeholder="mm/aaaa"
                  type="text"
                  onChange={handleForm}
                />
              </FormItem2>
              <FormItem2>
                <label>CVV</label>
                <input
                  required
                  name="CVV"
                  value={purchase.payment.CVV}
                  placeholder=""
                  type="text"
                  onChange={handleForm}
                />
              </FormItem2>
            </AlignDiv>
          </form>
        </FormContainer>
        <button type="submit">COMPRAR</button>
      </CheckoutContainer>
    </>
  );
}

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
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
