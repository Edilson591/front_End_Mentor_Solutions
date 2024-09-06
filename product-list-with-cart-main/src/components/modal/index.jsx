import { useContext } from "react";
import { CartItemsContext } from "../../hooks/contextCart";
import PropTypes from "prop-types";
import { CustomModal } from "./styles/styles";
import { GlobalStyles } from "./styles/GlobalStyles";

CustomModal.setAppElement("#root");

function ElementModal({ isOpen, onRequestClose }) {
  const [cart] = useContext(CartItemsContext);


  return (
    <>
      <GlobalStyles />
      <CustomModal
        isOpen={isOpen}
        contentLabel="Example Modal"
        className="custom-modal"
        overlayClassName="customOverlay"
      >
        <div className="finish-cart-order">
          <div className="finish-cart-order-img">
            <img
              src="./src/assets/images/icon-order-confirmed.svg"
              alt="icon order confirmed"
            />
          </div>
          <div className="finish-cart-order-text">
            <h3 className="text-title">Order Confirmed</h3>
            <p className="text-description">We hope you enjoy your food!</p>
          </div>
        </div>
        <div className="finish-cart">
          <ul className="finish-cart-itens">
            {cart.map((item) => (
              <>
                <li className="finish-cart-iten" key={item.id}>
                  <div className="finish-cart-product">
                    <div className="finish-description-product">
                      <img
                        key={item.id}
                        src={item.image.thumbnail}
                        alt={item.name}
                        className="image-product"
                      />
                      <div className="description-details">
                        <span className="product-name">{item.name}</span>
                        <div className="product-quantity-product"></div>
                        <span className="product-quantity">
                          X{item.quantity}
                        </span>
                        <span className="product-value">
                          @${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="finish-product-price">
                      <span className="description-sum-item">
                        ${(item.quantity * item.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              </>
            ))}
          </ul>
          <div className="cart-total">
            <span>Order Total</span>
            <span className="total-value">
                $
              {cart
                .reduce(
                  (acumulatior, valueAtual) =>
                    acumulatior + valueAtual.price * valueAtual.quantity,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
        </div>
        <button onClick={onRequestClose} className="confirm-button">Start New Order</button>
      </CustomModal>
    </>
  );
}

ElementModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ElementModal;
