import { Link } from "react-router-dom";
import styled from "styled-components";
import CartImg from "./assets/icons/cart-outline.svg";
import UserIcon from "./assets/icons/person.svg";

export default function Header() {
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
        <Link to={"/cart"}>
          {" "}
          <img src={CartImg} alt="carrinho" />
        </Link>

        <h2>0</h2>
      </RightContainer>
    </HeaderContainer>
  );
}

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
