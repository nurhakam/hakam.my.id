import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  border-top: 4px solid #ffd644;
  background: #f7f7f7;

  @media only screen and (min-width: 865px) {
    background: none;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;

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
`;

const Title = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 1.1rem;
  letter-spacing: -0.5px;
  margin: 0.5rem 0;

  &:hover {
    border-bottom: none;
  }

  span.logo {
    padding-right: 1rem;
  }

  @media only screen and (min-width: 600px) {
    letter-spacing: -1.2px;
  }
`;

const NavRight = styled.div`
  display: inline-flex;
  margin: 0.5rem 0;

  a {
    padding: 0.5rem 0.9rem;
    color: #4e595b;
    margin-right: 0.5rem;

    &:hover,
    &.active {
      background: #eee;
      border-bottom: none;
      border-radius: 0.5rem;
    }
  }

  @media only screen and (min-width: 600px) {
    margin-left: 0;
  }
`;

export default function Header() {
  return (
    <Nav>
      <NavBar>
        <Title to="/" title="&copy; Syaiful Nur Hakam">
          <span className="logo" role="img" aria-label="apple">
            🍏
          </span>
          <span className="title">Hakam - Full Stack Human</span>
        </Title>
        <NavRight>
          <Link to="/blog" activeClassName="active">
            Articles
          </Link>
          <Link to="/now" activeClassName="active">
            What&apos;s up?
          </Link>
        </NavRight>
      </NavBar>
    </Nav>
  );
}
