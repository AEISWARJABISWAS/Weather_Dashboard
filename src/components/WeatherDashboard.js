import React, { useState, useEffect } from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import axios from "axios";

const WeatherDashboard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${process.env.REACT_APP_API_KEY}&contentType=json`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const currentDate = new Date().toLocaleDateString("en-US", options);
  const temperatureValue = weatherData?.days[0]?.temp
    ? ((weatherData?.days[0]?.temp - 32) / 1.8).toFixed(2) + " °C"
    : "-";

  return (
    <Box
      mt={3}
      sx={{
        backgroundImage: "url('./assets/cloudy.webp')",
        backgroundRepeat: "no-repeat",
        height: { xs: "1000px", sm: "700px", md: "500px" },
        width: "100%",
        padding: "20px",
        lazyLoad: "true",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "30px", sm: "45px" },
              color: "white",
            }}
          >
            {city?.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginTop: "10px",
              fontSize: { xs: 20, md: 28 },
            }}
          >
            {currentDate?.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ margin: "10px", textAlign: "center" }}>
            <CardContent>
              <img
                loading="lazy"
                src="./assets/temp.svg"
                height="80px"
                width="80px"
                alt="Weather Icon"
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Temperature
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {temperatureValue}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ margin: "10px", textAlign: "center" }}>
            <CardContent>
              <img
                loading="lazy"
                src="./assets/wind.svg"
                height="80px"
                width="80px"
                alt="Weather Icon"
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Wind Speed
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {weatherData?.days[0]?.windspeed ?? "-"} km/h
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ margin: "10px", textAlign: "center" }}>
            <CardContent>
              <img
                loading="lazy"
                src="./assets/humidity.svg"
                height="80px"
                width="80px"
                alt="Weather Icon"
              />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Humidity
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {weatherData?.days[0]?.humidity ?? "-"} %
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeatherDashboard;
