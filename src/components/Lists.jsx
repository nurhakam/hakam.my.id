import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostsEach = styled.div`
  display: grid;
  grid-template-columns: min-content;
  padding: .5rem 0;
      
  h2 {
    grid-column: 3/-1;
    font-size: 1rem;
    margin: 0;
    padding-left: 1rem;
  }
`

export default function PostListing({ posts }) {
  return (
    <section className="posts-list">
      {posts.map(post => {
        return (
          <Link to={post.node.fields.slug} key={post.node.id}>
            <PostsEach>
              <time className="date">{post.node.frontmatter.date}</time>
              <h2>{post.node.frontmatter.title}</h2>
            </PostsEach>
          </Link>
        )
      })}
    </section>
  )
}