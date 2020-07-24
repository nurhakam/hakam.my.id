import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Lists from '../components/Lists'
import SEO from '../components/SEO'
import config from '../utils/config'

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.edges // from the graphql query below
  return (
    <Layout>
      <Helmet title={`Articles – ${config.siteTitle}`} />
      <SEO />
      <Lists posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`