import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Container = styled.div`
  max-width: 700px;
  padding: 1.5rem;
  margin: auto;
`;

export default function Index({ data }) {
  const home = data.home.edges[0].node; // from the graphql query below

  return (
    <Layout>
      <Container>
      <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: home.html }}
              />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    home: allMarkdownRemark(filter: {fields: {slug: {regex: "/home/"}}}) {
      edges {
        node {
          html
        }
      }
    }
  }
`;

export const Head = () => 
  <SEO>
  </SEO>