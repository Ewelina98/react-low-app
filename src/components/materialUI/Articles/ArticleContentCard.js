import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

export const ArticleCotentCard = ({ article: { content, title } }) => {
  const spanRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if(spanRef.current) {
      spanRef.current.innerHTML = content.replace(/\n/g, '<br/><br/>');
    }
  }, [spanRef, content]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span ref={spanRef} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
