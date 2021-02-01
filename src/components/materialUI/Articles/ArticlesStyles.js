import { createStyles, makeStyles } from "@material-ui/core";

export const useArticlesStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flex: '1',
    },
    header: {
      fontSize: theme.typography.pxToRem(20),
      marginBottom: 15,
      marginTop: 15
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.primary,
    },
  }),
);