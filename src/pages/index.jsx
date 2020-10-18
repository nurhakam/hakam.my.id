import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Container = styled.div`
  max-width: 700px;
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
        <MDXRenderer>{home.body}</MDXRenderer>
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
    home : allMdx(
      filter: { fileAbsolutePath: { regex: "/home/" } }
    ) {
      edges {
        node {
          body
        }
      }
    }
  }
`
