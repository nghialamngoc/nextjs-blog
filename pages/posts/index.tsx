import { GetStaticProps, NextPage } from "next";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { IPost } from "../../src/interfaces/post";
import Link from "next/link";
import Image from "next/image";
import { Container, PostCreateDate, PostTitle, PostWrapper } from "../../styles/Post.styled";

export interface IPostsProps {
  posts: IPost[];
}

const Posts: NextPage<IPostsProps> = (props) => {
  return (
    <Container>
      <div>This is posts page</div>
      <PostWrapper>
        {props.posts.map((post: IPost, index) => {
          return (
            <div key={index}>
              <Image
                src={`/post-thumbnails${post.thumbnailUrl}`}
                alt="post-thumbnail"
                width={300}
                height={200}
                objectFit="fill"
              ></Image>
              <div>
                <PostCreateDate>{post.createDate}</PostCreateDate>
                <Link href={`/posts/${post.slug}`} passHref>
                  <PostTitle>{post.title}</PostTitle>
                </Link>
              </div>
            </div>
          );
        })}
      </PostWrapper>
    </Container>
  );
};

export const getStaticProps: GetStaticProps<IPostsProps> = async () => {
  try {
    console.log("path", path.join("src", "posts"));

    const files = fs.readdirSync(path.join("src", "posts"));

    const posts = files.map((file) => {
      const markdownWithMeta = fs.readFileSync(path.join("src", "posts", file));
      const { data: frontMartter } = matter(markdownWithMeta);
      return { ...frontMartter, slug: file.split(".")[0] };
    });

    console.log("posts", posts);

    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.log("err", err);

    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Posts;
