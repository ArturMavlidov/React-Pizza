import React, { memo } from "react";
import cn from "classnames";
import "./style.scss";

const Button = memo(({ outline, children, className, onClick, data }) => {

  return (
    <button
      onClick={onClick}
      className={cn("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
});

export default Button;
