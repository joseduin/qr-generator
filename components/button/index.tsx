import React from "react";
import classes from "./index.module.css";

const THEME = {
  primary: {
    in: "#42b3c2",
    out: "#328e9a",
    label: "#ffffff",
  },
  secondary: {
    in: "#FFC011",
    out: "#AD7F00",
    label: "#000000",
  },
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  primary?: boolean;
  secondary?: boolean;
}
const Button = ({
  className,
  label,
  primary = false,
  secondary = false,
  ...rest
}: Props) => {
  const color = primary
    ? THEME.primary
    : secondary
    ? THEME.secondary
    : THEME.primary;

  return (
    <button {...rest} className={`${classes.button} ${className}`}>
      <div className={classes.buttonOut} style={{ background: color.out }}>
        <div className={classes.buttonIn} style={{ background: color.in }}>
          <span style={{ color: color.label }}>{label}</span>
        </div>
      </div>
    </button>
  );
};

export default Button;
