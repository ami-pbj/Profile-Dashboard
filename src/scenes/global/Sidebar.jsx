// Sidebar

import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import CalenderTodayOutlinedIcon from '@mui/icons-material/CalenderTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{color: colors.grey[100]}}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>
        {title}
      </Typography>
      
      <Link to={to}/>
    </MenuItem>
  )
}




const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");


  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: "#6870fa important"
        },
      }}
    >

      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape='square'>
          {/* LOGO & MENU SECTION */}
          <MenuItem 
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >

            {!isCollapsed && (
              <Box 
                display="flex" 
                justifyContent="space-between" 
                alignContent="center"
                ml="15px"
              >
                <Typography 
                  variant='h3'
                  color={colors.grey[100]}
                >
                  PBJ
                </Typography>

                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* ADMIN */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box 
                display="flex" 
                justifyContent="center" 
                alignItems="center"
              >
                <img 
                  alt='admin-profile'
                  width="100px"
                  height="100px"
                  src={`../../assets/pbj.png`}
                  style={{ cursor: 'pointer', borderRadius: '50%'}}
                />
              </Box>

              <Box
                textAlign="center"
              >
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    m: '10px 0 0 0'
                  }}
                >
                  PBJ
                </Typography>

                <Typography
                  variant='h5'
                  color={colors.greenAccent[500]}
                >
                  Struggled Developer
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}

        </Menu>
      </ProSidebar>
      
    </Box>
  );
};

export default Sidebar