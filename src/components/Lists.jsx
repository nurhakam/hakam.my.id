import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
  padding: 1.5rem;
  margin: auto;
`

const PostsEach = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ffd644;

  a > h2 {
    font-size: 1.3rem;
    margin: 0;
  }

  a {
    
  }

  time {
    font-size: .9rem
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`

const ReadMore = styled(Link)`
  display: inline-block;
  font-size: .9rem;
  padding: .5rem;
  border: 1px solid;
  border-radius: .3rem;
  margin: 1rem 0;

  &:hover {
    border: 1px solid var(--link-color);
    background: var(--link-color);
    color: white;
  }
`

export default function PostListing({ posts }) {
  return (
    <Container>
      {posts.map(post => {
        return (
          <PostsEach key={post.node.id}>
            <time>{post.node.frontmatter.date}</time>
            <Link to={post.node.fields.slug}>
              <h2>{post.node.frontmatter.title}</h2>
            </Link>
            <p>{post.node.excerpt}</p>
            <ReadMore to={post.node.fields.slug}>
              Read More
            </ReadMore>
          </PostsEach>
        )
      })}
    </Container>
  )
}