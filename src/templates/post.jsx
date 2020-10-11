import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Tags from '../components/Tags'
import SEO from '../components/SEO'
import config from '../utils/config'

import '../new-moon.css'

const ArticleContainer = styled.section`
  padding: 0 1.5rem;

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
  padding: 1.5rem 0;

  @media only screen and (min-width: 600px) {
    padding-top: 3rem
  }
`

const H1 = styled.h1`
  font-size: 1.7rem;
  line-height: 1.1;
  letter-spacing: -1.2px;
  text-align: center;
  margin-top: 0;

  @media only screen and (min-width: 600px) {
    font-size: 1.8rem;
  }
`

const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;

  time {
    font-size: 0.85rem;
    font-weight: 700;
    color: #4e595b;
  }
`

export default function PostTemplate({ data }) {
  const post = data.markdownRemark // from the graphql query below

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} - ${config.siteTitle}`} />
      <SEO postPath={post.fields.slug} postNode={post} postSEO />
      <ArticleContainer>
        <ArticleHeader>
          <H1>{`${post.frontmatter.title}`}</H1>
          <PostInfo>
            <Tags tags={post.frontmatter.tags} />
            <time>
              {"📅 "}
              {post.frontmatter.date}
            </time>
          </PostInfo>
        </ArticleHeader>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
      </ArticleContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 180)
      frontmatter {
        title
        date(formatString: "MMM DD, YYYY")
        tags
        thumbnail {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
