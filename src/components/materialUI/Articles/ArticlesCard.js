import React, { useEffect, useState } from "react";
import { ArticlesCardHeader } from "./ArticlesCardHeader";
import { ArticlesCardRow } from "./ArticlesCardRow";
import { useArticlesStyles } from "./ArticlesStyles";
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { ArticlesDialog } from './ArticlesDialog';

export const ArticlesCard = ({ articlesCard }) => {
    const { section, chapters, articles, hasChapters } = articlesCard;

    const classes = useArticlesStyles();

    const [expanded, setExpanded] = useState('');
    const [isChapterDialogOpen, setIsChapterDialogOpen] = useState(false);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isArticleDialogOpen, setIsArticleDialogOpen] = useState(false);
  
    const handleChange = (row) => (_event, isExpanded) => {
      setExpanded(isExpanded ? row : '');
    };

    const handleChapterClick = (chapter) => () => {
        setSelectedChapter(chapter);

        if (!chapter.hasSubChapters) {
            setIsChapterDialogOpen(true);
        }
    };

    const handleArticleClick = (article) => () => {
        setSelectedArticle(article);
        setIsArticleDialogOpen(true);
    }

    const handleClose = () => {
        setIsChapterDialogOpen(false);
        setIsArticleDialogOpen(false);
    }

    return (
        <div className={classes.root}>
            <ArticlesCardHeader title={section.title} />

            {!hasChapters && articles.map((article, index) => {
                const row = 'row' + index;

                return (
                    <ArticlesCardRow 
                        key={row}
                        row={row}
                        hasSubChapters={false} 
                        number={article.id} 
                        title={article.title} 
                        expanded={expanded}
                        onChange={handleChange(row)}
                        onClick={handleArticleClick(article)}
                    />
                );
            })}


            {hasChapters && chapters.map((chapter, index) => {
                const row = 'row' + index;

                return (
                    <ArticlesCardRow 
                        key={row}
                        row={row}
                        hasSubChapters={chapter.hasSubChapters} 
                        number={chapter.number} 
                        title={chapter.title} 
                        expanded={expanded}
                        onChange={handleChange(row)}
                        onClick={handleChapterClick(chapter)}
                    >
                        {chapter.hasSubChapters &&
                            <List>
                                {chapter.subChapters?.map(((subChapter, idx) => {
                                    const lastIdx = (chapter.subChapters?.length || 0) -1
                                    const isLast = lastIdx === idx;

                                    return (
                                        <div key={subChapter.number + idx} style={{ width: 700 }}>
                                            <ListItem
                                                button
                                                onClick={handleChapterClick(subChapter)}
                                            >
                                                <ListItemText primary={subChapter.title} />
                                            </ListItem>
                                            {!isLast && <Divider />}
                                        </div>
                                    )
                                }))}                      
                            </List>
                        }
                    </ArticlesCardRow>
                );
            })}
            {selectedChapter && <ArticlesDialog chapter={selectedChapter} isOpen={isChapterDialogOpen} onClose={handleClose} />}
            {selectedArticle && <ArticlesDialog article={selectedArticle} isOpen={isArticleDialogOpen} onClose={handleClose} />}
        </div>
    )
};