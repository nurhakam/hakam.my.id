import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Tag = styled(Link)`
  font-size: .9rem;
  padding: .1rem .5rem;
  border: 1px solid;
  border-radius: .3rem;
  margin: .1rem .25rem;

  &:hover {
    border: 1px solid var(--link-color);
    background: var(--link-color);
    color: white;
  }
`

export function slugify(string) {
  return (
    string &&
    string
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('-')
  )
}

export default function PostTags(props) {
  const { tags } = props;
  return (
    <TagContainer>
      {tags &&
        tags.map(tag => (
          <Tag
            key={tag}
            to={`/tags/${slugify(tag)}`}
          >
            {`#${tag}`}
          </Tag>
      ))}
    </TagContainer>
  );
}