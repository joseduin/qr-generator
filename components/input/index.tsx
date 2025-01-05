import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./index.module.css";

const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  return (
    <div className={`${classes.wrap} ${className}`}>
      <div className={classes.separator}></div>
      <input ref={inputRef} {...rest} className={classes.input} />
    </div>
  );
});

// Add display name for debugging purposes
Input.displayName = "Input";

export default Input;