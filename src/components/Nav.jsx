import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
 border-top: 4px solid #ffd644;
 background: #f7f7f7;

 @media only screen and (min-width: 865px) {
  background: none;
 }
`

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 865px) {
    padding: 0 2rem;
    padding-top: 3rem;
  }
`

const Title = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 1.1rem;
  margin: 1rem 0;

  &:hover {
    border-bottom: none;
  }

  span {
    padding-right: 1rem;
    font-size: 1.5rem;
  }
`

const NavRight = styled.div`
  display: inline-flex;

  a {
  padding: .9rem 1rem;
  color: #5f777d;

  &:hover,
  &:active {
    background: #eee;
    border-bottom: none;
  }
  }
`

export default function Header() {
  return (
    <Nav>
      <NavBar>
        <Title to="/" title="Hakam - Full Stack Human">
          <span role="img" aria-label="apple">🍏</span>
          Hakam - Full Stack Human
        </Title>
        <NavRight>
          <Link to="/blog">Articles</Link>
          <Link to="/notes">Notes</Link>
          <Link to="/now">About</Link>
        </NavRight>
      </NavBar>
    </Nav>
  )
}