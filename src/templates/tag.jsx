import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Lists from "../components/Lists";
import SEO from "../components/SEO";

export default function TagTemplate({ data }) {
  const tagPosts = data.allMarkdownRemark.edges; // from the graphql query below
  return (
    <Layout>
      <div className="tag-container">
        <Lists posts={tagPosts} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMM YYYY")
            tags
          }
        }
      }
    }
  }
`;

export const Head = ({ pageContext }) => 
  <SEO 
    customTitle={`Posts tagged as "${pageContext.tag}"`}>
  </SEO>