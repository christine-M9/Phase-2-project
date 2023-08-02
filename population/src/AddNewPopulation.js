import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const AddNewPopulation = ({ onAddPopulation }) => {
  const [newPopulationData, setNewPopulationData] = React.useState({
    "ID Year": "",
    "ID Nation": "",
    "Nation": "",
    "Year": "",
    "Population": "",
    "Slug Nation": ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPopulationData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Submitting data:", newPopulationData); // Debugging line
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPopulationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data); // Debugging line
        onAddPopulation(data); // After the JSON server returns the newly added data with an ID, it sets new
        setNewPopulationData({
          "ID Year": "",
          "ID Nation": "",
          "Nation": "",
          "Year": "",
          "Population": "",
          "Slug Nation": ""
        });
      })
      .catch((error) => {
        console.error("Failed to add data to the JSON server:", error);
      });
  };

  return (
    <Box>
      <Typography variant="h6">ADD POPULATION</Typography>
      <Box>
        <TextField
          label="ID Year"
          name="ID Year"
          value={newPopulationData["ID Year"]}
          onChange={handleChange}
        />
        <TextField
          label="ID Nation"
          name="ID Nation"
          value={newPopulationData["ID Nation"]}
          onChange={handleChange}
        />
        <TextField
          label="Nation"
          name="Nation"
          value={newPopulationData["Nation"]}
          onChange={handleChange}
        />
        <TextField
          label="Year"
          name="Year"
          value={newPopulationData["Year"]}
          onChange={handleChange}
        />
        <TextField
          label="Population"
          name="Population"
          value={newPopulationData["Population"]}
          onChange={handleChange}
        />
        <TextField
          label="Slug Nation"
          name="Slug Nation"
          value={newPopulationData["Slug Nation"]}
          onChange={handleChange}
        />
      </Box>
      <Button onClick={handleSubmit} variant="contained" color="primary">Add Population</Button>
    </Box>
  );
};

export default AddNewPopulation;
