"use client"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import {
  Dashboard,
  Home,
  Apartment,
  Contacts,
  Person,
  Task,
  RequestPage,
  Assessment,
  Hotel,
  Business,
  Settings,
  AccountBalance,
  Add,
  ExpandMore,
} from "@mui/icons-material"

const drawerWidth = 200

interface SidebarProps {
  mobileOpen: boolean
  handleDrawerToggle: () => void
}

const menuItems = [
  { text: "Dashboard", icon: <Dashboard sx={{ fontSize: 18 }} />, active: false },
  { text: "Property", icon: <Home sx={{ fontSize: 18 }} />, active: false },
  { text: "Units", icon: <Apartment sx={{ fontSize: 18 }} />, active: false },
  { text: "Contacts", icon: <Contacts sx={{ fontSize: 18 }} />, active: false },
  { text: "Leads", icon: <Person sx={{ fontSize: 18 }} />, active: true },
  { text: "Tasks", icon: <Task sx={{ fontSize: 18 }} />, active: false },
  { text: "Requests", icon: <RequestPage sx={{ fontSize: 18 }} />, active: false },
  { text: "Reports", icon: <Assessment sx={{ fontSize: 18 }} />, active: false },
  { text: "Rentals", icon: <Hotel sx={{ fontSize: 18 }} />, active: false, hasSubmenu: true },
  { text: "Property Management", icon: <Business sx={{ fontSize: 18 }} />, active: false, hasSubmenu: true },
  { text: "CRM", icon: <Person sx={{ fontSize: 18 }} />, active: false, hasSubmenu: true },
  { text: "Short Stay", icon: <Hotel sx={{ fontSize: 18 }} />, active: false, hasSubmenu: true },
  { text: "Accounts", icon: <AccountBalance sx={{ fontSize: 18 }} />, active: false, hasSubmenu: true },
  { text: "Control Center", icon: <Settings sx={{ fontSize: 18 }} />, active: false, hasSubmenu: true },
]

export default function Sidebar({ mobileOpen, handleDrawerToggle }: SidebarProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: "white" }}>
      {/* Logo and User Info */}
      <Box sx={{ p: 2, borderBottom: "1px solid #e0e0e0" }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(45deg, #4fc3f7, #29b6f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: "white", fontWeight: "bold", fontSize: "14px" }}>
              G
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2", fontSize: "16px" }}>
            Goyzer
          </Typography>
        </Box>
        <Typography variant="caption" color="textSecondary" sx={{ fontSize: "11px" }}>
          United Arab Emirates
        </Typography>
        <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            Hello Faizan !
          </Typography>
          <Settings sx={{ ml: 1, fontSize: 16, color: "#666" }} />
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ p: 2, display: "flex", gap: 1 }}>
        <Button
          variant="contained"
          size="small"
          startIcon={<Add sx={{ fontSize: 16 }} />}
          sx={{
            backgroundColor: "#1976d2",
            fontSize: "12px",
            textTransform: "none",
            minWidth: "auto",
            px: 2,
          }}
        >
          New
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#1976d2",
            fontSize: "12px",
            textTransform: "none",
            minWidth: "32px",
            px: 1,
          }}
        >
          <Add sx={{ fontSize: 16 }} />
        </Button>
      </Box>

      {/* Sale Dropdown */}
      <Box sx={{ px: 2, mb: 1 }}>
        <Button
          variant="text"
          size="small"
          endIcon={<ExpandMore sx={{ fontSize: 16 }} />}
          sx={{
            color: "#1976d2",
            fontSize: "13px",
            textTransform: "none",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          Sale
        </Button>
      </Box>

      {/* Navigation Menu */}
      <List sx={{ flexGrow: 1, px: 1, py: 0 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              sx={{
                borderRadius: 1,
                backgroundColor: item.active ? "#e3f2fd" : "transparent",
                color: item.active ? "#1976d2" : "#333",
                py: 0.5,
                "&:hover": {
                  backgroundColor: item.active ? "#e3f2fd" : "#f5f5f5",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: item.active ? "#1976d2" : "#666",
                  minWidth: 32,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: "13px",
                  fontWeight: item.active ? 600 : 400,
                }}
              />
              {item.hasSubmenu && <ExpandMore sx={{ fontSize: 16, color: "#666" }} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "1px solid #e0e0e0",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  )
}
