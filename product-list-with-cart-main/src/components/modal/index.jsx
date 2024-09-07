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
        contentLabel="Order Confirmation Modal"
        className="custom-modal"
        overlayClassName="customOverlay"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="finish-cart-order">
          <div className="finish-cart-order-img">
            <img
              src="https://raw.githubusercontent.com/Edilson591/front_End_Mentor_Solutions/b691a31edffbe9127fc314cffff7f52fef6d8db1/product-list-with-cart-main/src/assets/images/icon-order-confirmed.svg"
              alt="Icon indicating that the order has been confirmed"
              role="img"
              aria-label="Order confirmed"
            />
          </div>
          <div className="finish-cart-order-text">
            <h3 id="modal-title" className="text-title" role="heading" aria-level="3">
              Order Confirmed
            </h3>
            <p id="modal-description" className="text-description">
              We hope you enjoy your food!
            </p>
          </div>
        </div>
        <div className="finish-cart">
          <ul className="finish-cart-itens" role="list">
            {cart.map((item) => (
              <li className="finish-cart-iten" key={item.id} role="listitem">
                <div className="finish-cart-product">
                  <div className="finish-description-product">
                    <img
                      src={item.image.thumbnail}
                      alt={item.name}
                      className="image-product"
                      role="img"
                      aria-label={`Image of ${item.name}`}
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
            ))}
          </ul>
          <div className="cart-total">
            <span>Order Total</span>
            <span className="total-value">
              ${cart
                .reduce(
                  (accumulatior, valueAtual) =>
                    accumulatior + valueAtual.price * valueAtual.quantity,
                  0
                )
                .toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={onRequestClose}
          className="confirm-button"
          aria-label="Start a new order"
        >
          Start New Order
        </button>
      </CustomModal>
    </>
  );
}

ElementModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ElementModal;
