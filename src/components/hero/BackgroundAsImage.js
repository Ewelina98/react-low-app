import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import HeroBackgroundImage from "../../images/herobg.jpg";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("${HeroBackgroundImage}");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      
      
      <NavLink to="#">
       Przygotuj przetarg
      </NavLink>

      <NavLink to="/knowledge">
        Baza wiedzy
      </NavLink>

      <NavLink to="#">
        Kontakt
      </NavLink>
    </NavLinks>,
    <NavLinks>
      <NavLink to="/#" tw="lg:ml-12!">
        Logowanie
      </NavLink>
      <PrimaryLink css={tw`rounded-full`} to="/#">Rejestracja</PrimaryLink>
    </NavLinks>
    
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Notification>Jedyna na rynku aplikacja do przygotowania przetargu publicznego.</Notification>
            <Heading>
              <span>Pracuj z najlepszymi fachowcami w zakresie</span>
              <br />
              <SlantedBackground>zamówień publicznych w Polsce!</SlantedBackground>
            </Heading>
          </LeftColumn>
          <RightColumn>
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
