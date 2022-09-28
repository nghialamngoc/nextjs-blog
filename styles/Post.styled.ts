import { styled } from "@stitches/react";

const Container = styled("div", {
  maxWidth: "900px",
  margin: "0 auto",
});

const PostWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px",
});

const PostCreateDate = styled("div", {
  padding: "5px 10px",
  color: "white",
  background: "#3c3c3c",
  width: "fit-content",
  fontSize: "12px",
  marginTop: "10px",
});

const PostTitle = styled("h3", {
  fontSize: "18px",
  margin: "10px 0",
  cursor: "pointer",
});

export { PostWrapper, Container, PostCreateDate, PostTitle };
