import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    TextField,
    IconButton,
    InputLabel,
    FormControl,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotesIcon from "@mui/icons-material/Notes";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";

const ActivityHistoryPanel = () => {
    const [expanded, setExpanded] = useState<boolean>(true);

    const activityItems = [
        {
            title: "Assigned To : Faizan Ur Rehman | Transferred",
            description:
                "Transferred from: Abbas Ali Transferred to: Faizan Ur Rehman Transfer Remarks: www.goyzer.com How are you doing",
            timestamp: "30 Oct 2024",
            time: "11:35",
        },
        {
            title: "Assigned To : Faizan Ur Rehman | Notes",
            description: 'Lead Stage Change From "to" to "Viewing", asdasd',
            timestamp: "30 Oct 2024",
            time: "11:35",
        },
        {
            title: "Assigned To : Abbas Ali | Transferred",
            description:
                "Transferred from: Abdullah Rehmatullah Transferred to: Abbas Ali Transfer Remarks: www.goyzer.com How are you doing",
            timestamp: "28 Oct 2024",
            time: "16:34",
        },
        {
            title: "Assigned To : Abbas Ali | Transferred",
            description:
                "Transferred from: Abdullah Rehmatullah Transferred to: Abbas Ali Transfer Remarks:",
            timestamp: "25 Sep 2024",
            time: "11:33",
        },
    ];

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
                    backgroundColor: "#e3f2fd",
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
                            backgroundColor: "#42a5f5",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 1.5,
                        }}
                    >
                        <NotesIcon sx={{ fontSize: 16, color: "white" }} />
                    </Box>
                    <Typography
                        variant="body2"
                        fontWeight={600}
                        sx={{ fontSize: "14px", color: "#333" }}
                    >
                        Activity History
                    </Typography>
                </Box>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 2, pt: 1, pb: 2 }}>
                {/* Filters */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        mb: 2,
                        alignItems: "center",
                    }}
                >
                    {["Everyone", "Types", "Status", "Lead", "Sort By"].map((label) => (
                        <FormControl
                            key={label}
                            size="small"
                            sx={{ minWidth: 120 }}
                        >
                            <InputLabel>{label}</InputLabel>
                            <Select defaultValue="" label={label}>
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value={label.toLowerCase()}>{label}</MenuItem>
                            </Select>
                        </FormControl>
                    ))}
                </Box>

                {/* Activity List */}
                <Box>
                    {activityItems.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderBottom: "1px solid #e0e0e0",
                                py: 1.5,
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                                <BookmarkBorder sx={{ fontSize: 18, color: "#757575", mr: 1 }} />
                                <Box>
                                    <Typography fontWeight={600} fontSize={13} sx={{ mb: 0.5 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" fontSize={13} color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ minWidth: 100, textAlign: "right" }}>
                                <Typography fontSize={12} fontWeight={600}>
                                    {item.timestamp}
                                </Typography>
                                <Typography fontSize={11} color="text.secondary">
                                    {item.time}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Checkbox */}
                <FormControlLabel
                    control={<Checkbox />}
                    label="Show system generated tasks"
                    sx={{ mt: 1.5 }}
                />
            </AccordionDetails>
        </Accordion>
    );
};

export default ActivityHistoryPanel;
