import React, { useState, useEffect } from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Header from "components/headers/light.js";
import tw from "twin.macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings";
import { VerticalTabs } from "components/materialUI/VerticalTab/VerticalTabs";
import { fetchData } from "services/fetshData";
import { fetchDefinitions } from "services/fetchDefinitions";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;

export function KnowledgePage() {
    const [dPage, setDPage] = useState(1);

  const [articlesCardPresentable, setArticlesCardPresentable] = useState(null); 
  const [definitionsPresentable, setDefinitionPresentable] = useState(null);

  useEffect(() => {
        fetchData()
          .subscribe(
            (presentables) => {
              setArticlesCardPresentable(presentables);
            }
          );
  }, [fetchData]);

  useEffect(() => {
    fetchDefinitions(dPage)
      .subscribe(
        (presentables) => {
          setDefinitionPresentable(presentables);
        }
      );
  }, [fetchDefinitions, dPage])


    return (
        <AnimationRevealPage>
            <Header />
            <ContentWithPaddingXl>
                <HeadingRow style={{marginBottom: "50px"}}>
                    <Heading>{'Baza Wiedzy'}</Heading>
                </HeadingRow>
                <Container>
                  <VerticalTabs 
                      dPage={dPage}
                      setDPage={page => setDPage(page)}
                      definitionsList={definitionsPresentable} 
                      articlesCard={articlesCardPresentable} 
                  />
                </Container>
            </ContentWithPaddingXl>
        </AnimationRevealPage>
    )
}
