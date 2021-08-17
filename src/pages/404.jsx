import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Container = styled.div`
  max-width: 700px;
  padding: 1.5rem;
  margin: auto;
  text-align: center;
`;

const BigText = styled.div`
  font-size: 10rem;
  font-weight: 700;
`;

export default function Index() {
  return (
    <Layout>
      <Helmet title="404 – Page Not Found" />
      <SEO />
      <Container>
        <BigText>404</BigText>
        <p>
          Sorry, we can’t find that page! Don’t worry though, everything is
          STILL AWESOME!
        </p>
      </Container>
    </Layout>
  );
}
