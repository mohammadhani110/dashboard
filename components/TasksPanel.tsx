import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Button,
  Select,
  MenuItem,
  Paper
} from "@mui/material";
import { ExpandMore, Task } from "@mui/icons-material";
import { useState } from "react";

const TasksPanel = () => {
  const [expanded, setExpanded] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [dropdownValue, setDropdownValue] = useState("");

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "none",
        "&::before": { display: "none" },
        "&.MuiPaper-root": { borderRadius: "12px", },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{
          backgroundColor: "#fff3e0",
          borderRadius: "12px",
          px: 2,
          py: 1.5,
          "& .MuiAccordionSummary-content": {
            alignItems: "center",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: "#ff9800",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 2
            }}
          >
            <Task sx={{ color: "white", fontSize: 16 }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "15px" }}>
            Tasks
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          // backgroundColor: "#f9f9f9",
          p: 2,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "space-between",
          borderRadius: "12px",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant={selectedTab === 0 ? "contained" : "outlined"}
            size="small"
            onClick={() => setSelectedTab(0)}
            sx={{ textTransform: "none", fontSize: "12px", borderRadius: "12px" }}
          >
            Notes
          </Button>
          <Button
            variant={selectedTab === 1 ? "contained" : "outlined"}
            size="small"
            onClick={() => setSelectedTab(1)}
            sx={{ textTransform: "none", fontSize: "12px", borderRadius: 5 }}
          >
            Viewing
          </Button>
          <Button
            variant={selectedTab === 2 ? "contained" : "outlined"}
            size="small"
            onClick={() => setSelectedTab(2)}
            sx={{ textTransform: "none", fontSize: "12px", borderRadius: 5 }}
          >
            Call
          </Button>

          <Select
            size="small"
            value={dropdownValue}
            onChange={(e) => setDropdownValue(e.target.value)}
            displayEmpty
            sx={{
              minWidth: 100,
              fontSize: "12px",
              borderRadius: 5,
              backgroundColor: "#fff"
            }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
          </Select>
        </Box>

        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#f8c8c8",
            color: "#333",
            textTransform: "none",
            fontSize: "12px",
            borderRadius: 2,
            px: 3,
            "&:hover": {
              backgroundColor: "#f5baba"
            }
          }}
        >
          Save
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default TasksPanel;
