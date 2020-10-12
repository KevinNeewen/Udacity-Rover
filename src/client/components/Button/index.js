import styles from "./button.module.scss";
import { store } from "../../store";

const Button = (label) => {
  return `
    <a class=${isActiveStyle(
      label,
      styles.button,
      styles.button_active
    )} href="/#${label}">
      ${label}
      <div class="${isActiveStyle(
        label,
        styles.button_horizontal,
        styles.button_horizontal_active
      )}"></div>
      <div class="${isActiveStyle(
        label,
        styles.button_vertical,
        styles.button_vertical_active
      )}"></div>
    </a>
  `;
};

const isActiveStyle = (label, inactiveStyle, activeStyle) => {
  return store.get("selectedRover") === label ? activeStyle : inactiveStyle;
};

export default Button;
