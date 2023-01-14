import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastInfo, ToastSucess } from "../components/Toast";
import { getProducts, iProducts } from "../services/getProducts";

interface iProductsProviderProps {
  children: React.ReactNode;
}
interface iProductsContext {
  products: iProducts[];
  getProd: () => void;
  addCart: (idProd: number) => void;
  addUnidade: (idProd: number) => void;
  removeCart: (idProd: number) => void;
  removeAllCart: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  unidade: number;
  cart: iProducts[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext({} as iProductsContext);

export const CartProvider = ({ children }: iProductsProviderProps) => {
  const [products, setProducts] = useState([] as iProducts[]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [cart, setCart] = useState([] as iProducts[]);
  const [unidade, setUnidade] = useState(0);
  const navigate = useNavigate();

  const getProd = async () => {
    const productsList = await getProducts();
    if (productsList !== undefined) {
      return setProducts(productsList);
    } else {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  const addCart = (idProd: number) => {
    const prodSelected = products.filter(({ id }) => id === idProd);
    const verify = cart.some((prod) => prod.id === idProd);
    if (verify === false) {
      setCart([...cart, ...prodSelected]);
      setUnidade(unidade + 1);
      ToastSucess("Produto adicionado com sucesso.");
    } else {
      ToastInfo(
        "Produto já consta no carrinho, favor aumentar a quantidade por lá!"
      );
    }
  };

  const addUnidade = (idProd: number) => {
    const prodSelected = products.filter(({ id }) => id === idProd);
    setCart([...cart, ...prodSelected]);
    setUnidade(unidade + 1);
    ToastSucess("Produto adicionado com sucesso.");
  };
  const removeCart = (idProd: number) => {
    const prodSelected = cart.find((prod) => prod.id === idProd);
    const index = cart.findIndex((prod) => prod === prodSelected);

    cart.splice(index, 1);

    setCart([...cart]);
    setUnidade(unidade - 1);
    ToastSucess("Produto removido com sucesso.");
  };
  const removeAllCart = () => {
    setCart([]);
    setUnidade(0);
    ToastSucess("Todos os produtos foram removidos com sucesso.");
  };

  return (
    <CartContext.Provider
      value={{
        products,
        getProd,
        setLoading,
        loading,
        addCart,
        addUnidade,
        removeCart,
        unidade,
        cart,
        removeAllCart,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
