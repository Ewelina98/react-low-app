import React, { useState } from "react";
import { Tabs, Tab, CircularProgress } from "@material-ui/core";
import { Panel } from "./Panel";
import { a11y, useVerticalTabsStyles } from "./VerticalTabsStyles";
import { ArticlesCard } from "../Articles/ArticlesCard";
import { ButtonsGroup } from "../Buttons/ButtonsGroup";
import { DefinitionsList } from "../Dictionary/DefinitionsList";
import { ArticlesGrid } from "../Articles/ArticlesGrid";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-500`;

export const VerticalTabs = (props) => {
  const { articlesCard, definitionsList, dPage, setDPage } = props;

  const classes = useVerticalTabsStyles();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleChange = (_event, index) => {
    setSelectedTabIndex(index);
  };

  const handleButtonClick = (index) => {
    console.log("Downloading... is clicked: " + index);
  };

  const showArticlesCards = () => {
    return articlesCard?.map((aCard, index) => {
      const isFirst = index === 0;
      const isLast = index === articlesCard.length - 1;

      return (
        <div style={{
          paddingTop: isFirst ? '0' : '15',
          paddingBottom: isLast ? '0' : '15',
         
        }} >
          <ArticlesCard key={index} articlesCard={aCard} />
        </div>
      )
    });
  };

  const getPanelContent = (index, panelContent) => {
    switch (index) {
      case 0:
        // TODO: Move to here the articles fetch call
        return articlesCard ? (
          showArticlesCards()
        ) : (
          <CircularProgress color="secondary" />
        );
      case 1:
        return (
          <ButtonsGroup
            titles={["Ustawa w pigulce", "Schemat przetargu"]}
            onClick={handleButtonClick}
          />
        );
      case 6:
        // TODO: Move to here the definitions fetch call
        return (
          <DefinitionsList
            page={dPage}
            setPage={setDPage}
            definitions={definitionsList}
          />
        );
      default:
        return panelContent;
    }
  };

  return (
    <div className={classes.root}>
      <ArticlesGrid
        renderList={() => (
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedTabIndex}
            onChange={handleChange}
            aria-label={"Vertical tabs"}
            className={classes.tabs}
          >
            {tabsLables.map((label, index) => (
              <Tab key={label + index} label={label} {...a11y(index)} />
            ))}
          </Tabs>
        )}
        renderContent={() =>
          panlesContent.map((panelContent, index) => (
            <Panel key={index} selectedIndex={selectedTabIndex} index={index}>
              <HeadingRow style={{marginBottom: 10}}>
                <Heading>{tabsLables[index]}</Heading>
              </HeadingRow>
              {getPanelContent(index, panelContent)}
            </Panel>
          ))
        }
      />
    </div>
  );
};

const tabsLables = [
  "Ustawa PZP",
  "Dyrektywy unijne",
  "Rozporządzenia",
  "Wzory dokumentów",
  "Progi w przetargach",
  "Ustawa w pigułce/ schemat przetargu ",
  "Slownik pojeć",
  "Zamówienia zrównoważone/ Klauzule społeczne",
  "Linki",
];

const panlesContent = [
  "-",
  "-",
  "TODO Rozporzadzenia - Content",
  "TODO Wzory dokumentow - Content",
  "TODO Progi w przetargach - Content",
  "TODO Ustawa w pigulce/ wzory - Content",
  "-",
  "TODO Linki - Content",
];
