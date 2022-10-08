import React, { FC, useState, useEffect } from "react";

import { styled } from "../../style";

type NativeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input: FC<NativeProps & { label: string }> = ({
  label,
  ...props
}) => {
  const [float, setFloat] = useState(!!props.value);

  useEffect(() => {
    setFloat(!!props.value);
  }, [props.value]);

  return (
    <InputLabel float={float}>
      <span>{label}</span>
      <input
        {...props}
        onChange={e => {
          setFloat(!!e.target.value);
          props.onChange?.(e);
        }}
      />
    </InputLabel>
  );
};

const InputLabel = styled("label", {
  display: "block",
  position: "relative",
  cursor: "text",
  margin: "1rem",
  "> span": {
    transition: ".1s font-size ease, .1s top ease",
    pointerEvents: "none",
    position: "absolute",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    left: "1rem",
    top: "1rem",
    background:
      "linear-gradient(to right, transparent, $colors$bgCard 10%, $colors$bgCard 90%, transparent)",
  },

  "&:focus-within": {
    "> span": {
      fontSize: ".8rem",
      top: "-.5rem",
    },
  },

  variants: {
    float: {
      true: {
        "> span": {
          fontSize: ".8rem",
          top: "-.5rem",
        },
      },
    },
  },

  "> input": {
    all: "unset",
    transition: ".2s box-shadow ease",
    width: "calc(100% - 3.5rem)",
    height: "3rem",
    borderRadius: "calc(1.5rem + 3px)",
    minWidth: 200,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    "> *": {
      flexGrow: 1,
    },
    border: "3px solid $colors$primary",
    "&:focus": {
      boxShadow:
        "-6px 0px 4px 0px $colors$primary, 6px 0px 4px 0px $colors$primary",
    },
  },
});
