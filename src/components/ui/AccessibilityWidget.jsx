import React, { useState } from "react";
import {
  Fab,
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Tooltip,
  ToggleButtonGroup,
  ToggleButton
} from "@mui/material";
import {
  AccessibilityNew,
  Close,
  FormatSize,
  Contrast,
  FontDownload,
  RestartAlt,
} from "@mui/icons-material";
import { useAccessibility } from "../../contexts/AccessibilityContext";

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const {
    textSize,
    setTextSize,
    highContrast,
    toggleHighContrast,
    dyslexicFont,
    toggleDyslexicFont,
    resetAccessibility
  } = useAccessibility();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleTextSizeChange = (event, newSize) => {
    if (newSize !== null) {
      setTextSize(newSize);
    }
  };

  return (
    <>
      <Tooltip title="Menu Aksesibilitas" placement="right">
        <Fab
          color="primary"
          aria-label="aksesibilitas"
          onClick={toggleDrawer(true)}
          sx={{
            position: "fixed",
            bottom: 32,
            left: 32, // positioned on the left, while scroll to top is on right
            bgcolor: "#0284c7",
            color: "white",
            "&:hover": { bgcolor: "#0369a1" },
            zIndex: 1300,
            boxShadow: "0 10px 25px rgba(2, 132, 199, 0.5)",
          }}
        >
          <AccessibilityNew />
        </Fab>
      </Tooltip>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 320, p: 2 }} role="presentation">
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold" color="#193b68" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessibilityNew color="primary" />
              Aksesibilitas
            </Typography>
            <IconButton onClick={toggleDrawer(false)} size="small">
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 2 }} />

          <List sx={{ pt: 0 }}>
            {/* Ukuran Teks */}
            <ListItem sx={{ flexDirection: "column", alignItems: "flex-start", py: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", width: "100%", mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <FormatSize />
                </ListItemIcon>
                <ListItemText primary="Ukuran Teks" primaryTypographyProps={{ fontWeight: 600 }} />
              </Box>
              <Box sx={{ width: "100%", mt: 1 }}>
                <ToggleButtonGroup
                  value={textSize}
                  exclusive
                  onChange={handleTextSizeChange}
                  aria-label="ukuran teks"
                  fullWidth
                  size="small"
                >
                  <ToggleButton value="small" aria-label="kecil">
                    Kecil
                  </ToggleButton>
                  <ToggleButton value="medium" aria-label="sedang">
                    Sedang
                  </ToggleButton>
                  <ToggleButton value="large" aria-label="besar">
                    Besar
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            </ListItem>

            <Divider component="li" />

            {/* Kontras Tinggi */}
            <ListItem sx={{ py: 2 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Contrast />
              </ListItemIcon>
              <ListItemText primary="Kontras Tinggi" primaryTypographyProps={{ fontWeight: 600 }} />
              <ListItemSecondaryAction>
                <Switch edge="end" onChange={toggleHighContrast} checked={highContrast} color="primary" />
              </ListItemSecondaryAction>
            </ListItem>

            <Divider component="li" />

            {/* Font Disleksia */}
            <ListItem sx={{ py: 2 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <FontDownload />
              </ListItemIcon>
              <ListItemText primary="Font Ramah Disleksia" primaryTypographyProps={{ fontWeight: 600 }} />
              <ListItemSecondaryAction>
                <Switch edge="end" onChange={toggleDyslexicFont} checked={dyslexicFont} color="primary" />
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Button
              variant="outlined"
              color="error"
              startIcon={<RestartAlt />}
              onClick={resetAccessibility}
              fullWidth
              sx={{ borderRadius: 8, textTransform: "none", fontWeight: 600 }}
            >
              Reset Pengaturan
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default AccessibilityWidget;
