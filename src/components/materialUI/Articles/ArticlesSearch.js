import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Divider, Paper, InputBase, IconButton, makeStyles, Grid, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { fetchAllArticlesMapped } from "services/fetshData";
import { Autocomplete } from "@material-ui/lab";
import { ArticlesDialog } from "./ArticlesDialog";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },

    result: {
        height: 500,
        position: 'relative',
        top: 0,
    }
  }));

export const ArticlesSearch = () => {
    const classes = useStyles();

    const [articles, setArticles] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        fetchAllArticlesMapped().subscribe(articlesData => {
            setArticles(articlesData);
        });
    }, [fetchAllArticlesMapped]);

    const handleItemClick = (article) => {
        setSelectedArticle(article);
        setIsOpen(true);
        setIsDialogOpen(true);
    };

    const handleClose = () => {
        setIsDialogOpen(false);
        setSelectedArticle(null);
    }

    

    return (
        <>
        <Autocomplete
            open={isOpen}
            onInputChange={() => setIsOpen(true)}
            clearOnEscape={true}
            options={articles}
            noOptionsText={
                <ListItem>
                    <ListItemText primary={'Nie znaleziono'} />
                </ListItem>
            }
            getOptionLabel={article => article.content}
            renderOption={(option) => (
                <ListItem button onClick={() => handleItemClick(option)}>
                    <ListItemText primary={option.title} secondary={option.content} />
                </ListItem>
            )}
            renderInput={(params) => 
                <div className={classes.root}>
                    <TextField
                    {...params}
                    className={classes.input}
                    disabled={!articles}
                    label={'Szukaj...'}
                    />
                </div>
            }
        />
        <ArticlesDialog article={selectedArticle} isOpen={isDialogOpen} onClose={handleClose} />
        </>
    );
}