"use client"

import React, { useState } from "react"
import {
  Box,
  Paper,
  Typography,
  Tabs,
  Tab,
  Button,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Chip,
  Checkbox,
  FormControlLabel,
  Divider,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material"
import { Task, LocalOffer, History, ExpandMore, ExpandLess, KeyboardArrowDown } from "@mui/icons-material"
import TasksPanel from "./TasksPanel"
import OffersPanel from "./OfferPanel"
import ActivityHistoryPanel from "./ActivitiyHistoryPanel"
import OfferHistoryPanel from "./OfferHistoryPanel"

const rightSidebarWidth = 350

export default function RightSidebar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"))
  const [tasksExpanded, setTasksExpanded] = useState(true)
  const [offersExpanded, setOffersExpanded] = useState(true)
  const [historyExpanded, setHistoryExpanded] = useState(true)
  const [offerHistoryExpanded, setOfferHistoryExpanded] = useState(true)
  const [selectedTab, setSelectedTab] = useState(0)

  const activityItems = [
    {
      id: 1,
      type: "Assigned To : Faizan Ur Rehman | Transferred",
      description:
        "Transferred from: Abbas Ali Transferred to: Faizan Ur Rehman Transfer Remarks: www.goyzer.com How are you doing show less",
      date: "30 Oct 2024",
      time: "11:35",
      completed: true,
    },
    {
      id: 2,
      type: "Assigned To : Faizan Ur Rehman | Notes",
      description: 'Lead Stage Change From " " to "Viewing" aadaad',
      date: "30 Oct 2024",
      time: "11:35",
      completed: false,
    },
    {
      id: 3,
      type: "Assigned To : Abbas Ali | Transferred",
      description:
        "Transferred from: Abdullah Rehmatullah Transferred to: Abbas Ali Transfer Remarks: www.goyzer.com How are you doing show less",
      date: "28 Oct 2024",
      time: "16:34",
      completed: true,
    },
    {
      id: 4,
      type: "Assigned To : Abbas Ali | Transferred",
      description: "Transferred from: Abdullah Rehmatullah Transferred to: Abbas Ali Transfer Remarks:",
      date: "25 Sep 2024",
      time: "11:12",
      completed: true,
    },
  ]

  const sidebarContent = (
    <Stack sx={{ height: "100%", overflow: "auto", backgroundColor: "#f8f9fa" }} gap={2}>
      {/* Tasks Section */}
      <TasksPanel />

      {/* Activity History Section */}
      <ActivityHistoryPanel />

      {/* Offers Section */}
      <OffersPanel />

      {/* Offer History Section */}
      <OfferHistoryPanel />
    </Stack>
  )

  if (isMobile) {
    return null // Hide right sidebar on mobile
  }

  return (
    <Box
      sx={{
        width: "100%",
        flex: 1,
        flexShrink: 0,
        backgroundColor: "#f8f9fa",
      }}
    >
      {sidebarContent}
    </Box>
  )
}
