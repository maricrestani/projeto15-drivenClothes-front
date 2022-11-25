import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartImg from "./assets/icons/cart-outline.svg";
import UserIcon from "./assets/icons/person.svg";
import ReactModal from "react-modal";
import axios from "axios";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const [saldo, setSaldo] = useState(0);
  function somaSaldo(e) {
    let total = 0;
    for (let i = 0; i < e.length; i++) {
      e[i].value = +e[i].value;
      total += e[i].value;
      setSaldo(total);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => {
        setCartArray(res.data);
        somaSaldo(res.data);
      })
      .catch((err) => console.log(err));
  }, [cartArray]);

  return (
    <HeaderContainer>
      <Link to={"/"}>
        <h1>Driven Clothes</h1>
      </Link>
      <RightContainer>
        <Link to={"/signin"}>
          {" "}
          <img src={UserIcon} alt="usuário" />
        </Link>

        <img src={CartImg} alt="carrinho" onClick={() => setOpenModal(true)} />

        <h2>0</h2>
      </RightContainer>
      <ReactModal
        isOpen={openModal}
        ariaHideApp={false}
        style={{
          overlay: {
            background: "",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: "",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          },
        }}
      >
        <ModalContainer>
          <h1>Itens escolhidos:</h1>
          <CartContainer>
            {cartArray.map((m) => (
              <CartItem>
                <img src={m.img} />
                <ItemInformation>
                  <h1>{m.description}</h1>
                  <h2>Valor: {m.value},00 R$</h2>
                </ItemInformation>
              </CartItem>
            ))}
          </CartContainer>
          <h2>Valor Total: {saldo},00</h2>
          <CheckoutButton>Comprar</CheckoutButton>
        </ModalContainer>
      </ReactModal>
    </HeaderContainer>
  );
}

const ItemInformation = styled.div`
  margin-left: 5%;
`;
const CartItem = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 50px;
    height: 50px;
  }
`;
const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 85%;
`;
const CheckoutButton = styled.button`
  margin-top: 10px;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 5px;
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
`;
const HeaderContainer = styled.div`
  position: fixed;
  top: 0%;
  background-color: grey;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  h1 {
    font-size: 20px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
`;
