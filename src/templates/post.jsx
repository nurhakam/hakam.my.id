import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PostTags from '../components/PostTags'
import SEO from '../components/SEO'
import config from '../utils/config'

import '../new-moon.css'

const ArticleContainer = styled.section`
  padding: 0 1.5rem;

  // border: 1px dashed;

  @media only screen and (min-width: 600px) {
    max-width: 700px;
    margin: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    a {
      text-decoration: none
    }
  }
`

const ArticleHeader = styled.div`
  // border: 1px dashed;
  padding 2rem 0;
`

const H1 = styled.h1`
  font-size: 2rem;
  line-height: 1.1;
  text-align: center;

  // border: 1px dashed;
`

const Article = styled.article`
  // border: 1px dashed;
`

export default function PostTemplate({ data }) {
  const post = data.markdownRemark // from the graphql query below

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} - ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} postSEO />
      <ArticleContainer>
        <ArticleHeader>
          <H1>{`~ ${post.frontmatter.title} ~`}</H1>
          <PostTags tags={post.frontmatter.tags} />
        </ArticleHeader>
        <Article dangerouslySetInnerHTML={{ __html: post.html }} />
      </ArticleContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        cover
        date(formatString: "MMMM DD, YYYY")
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`
