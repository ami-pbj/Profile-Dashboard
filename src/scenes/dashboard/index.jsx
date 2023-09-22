import React from "react";
import Header from "../../components/Header";
import { Box, Button, useTheme } from "@mui/material";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";

import { EmailIcon } from "@mui/icons-material/Email";
import { PointOfSaleIcon } from "@mui/icons-material/PointOfSale";
import { PersonAddIcon } from "@mui/icons-material/PersonAdd";
import { TrafficIcon } from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";
import { DownloadOutlined } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" display="flex" justifyContent="space-between">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to Admin Dashboard !!" />
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlined sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
