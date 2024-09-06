import styled from "styled-components";
import Modal from "react-modal";

// Estilo para o modal
export const CustomModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 8px;
  padding: 4rem;
  z-index: 9999;

  @media (max-width: 768px) {
    transform: none;
    top: 10%;
    left: 0;
    bottom: 0;
    max-width: none;
    max-height: none;
  }

  .finish-cart-order {
    margin-bottom: 2rem;
    .finish-cart-order-img {
      margin-bottom: 2rem;
    }
    .finish-cart-order-text {
      .text-title {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 2rem;
      }
      .text-description {
        color: hsl(14, 25%, 72%);
      }
    }
  }

  .finish-cart {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background-color: hsl(20, 50%, 98%);
    .cart-total {
      margin: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .finish-cart-itens {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .finish-cart-iten {
        border-bottom: 1px solid #dddddd;
        .finish-cart-product {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          .finish-description-product {
            display: flex;
            align-items: center;
            gap: 15px;
            .image-product {
              max-width: 60px;
              border-radius: 8px;
            }
            .description-details {
              .product-name {
                display: block;
                margin-bottom: 15px;
              }

              .product-quantity {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
`;

// Estilos para o overlay
export const globalOverlayStyle = `
  .customOverlay {
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
