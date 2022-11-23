import styled from "styled-components";
import CartImg from "./cart-outline.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Driven-Clothes</h1>
      <RightContainer>
        <img src={CartImg} />
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
`;
const RightContainer = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
`;
