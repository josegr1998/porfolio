import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import links from "../constants/links";

const Nav = () => {
  const [activeBtn, setActiveBtn] = useState(0);

  return (
    <Wrapper>
      <div className='nav-container'>
        <div className='links-container'>
          {links.map((link, index) => {
            return (
              <Link href={link.url} key={index}>
                <span
                  className={`link ${activeBtn === index && "active"}`}
                  onClick={() => {
                    setActiveBtn(index);
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 4rem;
  background: var(--black-500);

  .nav-container {
    max-width: var(--max-width);
    margin: 0 auto;
    height: 100%;
  }
  .links-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 1rem;
  }
  .link {
    color: White;
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .link:hover {
    color: var(--primary-100);
  }
  .active {
    color: var(--primary-100);
  }
`;

export default Nav;
