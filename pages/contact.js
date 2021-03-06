import React from "react";
import styled from "styled-components";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Jose Raimondi/Contact</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Wrapper>
        <div className='page-container'>
          <h1>Contact me</h1>
          <div className='underline'></div>
          <div className='desc'>
            <p style={{ marginTop: "2rem" }}>
              Im currently looking for new oportunities, and a chance to learn
              from more experienced developers.
            </p>
            <p>
              Whether you have a question or just want to say hi, I’ll get back
              to you shortly!
            </p>
            <p>
              Feel free to talk to me on my social media or just click the
              button below:
            </p>
          </div>

          <a
            href='mailto:jose.raimondi98@gmail.com'
            className='hello'
            rel='noopener noreferrer'
          >
            Get In Touch
          </a>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  color: white;
  .page-container {
    padding-bottom: 1rem;
  }
  h1 {
    text-align: center;
    padding-top: 2rem;
    margin-bottom: 2rem;
  }
  .desc {
    background: var(--black-400);
    max-width: 40rem;
    margin: 0 auto;
    border-radius: 1rem;
    color: var(--primary-100);
    width: 80vw;
  }
  p {
    margin: 0 auto;
    font-size: 1.4rem;
    max-width: 40rem;
    padding: 1rem;
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
