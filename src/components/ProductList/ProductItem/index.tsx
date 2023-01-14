import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { iProducts } from "../../../services/getProducts";
import { Button } from "../../../styles/Button";
import { LiProduct } from "./style";

export const ProductItem = (prod: iProducts) => {
  const { addCart } = useContext(CartContext);
  return (
    <LiProduct key={prod.id}>
      <div className="divImagem">
        <img src={prod.img} alt={`Imagem de ${prod.name}`} />
      </div>
      <div className="divContent">
        <h2>{prod.name}</h2>
        <span>{prod.category}</span>
        <p>{`R$ ${prod.price}`}</p>

        <Button
          width={106}
          height={40}
          color={"--color-white"}
          backgroundColor={"--color-grey200"}
          onClick={() => addCart(prod.id)}
        >
          Adicionar
        </Button>
      </div>
    </LiProduct>
  );
};
