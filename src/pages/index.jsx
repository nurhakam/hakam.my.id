import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Lists from '../components/Lists'
import SEO from '../components/SEO'
import config from '../utils/config'
import hakam from '../../content/images/residentcat.jpg'

const Container = styled.div`
  padding: 0 1.5rem;

  @media only screen and (min-width: 600px) {
    max-width: 900px;
    margin: auto;
  }
`

const Lead = styled.section`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 2rem;

  @media only screen and (min-width: 600px) {
    justify-content: flex-start;
    flex-direction: row;
  }
`

const LeadText = styled.div`
  min-width: 300px;
  padding-top: 1rem;
  
  h1 {
    line-height: 1.1;
    margin: 0;
  }

  @media only screen and (min-width: 600px) {
    max-width: 700px;
  }
`

const LeadAvatar = styled.div`
  img {
    border-radius: 50%;
    max-width: 150px;
  }

  @media only screen and (min-width: 600px) {
    margin-left: auto;
    padding: 0 2rem;

    img {
      margin-left: auto;
      max-width: 200px;
    }
  }
`

const Note = styled.div`
  border-left: solid,
  }
`

export default function Index({ data }) {
  const latest = data.posts.edges // from the graphql query below
  const notes = data.notes.edges // from the graphql query below
  return (
    <Layout>
      <Helmet title={`${config.siteTitle} – Full Stack Human`} />
      <SEO />
      <Container>
        <Lead>
          <LeadText>
            <h1>Hey! My name is Syaiful Nur Hakam. I&#39;m a future chemist.</h1>
            <p>
              I currently attending vocational high school majoring analytical chemistry, and I&#39;ve been passionate about science (primarily chemistry) for over 4 years.
              As future chemist I don&#39;t have something to show off here, but as human I certainly have a lot...
            </p>
          </LeadText>
          <LeadAvatar>
            <img src={hakam} alt="Hakam" />
          </LeadAvatar>
        </Lead>
        <section>
          <h2>Today notes...</h2>
          {notes.map( note => {
            return (
              <div key={note.node.id}>
                <time className="date">{note.node.frontmatter.date}</time>
                <Note dangerouslySetInnerHTML={{ __html: note.node.html }} />
              </div>
            )
          })}
        </section>
        <section>
          <h2>What&#39;s in my brain...</h2>
          <Lists posts={latest} />
        </section>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    posts : allMarkdownRemark(
      limit: 10
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
    notes : allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "notes"} } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD/MM/YYYY")
          }
          html
        }
      }
    }
  }
`
