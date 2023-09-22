import React from 'react'
import Header from '../../components/Header'
import { Box } from '@mui/material'
import ProgressCircle from '../../components/ProgressCircle';
import StatBox from '../../components/StatBox';

const Dashboard = () => {
  return (
    <Box
      m="20px"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >

        <Header title="Dashboard" subtitle="Welcome to Your Dashboard !!"/>

      </Box>

      <ProgressCircle />
      <StatBox/>
    </Box>
  );
};

export default Dashboard;