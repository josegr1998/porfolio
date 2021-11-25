import React from "react";
import styled from "styled-components";
import footerLinks from "../constants/footerLinks";

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-container'>
        <div className='links-container'>
          {footerLinks.map((link) => {
            return (
              <a href={link.src} target='_blank'>
                {link.icon}
              </a>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 4rem;
  background: var(--black-500);
  .footer-container {
    height: 100%;
  }
  .links-container {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    gap: 1rem;
    a {
      font-size: 1.7rem;
      color: White;
      cursor: pointer;
      transition: var(--transition);
    }
    a:hover {
      color: var(--primary-100);
    }
  }
`;
export default Footer;
