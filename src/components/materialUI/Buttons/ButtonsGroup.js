import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const ButtonsGroup = ({ titles, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {titles.map((title, index) => (
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() => onClick(index)}
            >
                {title}
            </Button>
        ))}
    </div>
  );
}
