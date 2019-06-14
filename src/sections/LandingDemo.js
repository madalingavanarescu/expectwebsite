import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import expectLogoFull from '../components/Logo/PortfolioFull.svg';
import styled from 'styled-components';

const Logo = ({ url, logo, alt = '' }) => (
  <Box>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <RenponsiveLogo src={logo} alt={alt} />
    </a>
  </Box>
);

const RenponsiveLogo = styled.img`
  @media (min-width: 400px) {
  }
`;

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const LandingPageDemo = ({ children, location }) => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query Site2TitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
        }
      `}
      render={data => {
        const { name, socialLinks, roles } = data.contentfulAbout;

        return (
          <Fragment>
            <Flex justifyContent="center" alignItems="center">
              <Logo
                url="https://www.expect.marketing/"
                logo={'https://logo.clearbit.com/' + location.search.substr(1)}
                alt="Powered by expect"
              />
            </Flex>
            <Heading
              as="h2"
              color="primary"
              fontSize={[4, 5, 6]}
              mb={[3, 5]}
              textAlign="center"
            >
              <TextLoop>
                {'Salutare ' + location.search.substr(1) + '!'}
                {'Ce mai faci?'}
                {'Vrei un site nou?'}
              </TextLoop>
            </Heading>
            <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
            <SectionLink section="about">
              {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPageDemo;
