import React from "react";
import { Typography, Box, Grid } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ py: 1 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid
          item
          xs={12}
          md={3}
          lg={2}
          xl={1}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Box
            component="img"
            sx={{
              height: { xs: 100, sm: 120, md: 150 },
              marginLeft: { md: "20px" },
            }}
            alt="Logo"
            src="./assets/logo1.svg"
          />
        </Grid>
        <Grid item xs={12} md={9} lg={10} xl={11}>
          <Typography
            variant="h3"
            align="center"
            color="grey.700"
            fontWeight="bold"
            className="project_title"
            sx={{
              bgcolor: "primary.main",
              backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
            }}
          >
            WEATHER DASHBOARD
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
