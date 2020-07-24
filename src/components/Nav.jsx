import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavBar = styled.nav`
  background: #fff;
  border-top: 3px #ffd644 solid;
  height: 50px;

  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: center;
    background: #f7f7f7;
    padding: 0 1rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 2rem;
  }
`

const NavLeft = styled.div`
  padding: .5rem;

  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`

const NavRight = styled.div`
  display: none;

  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: center;
    margin-left: auto;
    height: 100%;
  }
`

const Title = styled(Link)`
  color: #2c3242;
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: none;
  padding-left: .5rem;

  &:hover {
    border-bottom: none;
  }

  .emoji {
    margin: 0 .5rem 0 .1rem;
  }

  @media only screen and (min-width: 600px) {
    padding-left: 0;
  }
`

const Description = styled.span`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    margin-left: 1rem;
    font-size: 0.9rem;
  }
`

const NavItem = styled(Link)`
  @media only screen and (min-width: 600px) {
    display: block;
    padding: .9rem 1rem;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: .075rem;
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
    <NavBar>
      <NavLeft>
        <Title to="/">
          <span role="img" aria-label="apple" className="emoji">🍏</span>
          Nur Hakam.
        </Title>
        <Description>Full Stack Human</Description>
      </NavLeft>
      <NavRight>
        <NavItem to="/blog">Articles</NavItem>
        <NavItem to="/notes">Notes</NavItem>
        <NavItem to="/now">Now</NavItem>
      </NavRight>
    </NavBar>
  )
}