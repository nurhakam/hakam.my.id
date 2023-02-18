import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SEO from "../components/SEO";

import "../base.css";
import config from "../utils/config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 2.5rem;
  margin: auto;
  text-align: center;

  h1 {
    letter-spacing: -0.06em;
    margin: auto;
  }
`;

const Logo = styled.div`
  display: inline-flex;
  align-self: center;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 4px solid #f7f7f7;
  overflow: hidden;
`;

const ListItem = styled.div`
  background-color: #f7ce3d;
  margin-bottom: 10px;
  border-radius: 10px;

  a {
    display: flex;
    color: white;
    padding: 16px 20px;
    justify-content: center;
    border: 4px solid;
    transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
      border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
      transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
      background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;

    &:hover {
      background-color: white;
      color: #4e595b;
      border: 4px solid #ffd644;
    }
  }
`;

const Title = styled.p`
  font-style: italic;
`;

const Footer = styled.p`
  margin-top: 20px;
`;

export default function Index() {
  const { bio } = config;
  const { bioExternal } = config;

  return (
    <>
      <Container>
        <Logo>
          <img src={`${config.profile}`} alt="Logo" />
        </Logo>
        <h1>Syaiful Nur Hakam</h1>
        <Title>Creative Writer</Title>
        <p>You can find me on the link below :</p>
        {bio.map((list) => (
          <ListItem key={list.title}>
            <Link to={`${list.link}`}>{list.title}</Link>
          </ListItem>
        ))}
        {bioExternal.map((list) => (
          <ListItem key={list.title}>
            <a
              href={`${list.link}`}
              title={list.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {list.title}
            </a>
          </ListItem>
        ))}
        <Footer>
          Design, code, and written with ❤ | © 2022{" "}
          <a href="/" title="Syaiful Nur Hakam">
            Hakam
          </a>
        </Footer>
      </Container>
    </>
  );
}

export const Head = () => 
  <SEO 
    customTitle="Linktree">
  </SEO>