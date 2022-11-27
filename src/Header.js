import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartImg from "./assets/icons/cart.png";
import trashItem from "./assets/icons/trash-bin-outline.svg";
import UserIcon from "./assets/icons/person.png";
import ReactModal from "react-modal";
import axios from "axios";
import AuthContext from "./auth.js";

export default function Header() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [cartArray, setCartArray] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const { setOrderData, setPriceOrder } = useContext(AuthContext);

  function somaSaldo(e) {
    let total = 0;
    for (let i = 0; i < e.length; i++) {
      e[i].value = +e[i].value;
      total += e[i].value;
      setSaldo(total);
      setPriceOrder(total);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => {
        setCartArray(res.data);
        setOrderData(res.data);
        somaSaldo(res.data);
      })
      .catch((err) => console.log(err));
  }, [cartArray]);

  function DeleteItem(e) {
    console.log(e);
    axios
      .delete(`http://localhost:5000/cart/${e}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function finishOrder() {
    const tokenLocalStorage = localStorage.getItem("tokenLocalStorage");

    if (tokenLocalStorage) {
      navigate("/checkout");
    } else {
      alert("Você ainda não está logado, por favor faça login!");
      navigate("/signin");
    }
  }

  return (
    <HeaderContainer>
      <Link to={"/"}>
        <h1>Driven Clothes</h1>
      </Link>
      <CenterContainer>
        <Link to={"/class/shirt"}>
          <h2>Blusas</h2>
        </Link>
        <Link to={"/class/pants"}>
          {" "}
          <h2>Calças</h2>
        </Link>
        <Link to={"/class/coats"}>
          {" "}
          <h2>Casacos</h2>
        </Link>
        <Link to={"/class/shoes"}>
          {" "}
          <h2>Tênis</h2>
        </Link>
      </CenterContainer>

      <RightContainer>
        <Link to={"/signin"}>
          {" "}
          <img src={UserIcon} alt="usuário" />
        </Link>
        <div>
          <img
            src={CartImg}
            alt="carrinho"
            onClick={() => setOpenModal(true)}
          />

          <h2>{cartArray.length}</h2>
        </div>
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
                <Thumbnail src={m.img} />
                <ItemInformation>
                  <h1>{m.description}</h1>
                  <h2>Valor: R${m.value},00</h2>
                </ItemInformation>
                <Trash
                  src={trashItem}
                  e={m._id}
                  onClick={() => DeleteItem(m._id)}
                />
              </CartItem>
            ))}
          </CartContainer>
          <h2>Valor Total: {saldo},00</h2>

          <CheckoutButton onClick={finishOrder}>Comprar</CheckoutButton>

          <CloseCart onClick={() => setOpenModal(false)}>X</CloseCart>
        </ModalContainer>
      </ReactModal>
    </HeaderContainer>
  );
}

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  h2 {
    color: white;
    font-size: 15px;
  }
`;

const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
`;
const Trash = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0px;
`;
const CloseCart = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: black;
`;
const ItemInformation = styled.div`
  margin-left: 5%;
`;
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
  background-color: black;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 9px 0px rgba(0, 0, 0, 0.75);
  img {
    width: 20px;
    height: 20px;
    color: white;
  }
  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 20px;
    color: white;
    margin-left: 10px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
  align-items: center;
  justify-content: space-between;
  width: 80px;

  div {
    display: flex;
    width: 35px;
    justify-content: space-between;
  }
  h2 {
    color: white;
    font-size: 20px;
  }
`;
