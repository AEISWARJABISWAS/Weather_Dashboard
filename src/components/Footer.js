import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ab65f8",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="h6" sx={{ fontSize: { xs: "16px" } }}>
        Made with <span style={{ color: "#e25555" }}>&#10084;</span> by
        Aeiswarja Biswas &copy; 2024
      </Typography>
    </Box>
  );
};

export default Footer;
