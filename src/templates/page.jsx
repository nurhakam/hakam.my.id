import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Helmet from "react-helmet";
import styled from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import config from "../utils/config";

const ArticleContainer = styled.section`
  padding: 0 1.5rem;

  @media only screen and (min-width: 600px) {
    max-width: 700px;
    margin: auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      text-decoration: none;
    }
  }
`;

const ArticleHeader = styled.div`
  padding 2rem 0;
`;

const H1 = styled.h1`
  font-size: 2rem;
  line-height: 1.1;
  text-align: center;
`;

export default function PageTemplate({ data }) {
  const post = data.mdx; // from the graphql query below

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO />
      <ArticleContainer>
        <ArticleHeader>
          <H1>{post.frontmatter.title}</H1>
        </ArticleHeader>
        <MDXRenderer>{post.body}</MDXRenderer>
      </ArticleContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
