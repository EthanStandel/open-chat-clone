import { styled } from "../../style";

export const Button = styled("button", {
  all: "unset",
  transition: ".2s box-shadow ease, .1s transform ease",
  cursor: "pointer",
  display: "flex",
  position: "relative",
  margin: "1rem",
  width: "calc(100% - 2.5rem)",
  height: "3rem",
  borderRadius: "calc(1.5rem + 3px)",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid $colors$primary",
  textTransform: "uppercase",
  letterSpacing: ".3em",
  fontWeight: "bold",
  "&:focus-visible, &:hover": {
    boxShadow:
      "-6px 0px 4px 0px $colors$primary, 6px 0px 4px 0px $colors$primary",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
});
