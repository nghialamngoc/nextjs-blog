import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import MDXComponents from "../../src/components/MDXComponents";
import TableContent from "../../src/components/MDXComponents/TableContent";

import { IPost } from "../../src/interfaces/post";
import { Container } from "../../styles/Post.styled";

const slugs = ["functions-for-beginners", "solidjs-for-beginners"];

export interface IPostProps {
  post: IPost;
  mdxSource: any;
}

export default function Post({ post, mdxSource }: IPostProps) {
  return (
    <Container>
      <div>Post Page</div>
      <div>{post.title}</div>
      <MDXRemote {...mdxSource} components={MDXComponents}></MDXRemote>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("run getStaticPaths");

  const paths = slugs.map((slug) => {
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any> = async (
  context: GetStaticPropsContext
) => {
  try {
    const { params }: any = context;

    console.log(
      "run getStaticProps file path:",
      path.join("src", "posts", params.slug + ".mdx")
    );

    const markdownWithMeta = fs.readFileSync(
      path.join("src", "posts", params.slug + ".mdx")
    );

    const { data: frontMartter, content } = matter(markdownWithMeta);

    const mdxSource = await serialize(content);

    return {
      props: {
        post: frontMartter,
        revalidate: 60 * 60 * 24,
        mdxSource,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        post: {},
      },
      notFound: true,
    };
  }
};
