import {
    Box,
    Typography,
    Paper,
    Chip,
    TextField,
    MenuItem,
    Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Person, Phone, Email, Info } from "@mui/icons-material";

const ContactCard = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                mb: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                fontFamily: "Poppins, sans-serif"
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        backgroundColor: "#f44336",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                    }}
                >
                    <Person sx={{ color: "#fff", fontSize: 18 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "15px" }}>
                    Contact
                </Typography>
                <Box sx={{ ml: "auto" }}>
                    <Chip
                        label="Seller"
                        size="small"
                        variant="outlined"
                        sx={{
                            fontSize: "11px",
                            fontWeight: 500,
                            borderColor: "#2196f3",
                            color: "#2196f3",
                            height: 24,
                        }}
                    />
                </Box>
            </Box>

            <Grid container spacing={2} alignItems="center">
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: "13px", color: "#1976d2" }}>
                        Mohamed Mamduh
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#777" }}>
                        Lead No: 14856
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Phone sx={{ fontSize: 16, color: "#666" }} />
                        <Typography sx={{ fontSize: "13px" }}>+971 55 558582750</Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Email sx={{ fontSize: 16, color: "#666" }} />
                        <Typography sx={{ fontSize: "13px" }}>
                            fahadnaqil11@outlook.com
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ mt: 2, display: "flex", gap: 3, flexWrap: "wrap" }}>
                <Typography sx={{ fontSize: "13px", color: "#1976d2" }}>
                    128 existing open leads
                </Typography>
                <Typography sx={{ fontSize: "13px" }}>Calls: 0</Typography>
                <Typography sx={{ fontSize: "13px" }}>Offers: 0</Typography>
            </Box>
        </Paper>


    );
};

export default ContactCard;
