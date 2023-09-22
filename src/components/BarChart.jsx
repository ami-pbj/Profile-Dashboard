import { useTheme } from '@mui/material';
import React from 'react';
import { tokens } from "../theme";
import { ResponsiveBar } from '@nivo/bar';
import { mockBarData as data } from "../data/mockData";

const BarChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar>
      
    </ResponsiveBar>
  )
}

export default BarChart