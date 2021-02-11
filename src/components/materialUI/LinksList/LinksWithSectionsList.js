import React from 'react';
import { Typography, makeStyles, Divider } from '@material-ui/core';
import { LinksList } from "./LinksList";

const useStyles = makeStyles((theme) => ({
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

export const LinksWithSectionsList = ({ linksWithSections }) => {
    const classes = useStyles();

    return (
        <>
            {linksWithSections.map(({ title, items }) => {
                return (
                   <>
                    <Typography variant="h6" className={classes.title}>{title}</Typography>
                    <Divider />
                    <LinksList links={items} iconType={'open'} />
                   </>
                );
            })}
        </>
    )
}