import { styled } from "@stitches/react";

const Heading = styled("div", {
  fontWeight: "bold",
  variants: {
    as: {
      h1: {
        fontSize: "2rem",
      },
      h2: {
        fontSize: "1.5rem",
      },
    },
  },
});

const DocsHeading = ({ children, id, ...rest }: any) => {
  return (
    <Heading {...rest} id={id}>
      {children}
    </Heading>
  );
};

export default DocsHeading;
