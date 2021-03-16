import React from 'react';
import { useStyles } from './StepperStyles';
import Button from '@material-ui/core/Button';


export const StepperActions = props => {
    const classes = useStyles();

    const handleBack = () => {
        props.onBackPress();
    }

    const handleNext = () => {
        props.onNextPress();
    }

    return (
        <div className={classes.actionsContainer}>
        <div>
            <Button
                disabled={props.isNextDisabled}
                onClick={handleBack}
                className={classes.button}
            >
                {'Wróć'}
            </Button>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
            >
                {props.isNext ? 'Następne' : 'Wyślij'}
            </Button>
        </div>
        </div>
    )
}