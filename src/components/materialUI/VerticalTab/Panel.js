import React from 'react';
import { Box, Typography } from '@material-ui/core';

export const Panel = props => {
  const { children, selectedIndex, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={selectedIndex !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {selectedIndex === index && (
        <Box  component="div">
          {children}
        </Box>
      )}
    </div>
  );
};
