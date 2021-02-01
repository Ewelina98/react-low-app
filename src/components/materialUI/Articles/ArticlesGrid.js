import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export const ArticlesGrid = ({renderList, renderContent}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} xs={2} sm={2}>
          {renderList()}
        </Grid>
        <Grid item lg={9} xs={8} sm={8}>
          {renderContent()}
        </Grid>
      </Grid>
    </div>
  );
};
