import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TagContainer = styled.div`
  text-align: center;
`

const Tag = styled(Link)`
  display: inline-block;
  padding: .5rem;
  border: 1px solid;
  border-radius: 4px;
  margin: .1rem .25rem;

  &:hover {
    border: 1px solid var(--link-color);
    background: var(--link-color);
    color: white;
  }
`

export default function PostTags(props) {
  const { tags } = props;
  return (
    <TagContainer>
      {tags &&
        tags.map(tag => (
          <Tag key={tag} to={`/tags/${_.kebabCase(tag)}`}>
            <span># </span>
            {tag}
          </Tag>
      ))}
    </TagContainer>
  );
}