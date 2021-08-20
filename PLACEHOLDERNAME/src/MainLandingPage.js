import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, Content2Xl } from "components/misc/Layouts";
import tw from "twin.macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
//import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
import logo from "images/logo.svg";
import PSEAwareness from "images/PSE-Awareness.png";

/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
const PrimaryNavLink = tw(
  NavLink
)`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

const Column = tw.div`flex-1`;

const UpdateNotice = tw(Column)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)``;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div``;
const Image = tw.img`max-w-full rounded-t sm:rounded`;



export default ({
  features = null,
  primaryButtonUrl = "#landingPageDemos",
  primaryButtonText = "Explore Demos",
  secondaryButtonUrl = "#componentDemos",
  secondaryButtonText = "View Components",
  buttonRoundedCss = "",
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks,
  heading = "[PLACEHOLDER NAME] aims to provide a safe movie experience.",
  description = "[PLACEHOLDER NAME] is a website that allows users to search for a movie and see if it is safe for people who suffer from photosensitive epilepsy (PSE)"
}) => {
  /*
   * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
   * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
   */
  window.gtag("js", new Date());
  window.gtag("config", "UA-45799926-9");


  const noOfLandingPages = Object.keys(landingPages).length;
  const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

  features = features || [
    `${noOfLandingPages} Landing Page Demos`,
    `${noOfComponentBlocks} Components`,
    "Uses TailwindCSS",
    "Fully Responsive",
    "Fully Customizable"
  ];

  return (
    <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <img src={logo} alt="" />
              [PLACEHOLDER NAME]
            </LogoLink>
            <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
              <NavLink target="_blank" href="https://owaiskhan.me/post/free-tailwindcss-react-ui-kit">
                License & Usage
              </NavLink>
              <NavLink target="_blank" href="https://owaiskhan.me">
                Who Am I ?
              </NavLink>
              <NavLink target="_blank" href="https://twitter.com/owaiswiz">
                Twitter
              </NavLink>
              <NavLink target="_blank" href="mailto:owaiswiz@gmail.com">
                Hire Me!
              </NavLink>
              <div tw="md:hidden flex-100 h-0"></div>
              <PrimaryNavLink target="_blank" href="https://gum.co/QaruQ">
                Download Now
              </PrimaryNavLink>
            </div>
          </NavRow>
          <HeroRow>
            <UpdateNotice>
              <UpdateNoticeIcon />
             This Website is powered by Treact
            </UpdateNotice>
            <TextColumn>
              <Heading as="h1">[PLACEHOLDER NAME] aims to provide a safe movie experience.</Heading>
              <Description>{description}</Description>
              <FeatureList>
                  <Feature >
                    <FeatureIcon/>
                    <FeatureText>Search for movies that induce epilepsy</FeatureText>
                  </Feature>
                  <Feature >
                    <FeatureIcon/>
                    <FeatureText>Proper warnings to people susceptible to PSE</FeatureText>
                  </Feature>
                  <Feature >
                    <FeatureIcon/>
                    <FeatureText>Rating system that allows other users to vote Movies</FeatureText>
                  </Feature>
                  <Feature >
                    <FeatureIcon/>
                    <FeatureText>Add Comments to movies so others can flag</FeatureText>
                  </Feature>
                  
              </FeatureList>
              <Actions>
                <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
                <SecondaryButton href={secondaryButtonUrl}>{secondaryButtonText}</SecondaryButton>
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={PSEAwareness} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
        </Content2Xl>
      </Container>
    </AnimationRevealPage>
  );
};
