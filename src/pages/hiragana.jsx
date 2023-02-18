import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import KanaQuiz from "../components/Kana";

export default function Index({ data }) {
  const kanaQuery = data.allKanaJson.edges; // from the graphql query below

  return (
    <>
    <KanaQuiz data={kanaQuery} />
    </>
  );
}

export const pageQuery = graphql`
  query kanaQuery {
    allKanaJson(filter: {type: {eq: "gojuuon"}}) {
      edges {
        node {
          hiragana
          spelling
        }
      }
    }
  }
`;

export const Head = () => 
  <SEO 
    customTitle="Hiragana">
  </SEO>