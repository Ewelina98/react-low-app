import React from 'react';
import { Button, Paper, Typography } from "@material-ui/core";
import { useStyles } from './StepperStyles';
import { SubmitButtton } from './SubmitButton';

export const StepperFinishHintView = ({ onRestPress, onSubmitClick }) => {
    const classes = useStyles();

    return (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={onRestPress} className={classes.button}>{'Reset'}</Button>
          <SubmitButtton onSubmit={onSubmitClick} />
        </Paper>
    );
};