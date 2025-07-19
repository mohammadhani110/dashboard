import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    Chip,
    Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListIcon from "@mui/icons-material/List";

const OffersPanel = () => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Accordion
            expanded={expanded}
            onChange={() => setExpanded(!expanded)}
            sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "none",
                "&::before": { display: "none" },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
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
                {/* Left Section: Icon + Title */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                        sx={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            backgroundColor: "#ffb74d",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 1.5,
                        }}
                    >
                        <ListIcon sx={{ fontSize: 16, color: "white" }} />
                    </Box>
                    <Typography
                        variant="body2"
                        fontWeight={600}
                        sx={{ fontSize: "13px", color: "#333" }}
                    >
                        Offers
                    </Typography>
                </Box>


            </AccordionSummary>

            <AccordionDetails sx={{ px: 2, pb: 2, pt: 1.5 }}>
                {/* You can add your accordion content here */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 1 }}>
                    {/* Middle Chip */}
                    <Chip
                        label="Offers"
                        variant="outlined"
                        sx={{
                            fontSize: "12px",
                            height: "28px",
                            borderRadius: "16px",
                            px: 1.5,
                        }}
                    />

                    {/* Right Button */}
                    <Button
                        variant="contained"
                        disabled
                        sx={{
                            ml: 2,
                            backgroundColor: "#f8d3d3",
                            color: "#fff",
                            fontSize: "12px",
                            textTransform: "none",
                            height: "28px",
                            width: "60px",
                            "&.Mui-disabled": {
                                backgroundColor: "#f8d3d3",
                                color: "#fff",
                            },
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default OffersPanel;
