import React, { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  Fab,
  Zoom,
} from "@mui/material";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import TopBar from "./TopBar";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const MainLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}
    >
      <CssBaseline />
      <ScrollToTop />
      <TopBar />
      <Navbar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Box>

      <Footer />

      <Zoom in={showScrollTop}>
        <Fab
          size="medium"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            bgcolor: "#0d9488",
            color: "#10b981",
            boxShadow: "0 8px 24px rgba(13, 148, 136,0.4)",
            "&:hover": { bgcolor: "#254b7d" },
            zIndex: 1300,
          }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default MainLayout;