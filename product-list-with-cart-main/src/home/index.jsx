import { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { CartItemsContext } from "../hooks/contextCart";
import ElementModal from "../components/modal";

function ProductOverview() {
  const [data, setData] = useState(null); // Dados do produto
  const [modalIsOpen, setModalIsOpen] = useState(false); // controle de abertura e fechamento do modal
  const [cart, setCart] = useContext(CartItemsContext); // pegando o cart do contexto principal
  
  //salvar o estado do botão
  const getCartVisible = () => {
    const savedCartItem = localStorage.getItem("visibleCart");
    return savedCartItem ? JSON.parse(savedCartItem) : {};
  };
  const [visibility, setVisibility] = useState(getCartVisible);


  useEffect(() => {
    localStorage.setItem("visibleCart", JSON.stringify(visibility));
  }, [visibility]);

//modifica o estado do modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false)
    localStorage.removeItem('visibleCart');
    localStorage.removeItem('cartItem');
    setCart([]);
    setVisibility({});
  };

// adiciona um item no carrinho
  const addCartItem = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        const product = data.find((item) => item.id === productId);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
//remove um item do carrinho
  const removeCartItem = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item.id === productId && item.quantity <= 1) {
            setVisibility((prevVisibility) => ({
              ...prevVisibility,
              [productId]: false,
            }));
            return null;
          }
          if (item.id === productId && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(Boolean);

      return updatedCart;
    });
  };
//remove o item do carrinho principal
  const removeItemComplet = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setVisibility((prevVisibility) => ({
      ...prevVisibility,
      [productId]: false,
    }));
  };

  //busca api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/Edilson591/front_End_Mentor_Solutions/main/product-list-with-cart-main/data.json");
        const result = await response.json();
        setTimeout(() => {
          setData(result);
        },1000)
      } catch (error) {
        console.error("Erro ao carregar o JSON:", error);
      }
    };

    fetchData();
  }, []);


//
  if (!data) {
    return <div className="login"></div>;
  }

  return (
    <>
      <div className="conteiner-grid">
        <S.HeaderContainer className="itemSection1">
          <h1 className="title-card">Desserts</h1>
        </S.HeaderContainer>
        <S.SectionContainer className="itemSection2">
          <div className="product-list grid-container">
            {data.map((product) => (
              <div
                className={`product-card item${product.id}`}
                key={product.id}
              >
                <div className="product-image-button">
                  <picture>
                    <source
                      srcSet={product.image.mobile}
                      media="(max-width: 599px)"
                    />
                    <source
                      srcSet={product.image.tablet}
                      media="(min-width: 600px) and (max-width: 1024px)"
                    />
                    <source
                      srcSet={product.image.desktop}
                      media="(min-width: 1025px)"
                    />
                    <img
                      src={product.image.thumbnail}
                      alt={product.name}
                      className={
                        visibility[product.id]
                          ? "image-card is-active"
                          : "image-card"
                      }
                    />
                  </picture>
                  <div className="button-container">
                    {visibility[product.id] ? (
                      <div className="container-finish-button">
                        <button
                          className="remove-from-cart-button"
                          onClick={() => removeCartItem(product.id)}
                        />
                        <span className="product-quantity">
                          {cart.find((item) => item.id === product.id)
                            ?.quantity || 0}
                        </span>
                        <button
                          className="add-to-cart-button"
                          onClick={() => addCartItem(product.id)}
                        />
                      </div>
                    ) : (
                      <div className="container-init-button">
                        <button
                          className="add-to-card"
                          onClick={() => {
                            addCartItem(product.id);
                            setVisibility((prev) => ({
                              ...prev,
                              [product.id]: true,
                            }));
                          }}
                        >
                          <img
                            className="icon-card"
                            src="assets/images/icon-add-to-cart.svg"
                            alt="icon de carrinho"
                          />
                          <span className="add-card-name">Add to Cart</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="product-info">
                  <p className="product-category">{product.category}</p>
                  <h2 className="product-name">{product.name}</h2>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </S.SectionContainer>
        <S.AsideContainer className="itemSection3">
          <aside className="cart">
            <h2 className="cart-title">Your Cart({cart.length})</h2>
            {cart.length > 0 ? (
              <>
                <ul className="cart-items">
                  {cart.map((item) => (
                    <li className="cart-item" key={item.id}>
                      <div className="cart-product">
                        <span className="product-name">{item.name}</span>
                        <div className="cart-quatity-product">
                          <span className="product-quantity">
                            x{item.quantity}
                          </span>
                          <span className="product-value">
                            @${item.price.toFixed(2)}
                          </span>
                          <span className="product-sum">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <button
                        className="remove-button"
                        onClick={() => removeItemComplet(item.id)}
                      />
                    </li>
                  ))}
                </ul>
                <div className="cart-total">
                  <span>Order Total</span>
                  <span className="total-value">
                    $
                    {cart
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <div className="cart-carbon-container">
                  <img
                    src="assets/images/icon-carbon-neutral.svg"
                    alt="icon carbon neutral"
                  />
                  <p className="carbon-neutral-message">
                    This is a <b>carbon-neutral</b> delivery
                  </p>
                </div>
                <button className="confirm-button" onClick={openModal}>
                  Confirm Order
                </button>
              </>
            ) : (
              <div className="cart-empty">
                <img
                  src="./src/assets/images/illustration-empty-cart.svg"
                  alt="cart empty"
                />
                <h3 className="cart-emptry-text">
                  Your added items will appear here
                </h3>
              </div>
            )}
          </aside>
        </S.AsideContainer>
        <ElementModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </div>
    </>
  );
}

export default ProductOverview;
