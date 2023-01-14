import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Cart } from "../../components/Cart";
import { ProductList } from "../../components/ProductList";
import { ProductItem } from "../../components/ProductList/ProductItem";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import { iProducts } from "../../services/getProducts";
import { MainHome } from "./style";

export const Home = () => {
  const { products, getProd, unidade, setOpenModal, openModal } =
    useContext(CartContext);
  const { logOutUser } = useContext(UserContext);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [list, setList] = useState<iProducts[]>([]);
  const userToken = localStorage.getItem("@UserId");

  const search = () => {
    if (searchValue === "") {
      setList(products);
    } else {
      const filteredProduct = products.filter(
        (prod) =>
          prod.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          prod.category.toLowerCase().includes(searchValue.toLowerCase())
      );
      setList(filteredProduct);
    }
  };

  useEffect(() => {
    getProd();
    search();
  }, [searchValue]);

  return userToken ? (
    <>
      <MainHome>
        <header>
          <div className="divContainer">
            <figure className="figureLogo" />
            <nav>
              <figure
                className="figureSearch"
                onClick={() => setOpenSearch(!openSearch)}
              />
              {openSearch ? (
                <div className="divSearch2">
                  <input
                    type="text"
                    placeholder="Digitar Pesquisa"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <figure
                    className="figureSearch2 backgroundColor"
                    onClick={() => {
                      setOpenSearch(!openSearch);
                      search();
                    }}
                  />
                </div>
              ) : null}
              <div className="divSearch">
                <input
                  type="text"
                  placeholder="Digitar Pesquisa"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <figure
                  className="figureSearch2 backgroundColor"
                  onClick={() => search()}
                />
              </div>

              <div className="divCart">
                <p className="quant">{unidade}</p>
                <figure
                  className="figureCart"
                  onClick={() => setOpenModal(true)}
                />
              </div>
              <figure className="figureLogOut" onClick={() => logOutUser()} />
            </nav>
          </div>
        </header>
        <section className="main">
          {searchValue !== "" && (
            <div className="searchInfo">
              <h2>
                Resultado para:
                <span>{searchValue}</span>
              </h2>
              <button
                type="button"
                onClick={() => {
                  setSearchValue("");
                  setOpenSearch(!openSearch);
                }}
              >
                X
              </button>
            </div>
          )}
          <ProductList>
            {list.length
              ? list.map((prod) => ProductItem(prod))
              : products.map((prod) => ProductItem(prod))}
          </ProductList>
        </section>
      </MainHome>
      {openModal ? <Cart setOpenModal={setOpenModal} /> : null}
    </>
  ) : (
    <Navigate to="/login" />
  );
};
