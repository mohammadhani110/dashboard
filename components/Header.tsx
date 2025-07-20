"use client"

import React, { useState } from "react"
import {
    AppBar,
    Box,
    Button,
    Chip,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Stack,
} from "@mui/material"
import {
    ArrowBack,
    ArrowForward,
    Cancel,
    Edit,
    Email,
    KeyboardArrowDown,
    Menu,
    Person,
    WhatsApp,
    Info,
} from "@mui/icons-material"

interface MainContentProps {
    handleDrawerToggle: () => void
}

const Header = ({ handleDrawerToggle }: MainContentProps) => {
    const theme = useTheme()
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"))
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false)

    const toggleRightDrawer = () => {
        setRightDrawerOpen(!rightDrawerOpen)
    }

    const mobileDrawerContent = (
        <Box p={2} width="260px">
            <Typography variant="subtitle1" mb={1}>Quick Actions</Typography>
            <Stack spacing={1}>
                <Stack direction="row" spacing={1} flexWrap="wrap">
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
                </Stack>

                <Button
                    variant="outlined"
                    size="small"
                    endIcon={<KeyboardArrowDown />}
                    sx={{ fontSize: "11px", textTransform: "none", justifyContent: "flex-start" }}
                >
                    Open
                </Button>
                <Button
                    variant="outlined"
                    size="small"
                    endIcon={<KeyboardArrowDown />}
                    sx={{ fontSize: "11px", textTransform: "none", justifyContent: "flex-start" }}
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
                {isMobile && (
                    <Stack direction="row" spacing={1}>
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
                    </Stack>
                )}
            </Stack>
        </Box>
    )

    return (
        <>
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: "white",
                    borderBottom: "1px solid #e0e0e0",
                    color: "black",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between", minHeight: "56px !important" }}>
                    {/* Left side: Menu + Name */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        {isTablet && (
                            <IconButton
                                color="inherit"
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
                        </Box>
                        {!isMobile && (
                            <Box sx={{ display: "flex", gap: 0.5 }}>
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
                        )}
                    </Box>

                    {/* Right side: full controls on desktop, actions icon on mobile */}
                    {isTablet ? (
                        <IconButton
                            color="inherit"
                            edge="end"
                            onClick={toggleRightDrawer}
                            sx={{ ml: 1 }}
                        >
                            <Info />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", gap: 1, alignItems: "center", justifyContent: 'space-between' }}>

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
                    )}
                </Toolbar>
            </AppBar>

            {/* Right-side Drawer for mobile actions */}
            <Drawer
                anchor="right"
                open={rightDrawerOpen}
                onClose={toggleRightDrawer}
                ModalProps={{ keepMounted: true }}
            >
                {mobileDrawerContent}
            </Drawer>
        </>
    )
}

export default Header
