import React from 'react';
import styled, { keyframes } from 'styled-components';
import backgroundProject from '../assets/backgroundproject.jpg';
import rocket from '../assets/rocket.png';
import TopBar from './TopBar';
import SideBar from './SideBar';

const float = keyframes`
  0%, 100% {
    transform: translate(-50%, 0) rotate(-5deg) scale(1);
    filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.9));
  }
  50% {
    transform: translate(-50%, -50px) rotate(5deg) scale(1.05);
    filter: drop-shadow(0 0 50px rgba(0, 255, 255, 1.2));
  }
`;

const ProjectContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(rgba(0, 10, 20, 0.8), rgba(0, 20, 40, 0.8)),
    url(${backgroundProject}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const ContentBox = styled.div`
  background: rgba(15, 23, 42, 0.9);
  padding: 2.5rem;
  border-radius: 16px;
  width: 90%;
  max-width: 850px;
  margin: 2rem 0;
  border: 1px solid #0ff;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
  position: relative;
  z-index: 2;
  text-align: center;

  h1 {
    color: #0ff;
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e0e0e0;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    h1 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    h1 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
`;

const Rocket = styled.img`
  position: fixed;
  left: 50%;
  bottom: 5%;
  width: 450px;
  height: 630px;
  object-fit: contain;
  transform: translateX(-50%);
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1;
  filter: drop-shadow(0 0 30px rgba(0, 255, 255, 0.9));

  @media (max-width: 768px) {
    width: 300px;
    height: 420px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 320px;
  }
`;

// Optional: Shrink TopBar and SideBar via CSS overrides
const StyledTopBar = styled(TopBar)`
  height: 50px;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 35px;
  }
`;

const StyledSideBar = styled(SideBar)`
  width: 60px;

  @media (max-width: 768px) {
    width: 45px;
  }

  @media (max-width: 480px) {
    width: 35px;
  }
`;

export default function Project() {
  return (
    <ProjectContainer>
      <StyledTopBar />
      <StyledSideBar />
      <ContentBox>
        <h1>My Projects</h1>
        <p>Here are some of my recent works in the field of technology and innovation.</p>
      </ContentBox>
      <Rocket src={rocket} alt="Floating Rocket" />
    </ProjectContainer>
  );
}
