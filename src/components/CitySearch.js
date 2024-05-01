import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const CitySearch = ({ onSelectCity }) => {
  const [selectedCity, setSelectedCity] = useState("Gurugram");
  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Surat",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Visakhapatnam",
    "Indore",
    "Thane",
    "Bhopal",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Bokaro",
    "Gurugram",
  ];

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={2}
      direction="row"
      justifyContent="center"
    >
      <h6
        style={{
          textAlign: "left",
          fontWeight: "bold",
          fontSize: "20px",
          marginTop: "4px",
          padding: "10px",
        }}
      >
        Please select a city to get weather data:
      </h6>
      <Autocomplete
        options={cities}
        getOptionLabel={(option) => option}
        style={{ width: 350, padding: "10px" }}
        value={selectedCity}
        onChange={(event, newValue) => {
          setSelectedCity(newValue);
          onSelectCity(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search City" variant="outlined" />
        )}
      />
    </Grid>
  );
};

export default CitySearch;
