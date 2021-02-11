import React from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { Divider, Link, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";

export const LinksList = ({ links, iconType }) => (
    <List>
      {links.map(({ title, description, link }, index) => {
          const isLast = index === links.length - 1;

          return (
            <>
                <ListItem button onClick={() => openUrlOnNewTab(link, iconType)}>
                  <ListItemText primary={title} secondary={description} />
                  <ListItemSecondaryAction>
                      {iconType === 'open' ? (
                          <Link href={link} target={'_blank'}>
                            <OpenInNewIcon />
                          </Link>
                        ) : <CloudDownloadIcon />}
                  </ListItemSecondaryAction>
                </ListItem>
                {!isLast && <Divider/>}
            </>
          )
      })}
    </List>
  );

  const openUrlOnNewTab = (url, iconType) => {
    if(iconType === 'open') {
      window.open(url, '_blank');
    } else {
      console.log('Download...');
    }
  }