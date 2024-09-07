import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyled from "./styles.js";
import { CartItemsProvider } from "./hooks/contextCart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartItemsProvider>
      <GlobalStyled />
      <App />
    </CartItemsProvider>
  </StrictMode>
);
