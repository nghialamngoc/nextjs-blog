import { styled } from "@stitches/react";

const H1 = styled("div", {
  fontSize: "2rem",
  fontWeight: "bold",
  margin: "16px 0",
});

const H2 = styled("div", {
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "16px 0",
});

const Strong = styled("div", {
  fontSize: "1rem",
  fontWeight: "bold",

  variants: {
    color: {
      "orange": {
        color: "#e87722",
      },
    },
  },
});

export { H1, H2, Strong };
