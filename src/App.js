import profile from './assets/images/profile.jpg';
import background from './assets/images/hello.png';
import './styles/App.css';
import styled from 'styled-components'
import {gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all"
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin)

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`

const MyStyle=styled.div`
  background-image: url(${background});
  background-color: black;
  height:100vh;
  width: 100vw;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
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
  font-size: 1.8em;
  margin: 3em 3em;
  text-align:left;
  align-items: left;
  justify-content: top;
  fontsize: calc(10px + 2vmin);
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

const revealUp=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 8rem;
`

gsap.to(".revealUp", {
  autoAlpha: 1,
  ease: "power1.in",
  ScrollTrigger: {
    trigger: ".revealUp",
    pin: true,
    scrub: true
  }
});

function App() {
  return (
    <div className="App">
      <div className="one">
      <MyStyle>
      <revealUp><Title>🌟 Hey! I'm <span className="special-text">What's up</span>🌟</Title>
      </revealUp>
      </MyStyle>
    </div>
      <div className="App-main">
        <Container>
        <revealUp>
          <ProfileImage src={profile} alt="Profile Picture"/>
          </revealUp>
          <IntroContainer>
          <revealUp>
            <Paragraph>I'm a Beijinger from Cincinnati. Also a current student studying computer science and philsophy at Harvard College. I'm obsessed with all films 🎥 and painting 🎨</Paragraph>
            </revealUp>
            <LinkContainer>
              <Link href="mailto:dianayue@college.harvard.edu">Email Me</Link>
              <Link href="https://github.com/DianaY-a11y?tab=repositories">Github Work</Link>
            </LinkContainer>
          </IntroContainer>
        </Container>
        </div>
    </div>
  ); 
}

export default App;