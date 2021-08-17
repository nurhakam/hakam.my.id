import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  padding: 0 1.5rem;
  background: #f7f7f7;
  border-top: 4px solid #ffd644;
`;

const FooterItem = styled.a`
  display: inline-block;
  padding: 0.5rem 0.9rem;
  margin: 0.5rem 0;
  color: #4e595b;

  &:hover {
    background: #eee;
    color: #4e595b;
    border-bottom: none;
    border-radius: 0.5rem;
  }
`;

const CreditContainer = styled.div`
  p {
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterItem
          href="https://github.com/nurhakam"
          title="Check my GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </FooterItem>
        <FooterItem
          href="https://instagram.com/syaifulnurh"
          title="See my Instagram profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </FooterItem>
        <FooterItem
          href="https://linkedin.com/in/nurhakam"
          title="Hire me at Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </FooterItem>
      </div>
      <CreditContainer>
        <p>
          Design, code, and written with ❤ | © 2021{" "}
          <a href="/" title="Syaiful Nur Hakam">
            Hakam
          </a>
        </p>
      </CreditContainer>
    </FooterContainer>
  );
}
