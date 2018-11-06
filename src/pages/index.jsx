/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';

import 'typeface-cantata-one';
import 'typeface-open-sans';
import 'typeface-oswald';

import '../assets/css/krabby.css';




import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import { fonts } from '../../tailwind';
import triangle from '../images/triangle.svg';
import arrow from '../images/arrow.svg';
import avatar from '../images/avatar.png';
import dribbble from '../images/icon-dribbble.svg';
import instagram from '../images/icon-instagram.svg';
import linkedin from '../images/icon-linkedin.svg';
import '../styles/global';



const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-white mb-6 tracking-tight')};
  font-family: Oswald;
  font-size: 6rem;
`;

const Title = styled.h1`
  ${tw('mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-family: Oswald;
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-3xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-family: Open Sans;
`;

const HeroTextLink = styled.a`
  ${tw('text-2xl lg:text-3xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  font-family: Open Sans;
  display: inline-flex;
  &:after {
    content: '';
    width: 24px;
    height: 20px;
    background: url(${arrow});
    position: relative;
    background-size: 12px;
    background-repeat: no-repeat;
    left: 6px;
    top: 12px;
    margin-left: 8px;
  }
`;

const SocialIcons = styled.ul`
  display: inline;
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />

    <Parallax pages={5}>


      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="bubble" width={3} left="80%" top="30%" />
          <SVG icon="bubble" width={4} left="40%" top="40%" />
          <SVG icon="bubble" width={6} left="10%" top="10%" />
          <SVG icon="bubble" width={3} left="50%" top="70%" />
          <SVG icon="bubble" width={4} left="30%" top="20%" />
          <SVG icon="bubble" width={3} left="10%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="bubble" width={3} left="40%" top="60%" />
          <SVG icon="bubble" width={6} left="30%" top="70%" />
          <SVG icon="bubble" width={4} left="20%" top="80%" />
          <SVG icon="bubble" width={6} left="30%" top="90%" />
          <SVG icon="bubble" width={6} left="79%" top="40%" />
          <SVG icon="bubble" width={4} left="60%" top="60%" />
        </UpDownWide>
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            My name is Matt Trice.
          </BigTitle>
          <Subtitle>I am an Atlanta based UX, prototype, web designer, front end development, from start to finish to implementation full life cycle of the design.</Subtitle>
          <HeroTextLink>
            <a href="#" className={'text__link--yellow'}>Let's make something cool</a>
          </HeroTextLink>
          <ul className="social-list">
            <li className="social-links--white"><a href="https://dribbble.com/trice" title="Follow me on Dribbble">
              <img src={dribbble} alt="Dribbble" /></a>
            </li>
            <li className="social-links--white"><a href="https://www.linkedin.com/in/matt-trice-5053b325/" title="Serious as fuck">
              <img src={linkedin} alt="LINKED FUCKING IN" /></a>
            </li>
            <li className="social-links--white"><a href="https://www.instagram.com/trice.design/" title="Follow me on Instagram">
              <img src={instagram} alt="Instagram" /></a>
            </li>
          </ul>

        </Hero>
      </Content>


      <DividerMiddle
        speed={-0.2}
        offset={1}
        factor={2}
        className={'background-01'}
      />
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="bubble" width={3} left="80%" top="30%" />
          <SVG icon="bubble" width={4} left="40%" top="40%" />
          <SVG icon="bubble" width={6} left="10%" top="10%" />
          <SVG icon="bubble" width={3} left="50%" top="70%" />
          <SVG icon="bubble" width={4} left="30%" top="20%" />
          <SVG icon="bubble" width={3} left="10%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="bubble" width={3} left="40%" top="60%" />
          <SVG icon="bubble" width={6} left="30%" top="70%" />
          <SVG icon="bubble" width={4} left="20%" top="80%" />
          <SVG icon="bubble" width={6} left="30%" top="90%" />
          <SVG icon="bubble" width={6} left="79%" top="40%" />
          <SVG icon="bubble" width={4} left="60%" top="60%" />
        </UpDownWide>
      </Divider>


      <Content speed={0.4} offset={2}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              The old bill ey up duck a right corker ey up taking the mick challenge you to a duel black pudding gobsmacked.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            Pommy ipsum full English breakast not some sort of dosshouse air one's dirty linen teacakes, darling see a man about a dog lug hole pie-eyed, chin up brilliant any road, best be off shortbread. Nigh marmite blummin' cottage pie I could reet fancy a what a mug, superb dignified who brought loaf. The old bill ey up duck a right corker ey up taking the mick challenge you to a duel black pudding gobsmacked, in a pickle stop arsing around wibbly-wobbly timey-wimey stuff yorkshire pudding up at the crack of dawn. Getting on my wick blighty it's me peepers nosh man and his whippet a total jessie, jolly good proper whizz therewith, Geordie got a lot of brass black cab therewith.
          </AboutDesc>
        </Inner>
      </Content>


      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:matt@trice.design">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/trice">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/trice.design/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 trice.design{' '}
          <a href="https://github.com/LeKoArts/gatsby-starter-portfolio-cara">Github Repository</a>.
        </Footer>
      </Content>
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="bubble" width={3} left="80%" top="30%" />
          <SVG icon="bubble" width={4} left="40%" top="40%" />
          <SVG icon="bubble" width={6} left="10%" top="10%" />
          <SVG icon="bubble" width={3} left="50%" top="70%" />
          <SVG icon="bubble" width={4} left="30%" top="20%" />
          <SVG icon="bubble" width={3} left="10%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="bubble" width={3} left="40%" top="60%" />
          <SVG icon="bubble" width={6} left="30%" top="70%" />
          <SVG icon="bubble" width={4} left="20%" top="80%" />
          <SVG icon="bubble" width={6} left="30%" top="90%" />
          <SVG icon="bubble" width={6} left="79%" top="40%" />
          <SVG icon="bubble" width={4} left="60%" top="60%" />
        </UpDownWide>
      </Divider>


      <Divider speed={0.2} offset={4} className={'foreground--coral'}>
        <UpDown>
          <SVG icon="bubble" width={3} left="80%" top="30%" />
          <SVG icon="bubble" width={4} left="40%" top="40%" />
          <SVG icon="bubble" width={6} left="10%" top="10%" />
          <SVG icon="bubble" width={3} left="50%" top="70%" />
          <SVG icon="bubble" width={4} left="30%" top="20%" />
          <SVG icon="bubble" width={3} left="10%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="bubble" width={3} left="40%" top="60%" />
          <SVG icon="bubble" width={6} left="30%" top="70%" />
          <SVG icon="bubble" width={4} left="20%" top="80%" />
          <SVG icon="bubble" width={6} left="30%" top="90%" />
          <SVG icon="bubble" width={6} left="79%" top="40%" />
          <SVG icon="bubble" width={4} left="60%" top="60%" />
        </UpDownWide>
      </Divider>


    </Parallax>
  </React.Fragment>
);

export default Index;
