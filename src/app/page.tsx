import React from 'react';
import {
  Box,
  Grid
} from '@mui/material';
import Hero from '@/components/Hero';
import Filters from '@/components/Filters';
import Catalog from '@/components/Catalog';
import Ranking from '@/components/Ranking';

function App() {
  return (
    <Box sx={{ display: "flex" }}>
        <Grid size={2}>
          <Box p={5}>
            <Hero />
            <Filters />
            <Catalog />
          </Box>
        </Grid>
        <Ranking />
    </Box>
  );
}

export default App;