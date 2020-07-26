import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Lists from '../components/Lists'
import config from '../utils/config'

export default function TagTemplate({ data, pageContext }) {
  const { tag } = pageContext
  const tagPosts = data.allMarkdownRemark.edges // from the graphql query below
  return (
    <Layout>
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" - ${config.siteTitle}`} />
        <Lists posts={tagPosts} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
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
          }
        }
      }
    }
  }
`