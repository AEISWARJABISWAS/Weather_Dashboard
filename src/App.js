import React, { useState } from "react";
import WeatherDashboard from "./components/WeatherDashboard";
import Header from "./components/Header";
import {
  Container,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
} from "@mui/material";
import Footer from "./components/Footer";
import CitySearch from "./components/CitySearch";

const theme = createTheme();

function App() {
  const [selectedCity, setSelectedCity] = useState("Gurugram");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
        <Box mt={3}>
          <CitySearch onSelectCity={setSelectedCity} />
        </Box>
        <Box mt={3}>
          <WeatherDashboard city={selectedCity} />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
