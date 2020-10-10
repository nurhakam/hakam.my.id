import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Tag = styled(Link)`
  font-size: .85rem;
  padding: .1rem .5rem;
  border-radius: .5rem;
  margin-right: .3rem;
  background: #f2f2f2;
  color: #333;

  &:hover {
    background: #cecece;
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

export default function Tags(props) {
  const { tags } = props;
  return (
    <TagContainer>
      {tags &&
        tags.map(tag => (
          <Tag
            key={tag}
            to={`/tags/${slugify(tag)}`}
          >
            {`${tag}`}
          </Tag>
      ))}
    </TagContainer>
  );
}