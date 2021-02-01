import React, { useEffect } from "react";
import { forwardRef, useState } from "react";
import { AppBar, Button, createStyles, Dialog, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Slide, Toolbar, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import { ArticlesGrid } from "./ArticlesGrid";
import { ArticleCotentCard } from "./ArticleContentCard";

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }),
);

export const ArticlesDialog = ({ isOpen, onClose, chapter, article }) => {
    const classes = useStyles();

    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        if(chapter && chapter.articles && chapter.articles[0]) {
            setSelectedArticle(chapter.articles[0]);
        }
    }, [chapter]);

    useEffect(() => {
        if (article) {
            setSelectedArticle(article);
        }
    }, [article])

    const handleClose = () => {
        setSelectedArticle(null);
        onClose();
    }

    const handleClick = (article) => () => {
        setSelectedArticle(article);
    };

    const renderContent = () => (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            width: '100%',
        }}>
            {selectedArticle && (
                <ArticleCotentCard article={selectedArticle} />
            )}
            {!selectedArticle && (
                <div>
                    <Typography>
                        {'Brak wybranego artykułu'}
                    </Typography>
                </div>
            )}
        </div>
    );

    return (
        <Dialog fullScreen open={isOpen} onClose={onClose} TransitionComponent={Transition}>
            
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {chapter?.title ?? article?.title}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Zrobione
                    </Button>
                </Toolbar>
            </AppBar>

            <ArticlesGrid 
                renderList={() => (
                    <List>
                        {article && (
                            <>
                                <ListItem button onClick={handleClick(article)} selected={true}>
                                    <ListItemText primary={article.title} />
                                    <ListItemIcon>
                                        <CheckIcon />
                                    </ListItemIcon>
                                </ListItem>
                                <Divider />
                            </>
                        )}
                        {chapter && chapter.articles?.map((article, index) => {
                            const lastIdx = (chapter?.articles?.length || 0) -1
                            const isLast = lastIdx === index;

                            const isSelected = selectedArticle?.id === article.id;

                            return (
                                <div key={article.id + index}>
                                    <ListItem button onClick={handleClick(article)} selected={isSelected} >
                                        <ListItemText primary={article.title} />
                                        {isSelected && (
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                        )}
                                    </ListItem>
                                    {!isLast && <Divider />}
                                </div>
                            )
                        })}
                    </List>
                )}
                renderContent={renderContent}
            />
        </Dialog>
    );
}