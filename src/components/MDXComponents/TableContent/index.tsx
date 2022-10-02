import Link from "next/link";
import * as React from "react";
import { Container, Item } from "./TableContent.styled";

export interface TableContentItem {
  title?: string;
  href?: string;
}

export interface ITableContentProps {
  data: TableContentItem[];
}

export default function TableContent({ data }: ITableContentProps) {
  return (
    <Container>
      {data &&
        data.map((item, index) => {
          return (
            <Link key={index} href={item.href || ""} passHref>
              <Item>{item.title}</Item>
            </Link>
          );
        })}
    </Container>
  );
}
