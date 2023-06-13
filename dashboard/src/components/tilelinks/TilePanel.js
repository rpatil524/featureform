import Grid from '@mui/material/Grid';
import React from 'react';
import Tile from './Tile.js';

const TilePanel = ({ sections }) => {
  return (
    <div>
      <Grid container justifyContent='center'>
        {sections.map((section, i) => {
          return (
            <Grid item xs={12} md={6} lg={4} key={`tile-grid-${i}`}>
              <Tile detail={section} key={`tile-${i}`} id={i} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TilePanel;
