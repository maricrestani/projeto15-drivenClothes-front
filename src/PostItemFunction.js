import axios from "axios";

export function PostItem(img, description, serial, value) {
  const postItens = {
    img: img,
    description: description,
    serial: serial,
    value: value,
  };
  axios
    .post("http://localhost:5000/cart", postItens)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
