import React from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import { useArticlesStyles } from "./ArticlesStyles";

export const ArticlesCardRow = props => {
    const classes = useArticlesStyles();

    const { children, title, row, expanded, hasSubChapters, onChange, onClick } = props;

    const expandIcon = hasSubChapters ? < ExpandMoreIcon  /> : <div style={{height: 20, width: 20,}}></div>;

    return (
        <Accordion expanded={hasSubChapters && expanded === row} onChange={onChange}>
          <AccordionSummary
            expandIcon={expandIcon}
            aria-controls={`${row}bh-content`}
            id={`${row}bh-header`}
            onClick={onClick}
          >
            <Typography className={classes.secondaryHeading}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {children}
          </AccordionDetails>
        </Accordion>
    );
};