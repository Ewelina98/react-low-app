import React, { useState, useEffect } from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header, { NavLinks, PrimaryLink, NavLink } from "components/headers/light.js";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import { VerticalTabs } from "components/materialUI/VerticalTab/VerticalTabs";
import { fetchData } from "services/fetshData";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;

export default function KnowledgePage() {
  const links = [
    <NavLinks key={1}>
      <NavLink to="/#">Przygotuj przetarg</NavLink>
      <NavLink to="/#">Baza wiedzy</NavLink>
      <NavLink to="/#">Kontakt</NavLink>
      <NavLink to="/#" tw="lg:ml-12!">
        Logowanie
      </NavLink>
      <PrimaryLink to="/register">
        Rejestracja
      </PrimaryLink>
    </NavLinks>
  ];

  const [articlesCardPresentable, setArticlesCardPresentable] = useState(null); 
  

  useEffect(() => {
      fetchData()
        .subscribe((presentables) => setArticlesCardPresentable(presentables));
  }, [fetchData]);


    return (
        <AnimationRevealPage>
            <Header links={links}/>
            <ContentWithPaddingXl>
                <HeadingRow style={{marginBottom: "50px"}}>
                    <Heading>Baza Wiedzy</Heading>
                </HeadingRow>
                <Container>
                  <VerticalTabs articlesCard={articlesCardPresentable} />
                </Container>
            </ContentWithPaddingXl>
        </AnimationRevealPage>
    )
}