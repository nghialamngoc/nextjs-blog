import { styled } from "@stitches/react";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Item = styled("div", {
  background: "#e0e2ff80",
  padding: "10px",
  fontSize: "18px",
  fontWeight: "500",
  cursor: "pointer",
  marginBottom: "3px",

  "&:hover": {
    background: "#b4aaff",
  },
});

export { Container, Item };
