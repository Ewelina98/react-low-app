import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: theme.spacing(2),
  },
  title: { 
    textAlign: 'center',
    padding: theme.spacing(4),
    color: theme.palette.text.primary,
  },
  divider: {
    border: theme.spacing(1),
    margin: theme.spacing(2, 0),
  },
}));

export const CustomTable = props => {
  const classes = useStyles();

  const  { title, titles, content, footer } = props.table;
  const  {col1, col2, col3} = content;
  const rows = col1.map((colOne, idx) => {
    return [
      colOne,
      col2[idx],
      col3[idx],
    ];
  });

  console.log(rows);

  const paperStyle = {
    padding: 1,
    textAlign: "center",
    marginBottom: 10,
  };

  const paperWithColorStyle = (color) => ({
    ...paperStyle,
    color,
  })

  const paperWithBackgroundColorStyle = (color) => ({
    ...paperStyle,
    backgroundColor: color,
  })

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title} variant="h4" gutterBottom>
        {title}
      </Typography>
      
      <Grid container spacing={6}>
        <Grid item xs={4}>
          <Typography variant={'h5'} className={classes.paper}>{titles.col1}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant={'h5'} className={classes.paper}>{titles.col2}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant={'h5'} className={classes.paper}>{titles.col3}</Typography>
        </Grid>
      </Grid>

      <Divider className={classes.divider} />

      
      {rows.map((row, idx) => (
        <>
        <Grid key={idx} container spacing={3}>
          <Grid item xs={4}>
            <Typography variant={'p'} style={paperWithColorStyle(row[0].color)}>{row[0].title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={'p'} style={paperWithColorStyle(row[1].color)}>{row[1].title}</Typography>
          </Grid>
          <Grid item xs={4} style={{
            borderColor: 'white',
            borderWidth: 10,
            backgroundColor: row[2].color,
          }}>
            <Typography variant={'p'} style={paperWithBackgroundColorStyle(row[2].color)}>{row[2].title}</Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        </>
      ))}

      <Grid container spacing={3}>
        {footer.map(({ title, color }, idx) => (
          <Grid key={idx} item xs={2} style={{ 
            backgroundColor: color,
            borderColor: 'white',
            borderWidth: 5, 
          }} >
            <Typography variant={'p'} style={{
              ...paperStyle,
              fontSize: 14

            }}>{title}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
