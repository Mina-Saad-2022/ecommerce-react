import Logo from "../../../assets/svg/cart.svg?react";
import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;
const Headerbasket = () => {
  return (
    <div className={basketContainer}>
      <Logo />
      <div className={basketQuantity}>4</div>
    </div>
  );
};

export { Headerbasket };
