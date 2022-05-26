import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profile from "./assets/images/profile.jpg";
import "./styles/App.css";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;
const ProfileImage = styled.img`
  height: 200px;
  width: 200;
  border-radius: 95px;
  margin: 0px 30px 0px 0px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    margin-right: 0px;
  }
`;
const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 3.5em;
  color: white;
`;

const Paragraph = styled.p`
  font-size: 0.9em;
  text-align: left;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
`;

const LinkStyle = styled.a`
  font-size: 0.8em;
  font-weight: 500;
  color: #50343e;
  margin-right: 10px;
`;

const RouterLinkStyle = styled(Link)`
  font-size: 0.8em;
  font-weight: 500;
  color: #50343e;
  margin-right: 10px;
`;

const IntroParagraph = styled.div`
  position: flex;

  font-size: 1.5em;
  line-height: 2em;
  text-align: center;
  color: white;
  align-self: flex-end;
  align-self: center;

  @media (max-width: 400px) {
    margin-bottom: 20px;
    margin-right: 0px;
    font-size: 1em;
  }
`;

const Word = styled.div`
  justify-content: center;
  display: flex;
  padding: 10px;
`;

function Home() {
  return (
    <div>
      <div className="one">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <Title>
            🌟 Hey! I'm <span className="special-text">Diana Yue</span>
          </Title>
          <IntroParagraph>
            <Word>I love...</Word>
            <Word>
              👩‍🎨exerimenting with ways of creative visual storytelling
            </Word>
            <Word>🌍exploring technology through the arts + vice versa</Word>
            <Word>🌞learning new things + meeting new people</Word>
          </IntroParagraph>
          <div className="Image1" />
          <div className="Image2" />
        </div>
      </div>
      <div className="App-main">
        <Container>
          <ProfileImage src={profile} alt="Profile Picture" />
          <IntroContainer>
            <Paragraph>
              I'm a Beijinger from Cincinnati. Also a current student studying
              computer science and philsophy at Harvard College. In my spare
              time, love films 🎥, painting 🎨, and making new experiences🎉
            </Paragraph>
            <LinkContainer>
              <LinkStyle href="mailto:dianayue@college.harvard.edu">
                Email Me
              </LinkStyle>
              <LinkStyle href="https://github.com/DianaY-a11y?tab=repositories">
                Github Work
              </LinkStyle>
              <RouterLinkStyle to="/Art">Art...for fun</RouterLinkStyle>
            </LinkContainer>
          </IntroContainer>
        </Container>
      </div>
    </div>
  );
}

export default Home;
