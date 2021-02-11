import React, { useState } from "react";
import { Tabs, Tab, CircularProgress, Divider } from "@material-ui/core";
import { Panel } from "./Panel";
import { a11y, useVerticalTabsStyles } from "./VerticalTabsStyles";
import { ArticlesCard } from "../Articles/ArticlesCard";
import { DefinitionsList } from "../Dictionary/DefinitionsList";
import { ArticlesGrid } from "../Articles/ArticlesGrid";
import { LinksList } from "../LinksList/LinksList";
import { LinksWithSectionsList } from "../LinksList/LinksWithSectionsList";
import { CustomTable } from "../Tables/CustomTable";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import { colors } from '../Colors';

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-500`;

export const VerticalTabs = (props) => {
  const { articlesCard } = props;

  const classes = useVerticalTabsStyles();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleChange = (_event, index) => {
    setSelectedTabIndex(index);
  };

  const showArticlesCards = () => {
    if (!articlesCard) {
      return <CircularProgress color="secondary" />;
    }

    return articlesCard?.map((aCard, index) => {
      const isFirst = index === 0;
      const isLast = index === articlesCard.length - 1;

      return (
        <div style={{
          paddingTop: isFirst ? '0' : '15',
          paddingBottom: isLast ? '0' : '15',
        }}>
          <ArticlesCard key={index} articlesCard={aCard} />
        </div>
      )
    });
  };

  const getPanelContent = (index, panelContent) => {
    switch (index) {
      case 0:
        return showArticlesCards();
      case 1:
        return <LinksList links={directives} iconType={'open'} />;
      case 2:
        return <LinksList links={ROZPORZADZENIAButtons} iconType={'download'} />;
      case 3:
        return <LinksList links={wzoryButtons} iconType={'download'} />
      case 4:
        return (
          <div>
            <CustomTable table={ZAMÓWIENIA_PONIŻEJ_PROGÓW_UNIJNYCH} />
            <Divider />
            <CustomTable table={ZAMÓWIENIA_POWYŻEJ_PROGÓW_UNIJNYCH} />
          </div>
        )
      case 6:
        return <DefinitionsList />;
      case 8:
        return <LinksWithSectionsList linksWithSections={links} />;
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
  "-",
  "TODO Wzory dokumentow - Content",
  "-",
  "TODO Ustawa w pigulce/ wzory - Content",
  "-",
  '',
  "TODO Linki - Content",
];

const directives = [
  {
    link: 'https://eur-lex.europa.eu/legal-content/PL/TXT/PDF/?uri=CELEX:32014L0024&from=PL',
    title: 'Dyrektywa klasyczna  - 2014/24/UE',
  },
  {
    link: 'https://eur-lex.europa.eu/legal-content/PL/TXT/PDF/?uri=CELEX:32014L0025&from=pl',
    title: 'Dyrektywa sektorowa  - 2014/25/UE',
  },
  {
    link: 'https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CONSLEG:1989L0665:20080109:pl:PDF',
    title: 'Dyrektywa -  89/665/EWG',
  },
  {
    link: 'https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CONSLEG:1992L0013:20080109:PL:PDF',
    title: 'Dyrektywa - 92/13/EWG',
  },
  {
    link: 'https://eur-lex.europa.eu/legal-content/PL/TXT/PDF/?uri=CELEX:32009L0081&from=en',
    title: 'Dyrektywa - 2009/81/WE',
  },
]


const links = [
  {
    title: 'Dyrektywy unijne',
    items: [
      {
        link:'https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CONSLEG:1989L0665:20080109:pl:PDF',
        title:'89/665/EWG',
        description:'Dyrektywa Rady 89/665/EWG z dnia 21 grudnia 1989 r. w sprawie koordynacji przepisów ustawowych, wykonawczych i admi-nistracyjnych odnoszących się do stosowania procedur odwoławczych w zakresie udzielania zamówień publicznych na dostawy i roboty budowlane (Dz. (Dz.U. L 395 z 30.12.1989, str. 33)',
      },
      {
        link:'https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=CONSLEG:1992L0013:20080109:PL:PDF',
        title:'92/13/EWG',
        description:'Dyrektywa Rady 92/13/EWG z dnia 25 lutego 1992 r. koordynującą przepisy ustawowe, wykonawcze i administracyjne odno-szące się do stosowania przepisów wspólnotowych w procedurach zamówień publicznych podmiotów działających w sektorach gospodarki wodnej, energetyki, transportu i telekomunikacji (Dz. Urz. WE L 76 z 23.03.1992, str. 14, z późn. zm.; Dz. Urz. UE Polskie wydanie specjalne, rozdz. 6, t. 1, str. 315).  ',
      },
      {
        link:'https://eur-lex.europa.eu/legal-content/PL/TXT/PDF/?uri=CELEX:32009L0081&from=en',
        title:'89/2009/81/WE/EWG',
        description:'Dyrektywa Parlamentu Europejskiego i Rady 2009/81/WE z dnia 13 lipca 2009 r. w sprawie koordynacji procedur udzielania niektórych zamówień na roboty budowlane, dostawy i usługi przez instytucje lub podmioty zamawiające w dziedzinach obron-ności i bezpieczeństwa i zmieniającą dyrektywy 2004/17/WE i 2004/18/WE (Dz. Urz. UE L 216 z 20.08.2009, str. 76, z późn. zm.); ',
      },
      {
        link:'https://eur-lex.europa.eu/legal-content/PL/TXT/PDF/?uri=CELEX:32014L0024&from=PL',
        title:'2014/24/UE - dyrektywa klasyczna',
        description:'Dyrektywa Parlamentu Europejskiego i Rady 2014/24/UE z dnia 26 lutego 2014 r. w sprawie zamówień publicznych, uchylającą dyrektywę 2004/18/WE (Dz. Urz. UE L 94 z 28.03.2014, str. 65, z późn. zm.);',
      },
      {
        link:'https://eur-lex.europa.eu/legal-content/PL/TXT/PDF/?uri=CELEX:32014L0025&from=pl',
        title:'2014/25/UE - dyrektywa sektorowa',
        description:'Dyrektywa Parlamentu Europejskiego i Rady 2014/25/UE z dnia 26 lutego 2014 r. w sprawie udzielania zamówień przez podmioty działające w sektorach gospodarki wodnej, energetyki, transportu i usług pocztowych, uchylającą dyrektywę 2004/17/WE (Dz. Urz. UE L 94 z 28.03.2014, str. 243, z późn. zm.);',
      },
    ],

  },

  {
    title: 'Kodeksy',
    items: [
      {
        link:'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19640160093/U/D19640093Lj.pdf',
        title:'Kodeks cywilny',
        description:'ustawa z dnia 23 kwietnia 1964 r. - Kodeks cywilny (Dz. U. z 2019 r. poz. 1145 i 1495)',
      },
      {
        link:'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19640430296/U/D19640296Lj.pdf',
        title:'Kodeks postępowania cywilnego',
        description:'ustawa z dnia 17 listopada 1964 r. - Kodeks postępowania cywilnego (Dz. U. z 2019 r. poz. 1460, z późn. zm.16)). Zmiany tekstu jednolitego wymienionej ustawy zostały ogłoszone w Dz. U. z 2019 r. poz. 1469, 1495, 1649, 1655, 1798, 1802 i 1818.  ',
      },
      {
        link:'https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19970880553/U/D19970553Lj.pdf',
        title:'Kodeks karny',
        description:'ustawa z dnia 6 czerwca 1997 r. - Kodeks karny (Dz. U. z 2019 r. poz. 1950)',
      },
      {
        link:'https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19970900557/U/D19970557Lj.pdf',
        title:'Kodeks karny wykonawczy ',
        description:'ustawa z dnia 6 czerwca 1997 r. - Kodeks karny wykonawczy (Dz. U. z 2019 r. poz. 676, 679 i 1694)',
      },
      {
        link:'https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU19740240141/U/D19740141Lj.pdf',
        title:'Kodeks pracy ',
        description:'ustawa z dnia 26 czerwca 1974 r. - Kodeks pracy (Dz. U. z 2019 r. poz. 1040, 1043 i 1495)',
      },
      {
        link:'https://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20110210112/U/D20110112Lj.pdf',
        title:'Kodeks wyborczy ',
        description:'ustawa z dnia 5 stycznia 2011 r. - Kodeks wyborczy (Dz. U. z 2019 r. poz. 684 i 1504) ',
      },
    ],
  },

  {
    title: 'Ustawy',
    items: [
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O Bankowym Funduszu Gwarancyjnym',
        description: 'ustawa z dnia 10 czerwca 2016 r. o Bankowym Funduszu Gwarancyjnym, systemie gwarantowania depozytów oraz przymusowej restrukturyzacji (Dz. U. z 2019 r. poz. 795, 730, 1495, 1655 i 1798)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O dokumentach publicznych',
        description: 'ustawa z dnia 22 listopada 2018 r. o dokumentach publicznych (Dz. U. z 2019 r. poz. 53, 1091 i 1716)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O finansach publicznych  ',
        description: 'ustawa z dnia 27 sierpnia 2009 r. o finansach publicznych (Dz. U. z 2019 r. poz. 869, 1622 i 1649',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O giełdach towarowych',
        description: 'ustawa z dnia 26 października 2000 r. o giełdach towarowych (Dz. U. z 2019 r. poz. 312)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O informatyzacji działalności podmiotów realizujących zadania publiczne',
        description: 'ustawa z dnia 17 lutego 2005 r. o informatyzacji działalności podmiotów realizujących zadania publiczne (Dz. U. z 2019 r. poz. 700, 730, 848 i 1590)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O informowaniu o cenach towarów i usług ',
        description: 'ustawa z dnia 9 maja 2014 r. o informowaniu o cenach towarów i usług (Dz. U. z 2019 r. poz. 178)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O kontroli w administracji rządowej ',
        description: 'ustawa z dnia 15 lipca 2011 r. o kontroli w administracji rządowej (Dz. U. poz. 1092 oraz z 2019 r. poz. 730)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O krajowym systemie cyberbezpieczeństwa  ',
        description: 'ustawa z dnia 5 lipca 2018 r. o krajowym systemie cyberbezpieczeństwa (Dz. U. poz. 1560),',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O minimalnym wynagrodzeniu za pracę  ',
        description: 'ustawa z dnia 10 października 2002 r. o minimalnym wynagrodzeniu za pracę (Dz. U. z 2018 r. poz. 2177 oraz z 2019 r. poz. 1564)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O mniejszościach narodowych i etnicznych oraz o języku regionalnym ',
        description: 'ustawa z dnia 6 stycznia 2005 r. o mniejszościach narodowych i etnicznych oraz o języku regionalnym (Dz. U. z 2017 r. poz. 823)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O obrocie instrumentami finansowymi',
        description: 'ustawa z dnia 29 lipca 2005 r. o obrocie instrumentami finansowymi (Dz. U. z 2018 r. poz. 2286, z późn. zm. Zmiany tekstu jednolitego wymienionej ustawy zostały ogłoszone w Dz. U. z 2018 r. poz. 2243 i 2244 oraz z 2019 r. poz. 730, 875, 1655 i 1798.  ',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O ochronie informacji niejawnych',
        description: 'ustawa z dnia 5 sierpnia 2010 r. o ochronie informacji niejawnych (Dz. U. z 2019 r. poz. 742)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O ochronie zdrowia psychicznego  ',
        description: 'ustawa z dnia 19 sierpnia 1994 r. o ochronie zdrowia psychicznego (Dz. U. z 2018 r. poz. 1878 oraz z 2019 r. poz. 730 i 1690)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O ograniczeniu prowadzenia działalności gospodarczej przez osoby pełniące funkcje publiczne  ',
        description: 'ustawa z dnia 21 sierpnia 1997 r. o ograniczeniu prowadzenia działalności gospodarczej przez osoby pełniące funkcje publiczne (Dz. U. z 2017 r. poz. 1393 oraz z 2019 r. poz. 371 i 492).',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O partnerstwie publiczno-prywatnym  ',
        description: 'ustawa z dnia 19 grudnia 2008 r. o partnerstwie publiczno-prywatnym (Dz. U. z 2019 r. poz. 1445 i 1572)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O podatku od towarów i usług ',
        description: 'ustawa z dnia 11 marca 2004 r. o podatku od towarów i usług (Dz. U. z 2018 r. poz. 2174, z późn. zm.). Zmiany tekstu jednolitego wymienionej ustawy zostały ogłoszone w Dz. U. z 2018 r. poz. 2193, 2215, 2244, 2354, 2392 i 2433 oraz z 2019 r. poz. 675, 1018, 1495, 1520, 1751 i 1818.   ',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O pomocy społecznej ',
        description: 'ustawa z dnia 12 marca 2004 r. o pomocy społecznej (Dz. U. z 2019 r. poz. 1507, 1622, 1690 i 1818) ',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O pracowniczych planach kapitałowych ',
        description: 'ustawa z dnia 4 października 2018 r. o pracowniczych planach kapitałowych (Dz. U. poz. 2215 oraz z 2019 r. poz. 1074 i 1572)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O promocji zatrudnienia i instytucjach rynku pracy ',
        description: 'ustawa z dnia 20 kwietnia 2004 r. o promocji zatrudnienia i instytucjach rynku pracy (Dz. U. z 2019 r. poz. 1482, 1622 i 1818),',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O referendum ogólnokrajowym',
        description: 'ustawa z dnia 14 marca 2003 r. o referendum ogólnokrajowym (Dz. U. z 2019 r. poz. 1444 i 1504)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O rehabilitacji zawodowej i społecznej oraz zatrudnianiu osób niepełnosprawnych',
        description: 'ustawa z dnia 27 sierpnia 1997 r. o rehabilitacji zawodowej i społecznej oraz zatrudnianiu osób niepełnosprawnych (Dz. U. z 2019 r. poz. 1172, 1495, 1696 i 1818),',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O rewitalizacji ',
        description: 'ustawa z dnia 9 października 2015 r. o rewitalizacji (Dz. U. z 2018 r. poz. 1398 oraz z 2019 r. poz. 730 i 1696)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O skutkach powierzania wykonywania pracy cudzoziemcom przebywającym wbrew przepisom na terytorium Rzeczypospolitej Polskiej ',
        description: 'ustawa z dnia 15 czerwca 2012 r. o skutkach powierzania wykonywania pracy cudzoziemcom przebywającym wbrew przepisom na terytorium Rzeczypospolitej Polskiej (Dz. U. poz. 769)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O służbie zagranicznej ',
        description: 'ustawa z dnia 27 lipca 2001 r. o służbie zagranicznej (Dz. U. z 2018 r. poz. 2040 oraz z 2019 r. poz. 9)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O specjalnych strefach ekonomicznych',
        description: 'ustawa z dnia 20 października 1994 r. o specjalnych strefach ekonomicznych (Dz. U. z 2019 r. poz. 482)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O sporcie ',
        description: 'ustawa z dnia 25 czerwca 2010 r. o sporcie (Dz. U. z 2019 r. poz. 1468 i 1495)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O systemach oceny zgodności i nadzoru rynku ',
        description: 'ustawa z dnia 13 kwietnia 2016 r. o systemach oceny zgodności i nadzoru rynku (Dz. U. z 2019 r. poz. 544)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O systemie oświaty',
        description: 'ustawa z dnia 7 września 1991 r. o systemie oświaty (Dz. U. z 2019 r. poz. 1481 i 1818)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O świadczeniu przez prawników zagranicznych pomocy prawnej w Rzeczypospolitej Polskiej ',
        description: 'ustawa z dnia 5 lipca 2002 r. o świadczeniu przez prawników zagranicznych pomocy prawnej w Rzeczypospolitej Polskiej (Dz. U. z 2016 r. poz. 1874 oraz z 2019 r. poz. 730)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O świadczeniu usług drogą elektroniczną',
        description: 'ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (Dz. U. z 2019 r. poz. 123 i 730)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O udzielaniu cudzoziemcom ochrony na terytorium Rzeczypospolitej Polskiej ',
        description: 'ustawie z dnia 13 czerwca 2003 r. o udzielaniu cudzoziemcom ochrony na terytorium Rzeczypospolitej Polskiej (Dz. U. z 2019 r. poz. 1666),',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O umowie koncesji na roboty budowlane lub usługi',
        description: 'ustawa z dnia 21 października 2016 r. o umowie koncesji na roboty budowlane lub usługi (Dz. U. z 2019 r. poz. 1528 i 1655)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O utworzeniu Polskiej Agencji Rozwoju Przedsiębiorczości',
        description: 'ustawa z dnia 9 listopada 2000 r. o utworzeniu Polskiej Agencji Rozwoju Przedsiębiorczości (Dz. U. z 2019 r. poz. 310, 836 i 1572)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O wspieraniu rodziny i systemie pieczy zastępczej',
        description: 'ustawa z dnia 9 czerwca 2011 r. o wspieraniu rodziny i systemie pieczy zastępczej (Dz. U. z 2019 r. poz. 1111, 924 i 1818)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O wyrobach budowlanych',
        description: 'ustawa z dnia 16 kwietnia 2004 r. o wyrobach budowlanych (Dz. U. z 2019 r. poz. 266 i 730)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O zastawie rejestrowym i rejestrze zastawów',
        description: 'ustawa z dnia 6 grudnia 1996 r. o zastawie rejestrowym i rejestrze zastawów (Dz. U. z 2018 r. poz. 2017)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'O zatrudnieniu socjalnym',
        description: 'ustawa z dnia 13 czerwca 2003 r. o zatrudnieniu socjalnym (Dz. U. z 2019 r. poz. 217, 730 i 1818)',
      },
      
    ],
  },
  {
    title: 'Prawa',
    items: [
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'Prawo bankowe',
        description: 'ustawa z dnia 29 sierpnia 1997 r. - Prawo bankowe (Dz. U. z 2018 r. poz. 2187, z późn. zm.8)). Zmiany tekstu jednolitego wymienionej ustawy zostały ogłoszone w Dz. U. z 2018 r. poz. 2243 i 2354 oraz z 2019 r. poz. 326, 730, 875, 1074, 1358, 1495, 1501, 1520, 1622, 1649, 1667, 1696 i 1751.  ',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'Prawo budowlane',
        description: 'ustawa z dnia 7 lipca 1994 r. - Prawo budowlane (Dz. U. z 2019 r. poz. 1186, 1309, 1524, 1696, 1712 i 1815)',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'Prawo o ruchu drogowym',
        description: 'ustawa z dnia 20 czerwca 1997 r. - Prawo o ruchu drogowym (Dz. U. z 2018 r. poz. 1990, z późn. zm.9));. Zmiany tekstu jednolitego wymienionej ustawy zostały ogłoszone w Dz. U. z 2018 r. poz. 2244 i 2322 oraz z 2019 r. poz. 53, 60, 730, 752, 870, 1123, 1180, 1466, 1501, 1556, 1579 i 1818.  ',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'Prawo o szkolnictwie wyższym i nauce,',
        description: 'ustawa z dnia 20 lipca 2018 r. - Prawo o szkolnictwie wyższym i nauce (Dz. U. poz. 1668, z późn. zm.7)). Zmiany wymienionej ustawy zostały ogłoszone w Dz. U. z 2018 r. poz. 2024 i 2245 oraz z 2019 r. poz. 276, 447, 534, 577, 730, 823, 1655 i 1818.  ',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'Prawo pocztowe ',
        description: 'ustawy z dnia 23 listopada 2012 r. - Prawo pocztowe (Dz. U. z 2018 r. poz. 2188 oraz z 2019 r. poz. 1051, 1495 i 2005)',
      },
      
    ],
  },
  {
    title: 'Instytucje Europejskie',
    items: [
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'SIMAP - information system for public procurement',
        description: 'Strona prowadzona przez Urząd Oficjalnych Publikacji Wspólnot Europejskich, zwierająca informacje o europejskich zamówieniach publicznych',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'Suplement do Dziennika Urzędowego Unii Europejskiej',
        description: 'Dostęp do ogłoszeń o zamówieniach publicznych publikowanych w Unii Europejskiej, w Europejskim Obszarze Gospodarczym oraz w innych krajach. ',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'SIMAP - eNotices',
        description: 'eNotices – narzędzie online umożliwiające przygotowywanie ogłoszeń o zamówieniach publicznych i publikowanie ich w Suplemencie do Dziennika Urzędowego Unii Europejskiej. Zapewnia dostęp do wszystkich standardowych formularzy używanych w europejskich zamówieniach publicznych. ',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'SIMAP - eTendering',
        description: 'eTendering - platforma elektronicznych zamówień publicznych, oferująca dostęp do dokumentacji związanej z ogłoszeniami przetargowymi, m.in. do dokumentacji umownej, specyfikacji technicznych, załączników, pytań i odpowiedzi. eTendering stanowi bardzo użyteczne rozszerzenie serwisu TED.',
      },
      {
        link: 'http://isap.sejm.gov.pl/isap.nsf/download.xsp/WDU20160000996/U/D20160996Lj.pdf',
        title: 'SIMAP - eSenders',
        description: 'eSenders - informacje przeznaczone dla użytkowników posiadających status TED eSender i na ich temat. ',
      },

    ],
  },
  {
  title: 'Instytucje Polskie',
    items: [
      {
        link: 'https://www.uzp.gov.pl/',
        title: 'Urząd Zamówień publicznych',
      },
      {
        link: 'https://bzp.uzp.gov.pl/',
        title: 'Biuletyn Zamówień Publicznych',
      },
      {
        link: 'https://miniportal.uzp.gov.pl/',
        title: 'Miniportal UZP',
        description: 'Ogólnodostępne, bezpłatne narzędzie do zapewnienia elektronicznej komunikacji w postępowaniu o udzielenie zamówienia publicznego. Narzędzie stworzone dla Zamawiających posiadających skrzynki instytucji publicznej na ePUAP. Dedykowany jest Zamawiającym, którzy nie posiadają własnych narzędzi informatycznych do elektronicznej komunikacji w procesie zamówień publicznych. ',
      },
    ],
  },
];

const wzoryButtons = [
  {
    title: 'Ogłoszenie o zamówieniu - zał nr 1 do Rozporządzenia',
    pdfName: 'PDF 13',
  },
  {
    title: 'Ogłoszenie o zamiarze zawarcia umowy - zał nr 2 do Rozporządzenia',
    pdfName: 'PDF 14',
  },
  {
    title: 'Ogłoszenie o wyniku postępowania - zał nr 3 do Rozporządzenia',
    pdfName: 'PDF 15',
  },
  {
    title: 'Ogłoszenie o konkursie - zał nr 4 do Rozporządzenia',
    pdfName: 'PDF 16',
  },
  {
    title: 'Ogłoszenie o wynikach konkursu - zał nr 5 do Rozporządzenia',
    pdfName: 'PDF 17',
  },
  {
    title: 'Ogłoszenie o zmianie umowy - zał nr 6 do Rozporządzenia',
    pdfName: 'PDF 18',
  },
  {
    title: 'Ogłoszenie o wykonaniu umowy - zał nr 7 do Rozporządzenia',
    pdfName: 'PDF 19',
  },
  {
    title: 'Ogłoszenie o spełnianiu okoliczności, o których mowa w art. 214 ust 1 pkt 11-14 - zał nr 8 do Rozporządzenia',
    pdfName: 'PDF 20',
  },
  {
    title: 'Ogłoszenie o zmianie ogłoszenia - zał nr 9 do Rozporządzenia',
    pdfName: 'PDF 21',
  },
  {
    link:'https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32015R1986',
    title:'Ogłoszenia w Dzienniku Urzędowym Unii Europejskiej (DUUE)',
  },
  {
    title: 'Wstępne ogłoszenie ',
    pdfName: 'PDF 22',
  },
  {
    title: 'Ogłoszenie o zamówieniu ',
    pdfName: 'PDF 23',
  },
  {
    title: 'Ogłoszenie o udzieleniu zamówienia',
    pdfName: 'PDF 24',
  },
  {
    title: 'Okresowe ogłoszenie informacyjne - zamówienia sektorowe',
    pdfName: 'PDF 25',
  },
  {
    title: 'Ogłoszenie o zamówieniu - zamówienia sektorowe',
    pdfName: 'PDF 26',
  },
  {
    title: 'Ogłoszenie o udzieleniu zamówienia - zamówienia sektorowe',
    pdfName: 'PDF 27',
  },
  {
    title: 'System kwalifikowania - zamówienia sektorowe',
    pdfName: 'PDF 28',
  },
  {
    title: 'Ogłoszenie o profilu nabywcy',
    pdfName: 'PDF 29',
  },
  {
    title: 'Ogłoszenie o konkursie',
    pdfName: 'PDF 30',
  },
  {
    title: 'Ogłoszenie o wynikach konkursu',
    pdfName: 'PDF 31',
  },
  {
    title: 'Sprostowanie',
    pdfName: 'PDF 32',
  },
  {
    title: 'Ogłoszenie o dobrowolnej przejrzystości ex ante',
    pdfName: 'PDF 33',
  },
  {
    title: 'Wstępne ogłoszenie informacyjne dotyczące zamówień w dziedzinach obronności i bezpieczeństwa',
    pdfName: 'PDF 34',
  },
  {
    title: 'Ogłoszenie o zamówieniu w dziedzinach obronności i bezpieczeństwa',
    pdfName: 'PDF 35',
  },
  {
    title: 'Ogłoszenie o udzieleniu zamówienia w dziedzinach obronności i bezpieczeństwa',
    pdfName: 'PDF 36',
  },
  {
    title: 'Ogłoszenie o podwykonawstwie',
    pdfName: 'PDF 37',
  },
  {
    title: 'Ogłoszenie o podwykonawstwie',
    pdfName: 'PDF 37',
  },
  {
    title: 'Ogłoszenie o modyfikacjach',
    pdfName: 'PDF 38',
  },
  {
    title: 'Usługi społeczne i inne szczególne usługi - zamówienia publiczne',
    pdfName: 'PDF 39',
  },
  {
    title: 'Usługi społeczne i inne szczególne usługi - zamówienia sektorowe',
    pdfName: 'PDF 40',
  },
  {
    title: 'Usługi społeczne i inne szczególne usługi - koncesje',
    pdfName: 'PDF 41',
  },
  {
    title: 'Ogłoszenie o koncesji',
    pdfName: 'PDF 42',
  },
  {
    title: 'Ogłoszenie o udzieleniu koncesji',
    pdfName: 'PDF 43',
  },
  {
    title: 'Specyfikacja warunków zamówienia - opracowanie własne ',
    pdfName: 'PDF 44',
  },
  {
    title: 'Opis potrzeb i wymagań',
    pdfName: 'PDF 45',
  },
  {
    title: 'Oświadczenia',
    pdfName: 'PDF 46',
  },
  {
    title: 'Plan Postępowań',
    pdfName: 'PDF 47',
  },
];

const ROZPORZADZENIAButtons = [
{
  title:'Obwieszczenie Prezesa Uzp w sprawie aktualnych progów unijnych ',
  pdfNumber:'3',
},
{
  title:'Rozporządzenie w sprawie wzoru planu postępowań o udzielenie zamówień ',
  pdfNumber:'4',
},
{
  title:'Rozporządzenie  w sprawie sposobu sporządzania i przekazywania informacji oraz wymagań technicznych dla dokumentów elektronicznych oraz środków komunikacji elektronicznej ',
  pdfNumber:'5',
},
{
  title:'Rozporządzenie w sprawie protokołów postępowania oraz dokumentacji postępowania  ',
  pdfNumber:'6',
},
{
  title:'Rozporządzenie w sprawie informacji o złożonych wnioskach o dopuszczenie do udziału w postępowaniu lub ofertach przekazywanej Prezesowi Uzp',
  pdfNumber:'7',
},
{
  title:'Rozporządzenie w sprawie podmiotowych środków dowodowych oraz innych dokumentów lub oświadczeń, jakich może żądać zamawiający od wykonawcy ',
  pdfNumber:'8',
},
{
  title:'Rozporządzenie w sprawie ogłoszeń zamieszczanych w Biuletynie Zamówień Publicznych',
  pdfNumber:'9',
},
{
  title:'Rozporządzenie w sprawie szczegółowych rodzajów kosztów postępowania odwoławczego, ich rozliczania oraz wysokości i sposobu pobierania wpisu od odwołania ',
  pdfNumber:'10',
},
{
 title:'Rozporządzenie ws korekt finansowych',
 pdfNumber:'11',
}

];

const ZAMÓWIENIA_PONIŻEJ_PROGÓW_UNIJNYCH = {
  title: 'ZAMÓWIENIA PONIŻEJ PROGÓW UNIJNYCH',
  titles: {
    col1: 'JAKA INSTYTUCJA ZAMAWIA',
    col2: 'CO ZAMAWIA',
    col3: 'WARTOŚĆ ZAMÓWIENIA NETTO'
  },
  content: {
    col1: [
      {
      title:'Zamawiający z sektora finansów publicznych',
      color: colors.gray
      },
      {
      title:'Pozostali zamawiający publiczni - jednostki samorządu terytorialnego, uczelnie publiczne, państwowe instytucje kultury oraz pozostali zamawiający wymienieni w art 6',
      color: colors.gray
      },
      {
     title: 'Zamawiający sektorowi',
     color: colors.gray
      },
      {
      title:'Zamawiający subsydiowany',
      color: colors.gray
      },
      {
      title:'Zamawiający z dziedziny obronności (* będący zamawiającymi z sektora finansów publicznych)',
      color: colors.gray
      },
      {
      title:'Zamawiający z dziedziny obronności(* będący pozostałymi zamawiającymi z sektora finansów publicznych – art 6)',
      color: colors.gray
      },
      {
      title:'Wszyscy zamawiający publiczni z wyłączeniem zamówień sektorowych',
      color: colors.gray
      },
      {
      title:'Zamawiający sektorowi',
      color: colors.gray
      },
      {
      title:'Zamawiający sektorowi',
      color: colors.gray
      },
      {
      title:'Zamawiający z dziedziny obronności',
      color: colors.gray
      },
      {
      title:'Wszyscy zamawiający publiczni z wyłączeniem: zamawiających subsydiowanych, zamówień sektorowych oraz z dziedziny obronności',
      color: colors.gray
      }
    ],
    col2: [
      {
      title: 'dostawy i usługi klasyczne',
      color: colors.gray
      },
      {
     title: 'dostawy i usługi klasyczne',
      color: colors.gray
      },
      {
      title:'dostawy i usługi klasyczne',
      color: colors.gray
      },
      {
      title:'usługi klasyczne oraz usługi związane z robotami budowlanymi',
      color: colors.gray
      },
      {
      title:'dostawy klasyczne',
      color: colors.gray
      },
      {
      title:'dostawy i usługi klasyczne',
      color: colors.gray
      },
      {
      title:'usługi społeczne i inne szczególne usługi wymienione w zał. XIV do Dyrektywy 24',
      color: colors.green
      },
      {
      title:'sługi społeczne i inne szczególne usługi wymienione w zał. XVII do Dyrektywy 25',
      color: colors.green
      },
      {
      title:'dostawy i usługi – zamówienia sektorowe, o których mowa w art 5, ust 4',
      color: colors.blue
      },
      {
      title:'dostawy i usługi – z dziedziny obronności, o których mowa w art 7, ust 3',
      color: colors.lightGreen
      },
      {
      title:'roboty budowlane',
      color: colors.red
      }
    ],
    col3: [
     { 
       title:'od 130.000 zł do 593.433 zł',
       color: colors.lightBlue,
     },
      {
       title: 'od 130.000 zł do 913.630 zł',
       color: colors.lightBlue,
      },
      { 
        title: 'od 130.000 zł do 593.433 zł / 913.630 zł',
        color: colors.lightBlue,
      },
      {
       title: 'od 130.000 zł do 913.630 zł',
       color: colors.lightBlue,
      },
      { 
       title: 'zamówienie do 593.433 zł – nie stosujemy ustawy',
       color: colors.lightBlue,
      },
      {
        title: 'zamówienie do 913.630 zł – nie stosujemy ustawy',
        color: colors.lightBlue,
      },
      { 
        title: 'od 130.000 zł do 3.201.975 zł',
        color: colors.green
      },
      {
      title: 'zamówienie do 4.269.300 zł – nie stosujemy ustawy',
      color: colors.green
      },
      {
      title: 'zamówienie do 1.827.260 zł – nie stosujemy ustawy',
      color: colors.blue
      },
      {
     title: 'zamówienie do 1.827.260 zł – nie stosujemy ustawy',
     color: colors.lightGreen
      },
      {
      title: 'od 130.000 zł do 22.840.755 zł',
      color: colors.red
      },
    ],
  },
  footer: [
    {
    title: 'Zamówienia klasyczne art. 7 pkt 33',
    color: colors.lightBlue
    },
    {
    title:'Zamówienia na usługi społeczne i inne szczególne usługi wymienione w zał. do Dyrektywy XIVIV',
    color: colors.green
    },
    {
    title:'Zamówienia na roboty budowlane i usługi projektowania architektonicznego',
    color: colors.red
    },
    {
    title:'Zamówienia sektorowe art 5 ust 4',
    color: colors.blue
    },
    {    
    title:'Zamówienia z dziedziny obronności i bezpieczeństwa art 7 ust 3',
    color: colors.lightGreen
    },
    {    
      title:'Obwieszczenie ws progów',
      color: colors.gray
      },

  ],
};

const ZAMÓWIENIA_POWYŻEJ_PROGÓW_UNIJNYCH = {
  title: 'ZAMÓWIENIA POWYŻEJ PROGÓW UNIJNYCH',
  titles: {
    col1: 'JAKA INSTYTUCJA ZAMAWIA',
    col2: 'CO ZAMAWIA',
    col3: 'WARTOŚĆ ZAMÓWIENIA NETTO'
  },
  content: {
    col1: [
      {
        title: 'Zamawiający z sektora finansów publicznych',
        color: colors.gray
      },
      {
      title: 'Pozostali zamawiający publiczni - jednostki samorządu terytorialnego, uczelnie publiczne, państwowe instytucje kultury oraz pozostali zamawiający wymienieni w art 6',
      color: colors.gray
      },
      {
      title: 'Zamawiający subsydiowani',
      color: colors.gray
      },
      {
      title: 'Wszyscy zamawiający publiczni z wyłączeniem zamówień sektorowych',
      color: colors.gray
      },
      {
      title: 'Zamawiający sektorowi',
      color: colors.gray
      },
      {
      title: 'Zamawiający sektorowi',
      color: colors.gray
      },
      {
      title: 'Zamawiający z dziedziny obronności',
      color: colors.gray
      },
      {
      title: 'Wszyscy zamawiający publiczni ( z wyjątkiem zamówień sektorowych art 362)',
      color: colors.gray
      },
      {
     title:  'Wszyscy zamawiający, w tym zamawiający sektorowi, subsydiowani oraz z dziedziny obronności',
     color: colors.gray
      }
    

    ],
    col2: [
      {
       title: 'dostawy i usługi klasyczne',
       color: colors.gray
      },
      {
      title: 'dostawy i usługi klasyczne',
      color: colors.gray
      },
      {
      title: 'usługi klasyczne oraz usługi związane z robotami budowlanymi',
      color: colors.gray
      },
      {
      title: 'usługi społeczne i inne szczególne usługi wymienione w zał. XIV do Dyrektywy 24',
      color: colors.gray
      },
      {
      title: 'usługi społeczne i inne szczególne usługi wymienione w zał. XVII do Dyrektywy 25',
      color: colors.gray
      },
     {
        title: 'dostawy i usługi - zamówienia sektorowe, o których mowa w art 5, ust 4',
        color: colors.gray
     },
      {
       title: 'dostawy i usługi z dziedziny obronności, o których mowa w art. 7 pkt 36',
       color: colors.gray
      },
      {
        title: 'zamówienie na usługi projektowania architektonicznego lub projektowania architektoniczno-budowlanego - poprzedzone obowiązkowym konkursem (art. 325)',
        color: colors.gray
      },
      {
        title: 'roboty budowlane',
        color: colors.gray
      }
    ],
    col3: [
     { 
       title:'powyżej kwoty 593.433 zł',
       color: colors.lightGray
     },
     {
      title:'powyżej kwoty 913.630 zł',
      color: colors.lightGray
     },
     {
      title:'powyżej kwoty 913.630 zł',
      color: colors.lightGray
     },
      {
        title:'powyżej kwoty 3.201.975 zł',
        color: colors.green
      },
      {
       title: 'powyżej kwoty 4.269.300 zł',
       color:colors.green
      },
      {
        title:'powyżej kwoty 1.827.260 zł',
        color: colors.blue
      },
      {
        title:'powyżej kwoty 1.827.260 zł',
        color: colors.lightGreen
      },

      {
        title: 'powyżej kwoty 593.433 zł – zam. z sektora fin. publ. powyżej kwoty 913.630 zł – pozostali zam publ',
        color: colors.red
      },
      {
      title: 'powyżej kwoty 22.840.755 zł',
      color: colors.red
      }
    ],
  },
  footer: [
    {
      title: 'Zamówienia klasyczne art. 7 pkt 33',
      color: colors.lightBlue,
    },
    {
      title: 'Zamówienia na usługi społeczne i inne szczególne usługi wymienione w zał. do Dyrektywy 24',
      color: colors.green,
    },
    {
      title: 'Zamówienia na roboty budowlane i usługi projektowania architektonicznego',
      color: colors.red,
    },
    {
    title: 'Zamówienia sektorowe art 5 ust 4',
    color: colors.blue,
    },
    {
    title: 'Zamówienia z dziedziny obronności i bezpieczeństwa art 7 ust 3',
    color: colors.lightGreen, 
    },
    {
    title: 'Rozporządzenie ws progów',
    color: colors.lightGray,
    },

  ],
};