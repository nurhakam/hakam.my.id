import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Lists from "../components/Lists";
import SEO from "../components/SEO";
import config from "../utils/config";

export default function TagTemplate({ data, pageContext }) {
  const { tag } = pageContext;
  const tagPosts = data.allMdx.edges; // from the graphql query below
  return (
    <Layout>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" - ${config.siteTitle}`} />
        <SEO />
        <Lists posts={tagPosts} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
