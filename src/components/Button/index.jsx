import React, { memo, useState } from "react";
import cn from "classnames";
import "./style.scss";

const Button = memo(({ outline, children, className, onClick, data }) => {
  const [state, setState] = useState([{ a: 1 }]);

  const onChange = () => {
    const newState = state.map((item) => ({ ...item, a: 2 }));
    setState(newState);
  };

  return (
    <button
      onClick={onChange}
      className={cn("button", className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
});

export default Button;
