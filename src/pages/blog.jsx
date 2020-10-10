import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Lists from '../components/Lists'
import SEO from '../components/SEO'

export default function Index({ data }) {
  const posts = data.posts.edges // from the graphql query below
  const siteTitle = data.site.siteMetadata.title // from the graphql query below

  return (
    <Layout>
      <Helmet title={`Articles – ${siteTitle}`} />
      <SEO />
      <Lists posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    posts : allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
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
`