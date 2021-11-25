import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Work = () => {
  return (
    <Wrapper>
      <div className='page-container'>
        <h1>Some Of My Work</h1>
        <div className='underline'></div>
        <div className='projects-container'>
          <SingleArticle>
            <a
              className='single-project'
              href='https://ecomerce-portfolio.netlify.app/'
              target='_blank'
            >
              <div className='img-container'>
                <Image
                  src='/assets/the-ecomerce.png'
                  objectFit='cover'
                  layout='fill'
                />
              </div>
              <p className='desc'>
                E-coemrce project made with React and Context API. Also includes
                strapi as a payment processor and authentication with auth0
              </p>
            </a>
          </SingleArticle>
          <SingleArticle moveLeft>
            <a
              className='single-project'
              href='https://my-app-portfolio.netlify.app/'
              target='_blank'
            >
              <div className='img-container'>
                <Image
                  src='/assets/ecomerce.png'
                  objectFit='cover'
                  layout='fill'
                />
              </div>
              <p className='desc'>
                Small social media App with MERN stack and custom made
                authentication. Users can registaer and login, as well as
                create, edit and delete their own posts. They can aslo like
                other's people content
              </p>
            </a>
          </SingleArticle>
          <SingleArticle>
            <a
              className='single-project'
              href='https://crypto-app-portfolio.netlify.app/'
              target='_blank'
            >
              <div className='img-container'>
                <Image
                  src='/assets/cryptocurrency.png'
                  objectFit='cover'
                  layout='fill'
                />
              </div>
              <p className='desc'>
                Cryptocurrency App made with React. You can see lots of info
                about 90+ cryptocurrencies. It also provides news about any
                crypto you can think of and data about 90+ exchanges
              </p>
            </a>
          </SingleArticle>
        </div>
      </div>
    </Wrapper>
  );
};

const SingleArticle = styled.div`
  .single-project {
    min-width: 20rem;
    width: 80vw;
    max-width: 40rem;
    margin: 2rem auto;
    position: relative;
    display: block;
    cursor: pointer;
  }
  .img-container {
    width: 80vw;
    max-width: 30rem;
    height: 20rem;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    opacity: 0.5;
    transition: var(--transition);
  }
  .single-project:hover {
    .img-container {
      opacity: 1;
    }
  }

  .desc {
    background: var(--black-400);
    /* position: absolute; */
    /* bottom: -60%; */
    font-size: 1.2rem;
    padding: 1rem;
    width: 80vw;
    max-width: 30rem;
    margin: 0 auto;
    transform: translateY(-50%);
    border-radius: 1rem;
    color: var(--primary-300);
  }
  @media screen and (min-width: 1250px) {
    .desc {
      background: var(--black-400);
      position: absolute;
      top: 50%;
      left: ${(props) => (props.moveLeft ? "-45%" : "70%")};
      bottom: 0;
      font-size: 1.2rem;
      padding: 1rem;
      width: 30rem;
      transform: translateY(-50%);
      border-radius: 1rem;
      color: var(--primary-300);
    }
  }
`;

const Wrapper = styled.section`
  color: white;
  h1 {
    padding-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .page-container {
    height: auto; //if the page is bigger than 100vh always remember
    padding-bottom: 2rem;
  }
`;

export default Work;
