import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Container = styled.div`
  max-width: 800px;
  padding: 1.5rem;
  margin: auto;
`

export default function Index({ data }) {
  const siteTitle = data.site.siteMetadata.title // from the graphql query below
  const home = data.home.edges[0].node // from the graphql query below

  return (
    <Layout>
      <Helmet title={`${siteTitle} – Full Stack Human`} />
      <SEO />
      <Container>
        <article dangerouslySetInnerHTML={{ __html: home.html }} />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    home : allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/home/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
