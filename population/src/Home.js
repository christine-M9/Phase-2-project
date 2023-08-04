import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        backgroundColor: '#f0f0f0',
        color: '#000',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        WELCOME TO CEEJAY'S POPULATION DATA APP
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Explore and save more population data from different countries and years.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ mb: 3 }}
        component={Link}
        to="/data"
      >
        Get Started
      </Button>
      <Typography variant="body1">
        Have fun exploring the population data in my app!
      </Typography>
    </Box>
  );
};

export default Home;
