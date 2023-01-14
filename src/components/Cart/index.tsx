import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { iProducts } from "../../services/getProducts";
import { ListItemCart } from "./ProductItem";
import { SectionModalContainer } from "./styled";

interface iCartProp {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cart = ({ setOpenModal }: iCartProp) => {
  const { cart, removeAllCart } = useContext(CartContext);
  const idsCart: number[] = [];

  const totalCart = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (
    <>
      <SectionModalContainer>
        <section className="modalBody">
          <header>
            <h3>Carrinho</h3>
            <button type="button" onClick={() => setOpenModal(false)}>
              X
            </button>
          </header>
          <main>
            {cart.length === 0 ? (
              <div className="noItems">
                <h3>Sua sacola está vazia</h3>
                <p>Adicione itens</p>
              </div>
            ) : (
              <div className="items">
                <ul>
                  {cart.map((prod) => {
                    const verify = idsCart.some((num) => num === prod.id);
                    if (verify === false) {
                      idsCart.push(prod.id);
                      return ListItemCart(prod);
                    }
                  })}
                  <div className="totalContainer">
                    <div>
                      <p>Total</p>
                      <span>R$ {totalCart.toFixed(2)}</span>
                    </div>
                    <button type="button" onClick={() => removeAllCart()}>
                      Remover todos
                    </button>
                  </div>
                </ul>
              </div>
            )}
          </main>
        </section>
      </SectionModalContainer>
    </>
  );
};
