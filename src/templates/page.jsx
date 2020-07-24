import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import config from '../utils/config'

export default function PageTemplate({ data }) {
  const post = data.markdownRemark // from the graphql query below

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | ${config.siteTitle}`} />
      <SEO />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
        </header>
        <section className="medium">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
