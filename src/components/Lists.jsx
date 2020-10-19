import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Tags from "./Tags";

const Container = styled.div`
  max-width: 700px;
  padding: 1.5rem;
  margin: auto;
`;

const PostsEach = styled.div`
  margin-bottom: 3rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e6e6e6;

  h2 {
    font-size: 1.5rem;
    line-height: 1.2;
    letter-spacing: -2px;
    margin: 0;

    @media only screen and (min-width: 600px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    text-align: left;
    margin: 0.5rem 0;

    a {
      background: none;
      color: var(--link-color);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;

  time {
    font-size: 0.85rem;
    font-weight: 700;
    color: #4e595b;
  }
`;

export default function Lists({ posts }) {
  return (
    <Container>
      {posts.map((post) => {
        return (
          <PostsEach key={post.node.id}>
            <h2>
              <Link to={post.node.fields.slug}>
                {post.node.frontmatter.title}
              </Link>
            </h2>
            <p>{post.node.excerpt}</p>
            <p>
              <Link to={post.node.fields.slug}>Read More</Link>
            </p>
            <PostInfo>
              <Tags tags={post.node.frontmatter.tags} />
              <time>
                {"📅 "}
                {post.node.frontmatter.date}
              </time>
            </PostInfo>
          </PostsEach>
        );
      })}
    </Container>
  );
}
