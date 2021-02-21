import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import { StepperFinishHintView } from './StepperFinishHintView';
import { useStyles } from './StepperStyles';
import { StepperActions } from './StepperActions';
import { RegisterInputs } from './RegisterInputs';

export function RegisterStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = () => {
    console.log('Submitting.....')
  };

  const isFinished = () => {
    return activeStep === steps.length;
  }

  const isNext = () => {
      return activeStep !== steps.length - 1;
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <RegisterInputs step={index} />
              <StepperActions onNextPress={handleNext} onBackPress={handleBack} isNext={isNext()} isNextDisabled={activeStep === 0} />
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {isFinished() && <StepperFinishHintView onRestPress={handleReset} onSubmitClick={handleSubmit} />}
    </div>
  );
}

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}