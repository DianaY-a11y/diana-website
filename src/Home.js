import React from 'react';
import styled from 'styled-components';
import profile from './assets/images/profile.jpg';
import './styles/App.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`
const ProfileImage = styled.img`
  height: 200px;
  width: 200;
  border-radius: 95px;
  margin: 0px 50px 0px 0px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0px;
  }
`
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h1`
  margin: -3em 0em 3em 6em;
  font-size: calc(30px + 2vmin);
  color: white;
  text-align:left;
  justify-content: top;
`
const IntroWords = styled.h1`
  font-size: calc(7px + 1.5vmin);
  color: white;
  text-align:center;
  margin: 1em -17em 0em 1em;
`
const Paragraph = styled.p`
  font-size: 0.9em;
  text-align: left;
  margin: 20px 0px;
`

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
`

const Link = styled.a`
  font-size: 0.8em;
  font-weight: 500;
  color: #50343E;
  margin-right: 10px;
  `

function home() {
  return (
    <div className="App">
      <div className="one">
        <Title>🌟 Hey! I'm <span className="special-text">Diana Yue</span></Title>
        <IntroWords>I love...</IntroWords>
        <IntroWords>👩‍🎨exerimenting with ways of creative visual storytelling</IntroWords>
        <IntroWords>🌍exploring technology through the arts + vice versa</IntroWords>
        <IntroWords>🌞learning new things + meeting new people</IntroWords>
    </div>
      <div className="App-main">
        <Container>
          <ProfileImage src={profile} alt="Profile Picture"/>
          <IntroContainer>
            <Paragraph>I'm a Beijinger from Cincinnati. Also a current student studying computer science and philsophy at Harvard College. In my spare time, love films 🎥, painting 🎨, and making new experiences🎉</Paragraph>
            <LinkContainer>
              <Link href="mailto:dianayue@college.harvard.edu">Email Me</Link>
              <Link href="https://github.com/DianaY-a11y?tab=repositories">Github Work</Link>
              <Link to="/Art">Art...for fun</Link>
            </LinkContainer>
          </IntroContainer>
        </Container>
        </div>
    </div>
  ); 
}

export default home;