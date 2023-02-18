import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Lists from "../components/Lists";
import SEO from "../components/SEO";

export default function Index({ data }) {
  const posts = data.posts.edges; // from the graphql query below

  return (
    <Layout>
      <Lists posts={posts} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {template: {eq: "post"}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`;

export const Head = () => 
  <SEO
    customTitle="Articles">
  </SEO>