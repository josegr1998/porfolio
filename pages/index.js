import Head from "next/head";
import styled from "styled-components";
import Nav from "../components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jose Raimondi</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Wrapper>
        <div className='page-container'>
          <div className='container'>
            <h1 className='title'>JOSE RAIMONDI</h1>
            <div className='underline'></div>
            <h2>Web developer</h2>
            <div className='img-container'>
              <Image
                alt='profile-img'
                src='/assets/me.jfif'
                layout='fill'
                objectFit='cover'
                placeholder='Loading...'
              />
            </div>
            <p>
              <span>from musician to developer</span>
              Wellcome to my Portfolio, ever since i started learning to code,
              im allways hungry for more learning, please feel free to explore
              my three best projects and also get to know a little about me!
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  color: white;

  .container {
    display: grid;
    place-content: center;
    padding: 1rem;
  }
  .title {
    margin-top: 2rem;
    margin-bottom: 2rem;
    letter-spacing: 0.25rem;
    word-spacing: 1rem;
    text-align: center;
  }
  h2 {
    text-align: center;
    margin-top: 2rem;
    color: white;
  }
  .img-container {
    position: relative;
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    margin: 2rem auto;
    background: var(--primary-500);
    opacity: 0.7;
    overflow: hidden;
  }
  p {
    max-width: 40rem;
    font-size: 1.4rem;
  }
  span {
    font-size: 1.7rem;
    display: block;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;
