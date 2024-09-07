import styled from "styled-components";
import { darken } from "polished";

export const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;

  .itemEspecial {
    height: 200px;
    width: 200px;
    background-color: aquamarine;
    position: absolute;
  }

  .title-card {
    font-size: 4rem;
    font-weight: bold;
    text-align: left;
  }
`;

export const SectionContainer = styled.section`
  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    @media (min-width: 767px) and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .product-card {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      gap: 20px;
      transition: all 0.3s ease;

      .product-image-button {
        position: relative;
        .button-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          bottom: 0;
          left: 50%;
          min-width: 140px;
          transform: translate(-50%, 30%);
          text-align: center;
          background: transparent;

          .container-init-button,
          .container-finish-button {
            background: transparent;
          }
          .container-init-button {
            .add-to-card {
              border: 1px solid hsl(14, 25%, 72%);
              background: none;
              font-weight: bold;
              display: flex;
              font-size: 1rem;
              white-space: nowrap;
              border-radius: 20px;
              align-items: center;
              padding: 1rem 2.5rem;
              background-color: #fff;
              transition: background-color 0.3s ease, border-color 0.3s ease;

              .add-card-name {
                font-size: 1rem;
              }

              &:hover {
                border: 1px solid hsl(14, 86%, 42%);
              }

              &:hover .add-card-name {
                color: hsl(14, 86%, 42%);
              }
            }
          }
          .container-finish-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 1rem 0.5rem;
            max-width: 125px;
            border-radius: 20px;
            background-color: hsl(14, 86%, 42%);
            transition: background-color 0.3s ease, transform 0.3s ease;

            .product-quantity,
            .remove-from-cart-button,
            .add-to-cart-button {
              background-color: transparent;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              color: #fff;
              background: transparent;
              /* transition: background-color 0.5s ease; */
            }
            .remove-from-cart-button,
            .add-to-cart-button {
              border: 2px solid #fff;
            }
            .remove-from-cart-button {
              display: flex;
              align-items: center;
              background-image: url("./src/assets/images/icon-decrement-quantity.svg");
              background-repeat: no-repeat;
              background-position: center;
              transition: all 0.5s ease;
              background-color: transparent;
              &:hover {
                background-color: #fff;
                background-image: url("./src/assets/images/icon-decrement-quantity-hover.svg");
                background-repeat: no-repeat;
                background-position: center;
              }
            }
            .add-to-cart-button {
              background-image: url("./src/assets/images/icon-increment-quantity.svg");
              background-repeat: no-repeat;
              background-position: center;
              transition: all 0.5s ease;
              background-color: transparent;
              &:hover {
                background-color: #fff;
                background-image: url("./src/assets/images/icon-increment-quantity-hover.svg");
                background-repeat: no-repeat;
                background-position: center;
              }
            }
          }
          .remove-from-cart-button:focus,
          .add-to-cart-button:focus {
            outline: none;
            border: 2px solid #fff;
          }
        }
      }

      .add-to-cart-button {
        .add-card-name {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }

      .icon-card {
        margin-right: 0.25rem;
        height: 1.5rem;
      }
    }

    .image-card {
      width: 100%;
      border-radius: 8px;
      border: 1px solid transparent;
    }

    .is-active {
      border: 1px solid hsl(14, 86%, 42%);
    }
  }

  .product-info {
    margin: 1.5rem 0;

    .product-category {
      color: hsl(14, 25%, 72%);
    }
    .product-name {
      margin: 10px 0;
    }
    .product-price {
      font-weight: bold;
      color: hsl(14, 86%, 42%);
    }
  }
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const AsideContainer = styled.section`
  .cart {
    padding: 25px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    position: relative;
    z-index: 999;

    .cart-carbon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      text-align: center;
      color: #6c757d;
      padding: 1rem 2rem;
      background-color: hsl(20, 50%, 98%);
    }
  }

  .cart-empty {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .cart-title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: left;
    color: hsl(14, 86%, 42%);
  }

  .cart-items {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;

    .cart-product {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      .product-name {
        font-weight: bold;
        color: #555;
      }
      .cart-quatity-product {
        .product-value {
          margin: 0 10px 0 15px;
          color: hsl(14, 25%, 72%);
        }
      }
    }
  }

  .product-quantity {
    color: hsl(14, 86%, 42%);
    font-weight: bold;
  }

  .remove-button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    border-radius: 50%;
    color: #fff;
    border: 1px solid hsl(14, 25%, 72%);
    background-color: transparent;
    background-image: url("https://raw.githubusercontent.com/Edilson591/front_End_Mentor_Solutions/5a5a90c0901d7c2b752ea87511340eaa32aa177e/product-list-with-cart-main/src/assets/images/icon-remove-item.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px 10px;
    transition: all 0.5s ease;
  }

  .remove-button:hover {
    background-image: url("https://raw.githubusercontent.com/Edilson591/front_End_Mentor_Solutions/5a5a90c0901d7c2b752ea87511340eaa32aa177e/product-list-with-cart-main/src/assets/images/icon-remove-item-hover.svg");
    border-color: hsl(14, 65%, 9%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px 10px;
    transition: all 0.5s ease;
  }

  .cart-total {
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .carbon-neutral-message {
    text-align: center;
    font-size: 1.3rem;
    color: #6c757d;

    b {
      font-size: 1.3rem;
    }
  }

  .confirm-button {
    margin-top: 30px;
    background-color: hsl(14, 86%, 42%);
    color: hsl(20, 50%, 98%);
    border: none;
    padding: 1.5rem 2rem;
    border-radius: 25px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    display: block;
    transition: background-color 0.3s ease;
  }

  .confirm-button:hover {
    background-color: ${darken(0.1, "hsl(14, 86%, 42%)")};
  }
`;
