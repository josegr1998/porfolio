import React from "react";
import styled from "styled-components";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import {
  SiNextdotjs,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { DiGithubAlt, DiMongodb } from "react-icons/di";

const About = () => {
  return (
    <Wrapper>
      <div className='page-container'>
        <h2>About Me</h2>
        <div className='underline'></div>
        <p>
          Hello!, my name is Jose Raimondi, i love playing music and creating
          content. Something that web development shares with music, is
          creativity. <br />
          Since my journey started, i have never stop learning and every day i
          learn something new i cant help but feel extremely excited.
        </p>
        <p>Here are the main technologies i have been working with</p>
        <div className='icons-container'>
          <h4>
            <FaReact className='icon' />
            <span>React.js</span>
          </h4>
          <h4>
            <SiNextdotjs className='icon' />
            <span>Next.js</span>
          </h4>
          <h4>
            <SiNodedotjs className='icon' />
            <span>Node.js</span>
          </h4>
          <h4>
            <SiExpress className='icon' />
            <span>Express.js</span>
          </h4>
          <h4>
            <DiMongodb className='icon' />

            <span>Mongo DB</span>
          </h4>
          <h4>
            <SiStyledcomponents className='icon' />
            <span>Styled Components</span>
          </h4>
          <h4>
            <FaCss3Alt className='icon' />
            <span>Css</span>
          </h4>
          <h4>
            <DiJavascript1 className='icon' />
            <span>Javascript</span>
          </h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: white;

  h2 {
    padding-top: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    padding: 1rem;
    max-width: 40rem;
    font-size: 1.4rem;
    margin: 0 auto;
    padding-bottom: 2rem;
  }
  .icons-container {
    max-width: 60rem;
    margin: 0 auto;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    h4 {
      width: 200px;
      margin: 0 auto;
      margin-bottom: 1rem;
      font-size: 1.7rem;
      text-align: center;
    }
    .icon {
      font-size: 2rem;
      color: var(--primary-100);
      display: block;
      margin: 0 auto;
    }
    @media screen and (min-width: 768px) {
      .icons-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      h4 {
        display: grid;
        grid-template-columns: 50px 250px;
        width: auto;
      }
    }
  }
`;

export default About;