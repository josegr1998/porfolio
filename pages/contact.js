import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <div className='page-container'>
        <h1>Contact me</h1>
        <div className='underline'></div>
        <p style={{ marginTop: "2rem" }}>
          Im currently looking for new oportunities, and a chance to learn from
          more experienced developers.
        </p>
        <p>
          Whether you have a question or just want to say hi, I’ll get back to
          you shortly!
        </p>
        <p>
          Feel free to talk to me on my social media or just click the button
          below:
        </p>
        <a href='mailto:jose.gr98@yahoo.com' className='hello'>
          Get In Touch
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  color: white;
  h1 {
    text-align: center;
    padding-top: 2rem;
    margin-bottom: 2rem;
  }
  p {
    width: 80vw;
    margin: 0 auto;

    font-size: 1.4rem;
    padding: 1rem;
    max-width: 40rem;
  }
  .hello {
    font-size: 2rem;
    color: white;
    border: 2px solid white;
    padding: 1rem;
    border-radius: 1rem;
    display: block;
    width: 20rem;
    text-align: center;
    margin: 4rem auto;
    cursor: pointer;
    transition: var(--transition);
  }
  .hello:hover {
    color: var(--primary-100);
    border: 2px solid var(--primary-100);
  }
`;

export default Contact;
