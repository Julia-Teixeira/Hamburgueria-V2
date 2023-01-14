import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import { Router } from "./routes";
import { StyledContainer } from "./components/Toast/style";
import { Bounce } from "react-toastify";

function App() {
  return (
    <div className="container">
      <UserProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </UserProvider>
      <StyledContainer autoClose={2000} transition={Bounce} />
    </div>
  );
}

export default App;
