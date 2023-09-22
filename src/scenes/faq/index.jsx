import { AccordionDetails, Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {/* QUESTION 1 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 1 ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is the answer for the question.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION 2 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 2 ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is the answer for the question.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION 3 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 3 ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is the answer for the question.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION 4 */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 4 ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is the answer for the question.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* QUESTION 5 */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 5 ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>This is the answer for the question.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
