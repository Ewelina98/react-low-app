import React from "react";
import { useArticlesStyles } from "./ArticlesStyles";

export const ArticlesCardHeader = ({title}) => {
    const classes = useArticlesStyles();

    return (
        <div className={classes.header}>
            <p>{title}</p>
        </div>
    )
};