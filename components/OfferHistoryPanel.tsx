import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Typography,
    TextField,
    MenuItem,
    Chip,
    IconButton,
} from '@mui/material';
import {
    ExpandMore,
    History as HistoryIcon,
    BookmarkBorder,
} from '@mui/icons-material';

const OfferHistoryPanel = () => {
    return (
        <Accordion
            disableGutters
            elevation={0}
            sx={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                boxShadow: "none",
                "&::before": { display: "none" },
            }}
        >
            {/* Accordion Header */}
            <AccordionSummary
                expandIcon={<ExpandMore />}
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
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        sx={{
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            backgroundColor: '#2196f3',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 1.5,
                        }}
                    >
                        <HistoryIcon sx={{ fontSize: 16, color: 'white' }} />
                    </Box>
                    <Typography
                        variant="body2"
                        fontWeight={600}
                        sx={{ fontSize: '14px', color: '#333' }}
                    >
                        Offer History
                    </Typography>
                    <Chip
                        label="1"
                        size="small"
                        sx={{
                            ml: 1,
                            height: 20,
                            fontSize: '11px',
                            px: 1,
                        }}
                    />
                </Box>
            </AccordionSummary>

            {/* Accordion Body */}
            <AccordionDetails sx={{ px: 2, py: 2 }}>
                {/* Filter row */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                        mb: 2,
                        flexWrap: 'wrap',
                    }}
                >
                    <TextField
                        select
                        size="small"
                        defaultValue="everyone"
                        sx={{ minWidth: 100 }}
                    >
                        <MenuItem value="everyone">Everyone</MenuItem>
                    </TextField>
                    <TextField
                        select
                        size="small"
                        defaultValue="status"
                        sx={{ minWidth: 80 }}
                    >
                        <MenuItem value="status">Status</MenuItem>
                    </TextField>
                    <TextField
                        select
                        size="small"
                        defaultValue="lead"
                        sx={{ minWidth: 80 }}
                    >
                        <MenuItem value="lead">Lead</MenuItem>
                    </TextField>
                    <TextField
                        select
                        size="small"
                        defaultValue="sort by"
                        sx={{ minWidth: 100 }}
                    >
                        <MenuItem value="sort by">Sort By</MenuItem>
                    </TextField>
                </Box>

                {/* Labels */}
                <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{ fontSize: '11px', mb: 1, display: 'block' }}
                >
                    Pin to top
                </Typography>
                <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{ fontSize: '11px', mb: 2, display: 'block' }}
                >
                    Complete
                </Typography>

                {/* Activity box */}
                <Box
                    sx={{
                        mt: 1,
                        p: 2,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 1,
                        border: '1px solid #e0e0e0',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1,
                    }}
                >
                    <BookmarkBorder sx={{ fontSize: 18, color: '#757575', mt: '2px' }} />
                    <Typography variant="body2" sx={{ fontSize: '12px' }}>
                        <strong>Notes/Extra Requirements:</strong>{' '}
                        <a
                            href="http://www.goyzer.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.goyzer.com
                        </a>{' '}
                        How are you doing
                    </Typography>
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

export default OfferHistoryPanel;
