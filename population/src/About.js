// About.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        color: '#000',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3 }}>
        About C.J's Population App
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        C.J's Population App is a simple web application that allows you to explore population data from different countries and years.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        It is built using React,Javascript and Material-UI as the CSS, making it user-friendly and easy to navigate.
      </Typography>
      <Typography variant="body1">
        Have fun exploring the population data in my app!
      </Typography>
      <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
        Back to Home
      </Button>
    </Box>
  );
};

export default About;
