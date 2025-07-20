"use client"

import {
  Box,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Button,
  Stack,
} from "@mui/material"
import Grid from "@mui/material/Grid"; // ✅ REQUIRED

import {
  Menu,
  Phone,
  Email,
  WhatsApp,
  ArrowBack,
  ArrowForward,
  Edit,
  Cancel,
  KeyboardArrowDown,
  Info,
  Person,
} from "@mui/icons-material"
import RightSidebar from "./RightSidebar"
import ContactCard from "./ContactCard";
import LeadCard from "./LeadCard";
import Header from "./Header";

interface MainContentProps {
  handleDrawerToggle: () => void
}

export default function MainContent({ handleDrawerToggle }: MainContentProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        width: { md: `calc(100% - 200px - 350px)` },
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Top Navigation */}
      {/* <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #e0e0e0",
          color: "black",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "56px !important" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
            )}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "#4caf50",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1,
                }}
              >
                <Typography sx={{ color: "white", fontSize: "10px", fontWeight: "bold" }}>=</Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "16px" }}>
                Mohamed Mamduh
              </Typography>
              <Box sx={{ ml: 2, display: "flex", gap: 0.5 }}>
                <IconButton size="small" sx={{ color: "#666" }}>
                  <Person sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton size="small" sx={{ color: "#666" }}>
                  <WhatsApp sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton size="small" sx={{ color: "#666" }}>
                  <Email sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton size="small" sx={{ color: "#666" }}>
                  <ArrowBack sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton size="small" sx={{ color: "#666" }}>
                  <ArrowForward sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Chip label="Cold" size="small" variant="outlined" sx={{ fontSize: "11px", height: "24px" }} />
            <Chip
              label="Warm"
              size="small"
              variant="outlined"
              sx={{ fontSize: "11px", height: "24px", color: "#ff9800", borderColor: "#ff9800" }}
            />
            <Chip
              label="Hot"
              size="small"
              variant="outlined"
              sx={{ fontSize: "11px", height: "24px", color: "#f44336", borderColor: "#f44336" }}
            />
            <Button
              variant="outlined"
              size="small"
              endIcon={<KeyboardArrowDown />}
              sx={{ fontSize: "11px", textTransform: "none", minWidth: "auto" }}
            >
              Open
            </Button>
            <Button
              variant="outlined"
              size="small"
              endIcon={<KeyboardArrowDown />}
              sx={{ fontSize: "11px", textTransform: "none", minWidth: "auto" }}
            >
              Working
            </Button>
            <Button
              variant="contained"
              size="small"
              startIcon={<Edit sx={{ fontSize: 14 }} />}
              sx={{ fontSize: "11px", textTransform: "none", backgroundColor: "#4caf50" }}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="error"
              startIcon={<Cancel sx={{ fontSize: 14 }} />}
              sx={{ fontSize: "11px", textTransform: "none" }}
            >
              Cancel
            </Button>
          </Box>
        </Toolbar>
      </AppBar> */}
      <Header handleDrawerToggle={handleDrawerToggle} />

      <Box sx={{ p: 2, display: "flex", flexDirection: { xs: "column", lg: "row" }, gap: 2 }}>
        <Stack sx={{ p: 2, flex: 1 }}>
          {/* Contact Card */}
          <ContactCard />
          {/* Lead Card */}
          <LeadCard />


        </Stack>
        <RightSidebar />
      </Box>
    </Box>
  )
}
