"use client"

import { useState } from "react"
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Sidebar from "@/components/Sidebar"
import MainContent from "@/components/MainContent"
import RightSidebar from "@/components/RightSidebar"
import theme from "@/lib/theme"


export default function CRMDashboard() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <MainContent handleDrawerToggle={handleDrawerToggle} />
        {/* <RightSidebar /> */}
      </Box>
    </ThemeProvider>
  )
}
