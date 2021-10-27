import profile from './assets/images/profile.jpg';
import './styles/App.css';
import styled from 'styled-components'

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
  height: 150px;
  width: 150px;
  border-radius: 75px;
  margin: 0px 50px 0px 0px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.h1`
  margin: 0px;
  font-size: 1em;
`

const Paragraph = styled.p`
  font-size: 0.6em;
  text-align: left;
  margin: 5px 0px;
`

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
`

const Link = styled.a`
  font-size: 0.6em;
  font-weight: 500;
  color: #a29bfe;
  margin-right: 10px;
`

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <Container >
          <ProfileImage src={profile} alt="Profile Picture"/>
          <IntroContainer>
            <Title>🌟 Hey! I'm <span className="special-text">Diana Yue</span></Title>
            <Paragraph>I'm a Beijinger from Cincinnati, Ohio. Also a current student (potentially) studying philsophy with a secondary in CS at Harvard College. I'm obsessed with all films 🎥 and painting 🎨</Paragraph>
            <LinkContainer>
              <Link href="mailto:dianayue@college.harvard.edu">Email Me</Link>
              <Link href="https://github.com/dianayue225/diana-website">Github</Link>
            </LinkContainer>
          </IntroContainer>
        </Container>
        </div>
    </div>
  ); 
}

export default App;
