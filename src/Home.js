import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

export default function Home() {
  return (
    <Corpo>
      <Header></Header>
      <ContainerBody>
        <ContainerClass>
          <Link to="/Shirt">
            <SingleClass>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oU4Sf-xRWkn3erlk6HhGXG-8uqv4PWlYWA&usqp=CAU"
                style={{ height: 100, width: 100 }}
              />
              <h1>Blusas</h1>
            </SingleClass>
          </Link>
          <Link to="/Pants">
            {" "}
            <SingleClass>
              <img
                src="https://st4.depositphotos.com/1226172/24268/i/1600/depositphotos_242689882-stock-photo-casual-jeans-pants-isolated-white.jpg"
                style={{ height: 100, width: 100 }}
              />
              <h1>Calças</h1>
            </SingleClass>
          </Link>
          <Link to="/Coats">
            <SingleClass>
              <img
                src="https://media.istockphoto.com/id/1281768204/photo/down-jacket-for-children-stylish-yellow-warm-winter-jacket-for-children-with-removable-hood.jpg?b=1&s=170667a&w=0&k=20&c=UFBz68GZvm4xTzFWaGcRiwCazvdr9P-2qIcpWUbIdAc="
                style={{ height: 100, width: 100 }}
              />
              <h1>Casacos</h1>
            </SingleClass>
          </Link>
          <Link to="/Shoes">
            {" "}
            <SingleClass>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZz_hblc--iFtHN_AVoGHkJYnIqnMQlj0_tr6qIeH2fGkZgB4ZMyXQoeWmpe981UwYTqI&usqp=CAU"
                style={{ height: 100, width: 100 }}
              />
              <h1>Tênis</h1>
            </SingleClass>
          </Link>
        </ContainerClass>
      </ContainerBody>
    </Corpo>
  );
}

const Corpo = styled.div``;
const ContainerBody = styled.div`
  margin-top: 50px;
`;
const ContainerClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  &:hover {
    border: 1px solid green;
    overflow: hidden;
  }
`;
