import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4e5d3',
        color: '#333',
        textAlign: 'center',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3, color: '#fca311', fontWeight: 'bold' }}>
          WELCOME TO CEEJAY'S POPULATION DATA APP
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, fontSize: '18px' }}>
          Explore population data from different countries and years.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mb: 3,
            backgroundColor: '#ff5733',
            color: '#fff',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#ff4500',
            },
          }}
        >
          Get Started
        </Button>
        <Typography variant="body1" sx={{ fontSize: '16px', color: '#457b9d' }}>
          Have fun exploring the population data in my app!
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;
