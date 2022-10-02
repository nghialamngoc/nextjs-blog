import SyntaxHighlighter from "react-syntax-highlighter";
import Button from "./Button";
import CustomLink from "./CustomLink";
import DocsHeading from "./DocsHeading";
import { Strong } from "./MDXComponents.styled";
import BlogTable from "./Table";
import TableContent from "./TableContent";

const MDXComponents = {
  H1: (props: any) => <DocsHeading as="h1" {...props}></DocsHeading>,
  H2: (props: any) => <DocsHeading as="h2" {...props}></DocsHeading>,
  a: CustomLink,
  Strong,
  BlogTable,
  Button,
  SyntaxHighlighter,
  TableContent,
};

export default MDXComponents;
