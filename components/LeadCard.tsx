import React from 'react'
import {
    Box,
    Typography,
    Paper,
    Grid,
    TextField,
    MenuItem,
} from "@mui/material";
import { Info } from "@mui/icons-material";
const LeadCard = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                fontFamily: "Poppins, sans-serif",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                    sx={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#2196f3",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                    }}
                >
                    <Info sx={{ color: "white", fontSize: 14 }} />
                </Box>
                <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                    Lead Details
                </Typography>
            </Box>

            <Grid container spacing={2}>
                {[
                    { label: "Assigned To", value: "Faizan, Ur Rehman (BB)" },
                    { label: "Unit Type", value: "Apartment" },
                    { label: "Unit Ref. No", value: "AP5299" },
                    { label: "Referred By", value: "Faizan Ur Rehman" },
                    { label: "Bedrooms", value: "2", type: "select" },
                    { label: "Bathrooms", value: "2", type: "select" },
                ].map((field, i) => (
                    <Grid size={{ xs: 12, md: 6 }} key={i}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px", mb: 0.5 }}>
                            {field.label}
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            select={field.type === "select"}
                            defaultValue={field.value}
                            sx={{ backgroundColor: "#fff" }}
                        >
                            {field.type === "select" &&
                                ["1", "2", "3", "4"].map((val) => (
                                    <MenuItem key={val} value={val}>
                                        {val}
                                    </MenuItem>
                                ))}
                        </TextField>
                    </Grid>
                ))}

                {/* Min/Max Fields */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "13px", mb: 0.5 }}>
                        Bathrooms
                    </Typography>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Min"
                        sx={{ backgroundColor: "#fff" }}
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Max"
                        sx={{ backgroundColor: "#fff", mt: 3 }}
                    />
                </Grid>

                {/* Location */}
                <Grid size={{ xs: 12 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "13px", mb: 0.5 }}>
                        Location
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "#777" }}>
                        Sharjah District › Abu Shagara 1 & 2 › Abu Shagara 1 & 2 › Demo 7 Testing
                    </Typography>
                </Grid>

                {/* Other Fields */}
                {[
                    { label: "Other Location", value: "Garden Heights! (Property)" },
                    { label: "Method of Contact", type: "select", options: ["Phone", "Email", "WhatsApp"] },
                    { label: "Lead Source", type: "select", options: ["Website", "Referral", "Social Media"] },
                ].map((field, i) => (
                    <Grid size={{ xs: 12, md: i === 0 ? 12 : 6 }} key={i}>
                        <Typography sx={{ fontWeight: 600, fontSize: "13px", mb: 0.5 }}>
                            {field.label}
                        </Typography>
                        <TextField
                            fullWidth
                            size="small"
                            select={!!field.type}
                            defaultValue={field.value || ""}
                            sx={{ backgroundColor: "#fff" }}
                        >
                            {field.options?.map((opt) => (
                                <MenuItem key={opt} value={opt.toLowerCase()}>
                                    {opt}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}

export default LeadCard