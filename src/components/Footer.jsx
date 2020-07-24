import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  color: black;
  padding: 0 1.5rem;
`

const FooterItem = styled.a`
  padding: 1rem;
  color: #5f777d;
      
  &:hover,
  &:active {
    border-bottom: none;
    background: #eee;
  }
`

const CreditContainer = styled.div`
  padding-top: 1rem;
  
  p {
    text-align: center;
  }
`

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
          title="See Instagram profile"
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
          Design & Code © 2020 Hakam. | Built with
          {" "}
          <a
            href="https://www.gatsbyjs.org"
            title="Hire me at Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          .
        </p>
      </CreditContainer>
    </FooterContainer>
  )
}