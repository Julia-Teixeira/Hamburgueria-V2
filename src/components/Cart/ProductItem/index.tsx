import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { iProducts } from "../../../services/getProducts";
import { LiCart } from "./style";

export const ListItemCart = (prod: iProducts) => {
  const { cart, removeCart, addUnidade } = useContext(CartContext);

  const quantCartList = (idProd: number) => {
    const quant = cart.filter(({ id }) => id === idProd);
    return quant.length;
  };
  return (
    <LiCart key={prod.id}>
      <div className="divImage">
        <img src={prod.img} alt={`Imagem de ${prod.name}`} />
      </div>

      <div className="divContextContainer">
        <div className="divContext">
          <h3>{prod.name}</h3>
          <figure onClick={() => removeCart(prod.id)} />
        </div>
        <div className="counter">
          <button type="button" onClick={() => removeCart(prod.id)}>
            -
          </button>
          <span>{quantCartList(prod.id)}</span>
          <button type="button" onClick={() => addUnidade(prod.id)}>
            +
          </button>
        </div>
      </div>
    </LiCart>
  );
};
