import React, { useEffect, useState } from "react";
import { Close, EditCalendar, PlayArrow, Search } from "@mui/icons-material";
import {
  TextField,
  InputAdornment,
  Box,
  Container,
  Typography,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player";
import img1 from "@/assets/img/foto1.jpeg";
import img2 from "@/assets/img/foto2.jpeg";
import { useNavigate } from "react-router-dom";
import img3 from "@/assets/img/foto3.jpeg";
import img4 from "@/assets/img/foto4.jpeg";
import img5 from "@/assets/img/foto5.jpeg";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const images = [img1, img2, img3, img4, img5];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const gold = "#10b981";
  const navy = "#0d9488";

  // Efek untuk mengganti gambar setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Durasi diperpanjang agar animasi terasa lebih tenang
    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}>
      {/* Layer Gambar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* Deep Navy Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(to bottom, rgba(13, 148, 136, 0.6), ${navy})`,
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 2 }}>
        <MotionTypography
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          variant="h1"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "2.5rem", md: "4rem" },
            letterSpacing: "-0.02em",
          }}>
          Puskesmas Karang Rejo
        </MotionTypography>

        <MotionTypography
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          variant="h5"
          sx={{
            color: "rgba(255,255,255,0.9)",
            mb: 6,
            fontWeight: 300,
            fontSize: { xs: "1rem", md: "1.25rem" },
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}>
          Pelayanan Kami Hari Ini Lebih Baik Dari Kemarin
        </MotionTypography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          <Button
            size="large"
            startIcon={<EditCalendar />}
            onClick={() => navigate("/antrian-online")}
            sx={{
              borderRadius: "50px",
              px: 5,
              py: 1.8,
              bgcolor: gold,
              color: navy,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 700,
              boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": { bgcolor: "#c5a028", transform: "translateY(-4px)" },
            }}>
            Daftar Online
          </Button>

          <Button
            size="large"
            startIcon={<PlayArrow />}
            onClick={handleOpen}
            sx={{
              borderRadius: "50px",
              px: 5,
              py: 1.8,
              color: "white",
              border: `1px solid ${gold}`,
              backdropFilter: "blur(10px)",
              bgcolor: "rgba(255,255,255,0.05)",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 500,
              "&:hover": {
                bgcolor: "rgba(16, 185, 129, 0.2)",
                borderColor: gold,
              },
            }}>
            Lihat Video Profil
          </Button>
        </Box>

        {/* Dot Indicator */}
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            mt: 6,
          }}>
          {images.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              sx={{
                width: idx === currentIndex ? 28 : 8,
                height: 8,
                borderRadius: "4px",
                bgcolor: idx === currentIndex ? gold : "rgba(255,255,255,0.4)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                "&:hover": { bgcolor: gold, opacity: 0.8 },
              }}
            />
          ))}
        </Box>
      </Container>

      {/* Scroll Down Arrow */}
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 100%": { transform: "translateX(-50%) translateY(0)" },
            "50%": { transform: "translateX(-50%) translateY(-10px)" },
          },
        }}>
        <Box
          sx={{
            width: 28,
            height: 44,
            border: `2px solid rgba(255,255,255,0.5)`,
            borderRadius: "14px",
            display: "flex",
            justifyContent: "center",
            pt: 1,
          }}>
          <Box
            sx={{
              width: 4,
              height: 8,
              borderRadius: "2px",
              bgcolor: gold,
              animation: "scrollDot 2s infinite",
              "@keyframes scrollDot": {
                "0%": { opacity: 1, transform: "translateY(0)" },
                "100%": { opacity: 0, transform: "translateY(12px)" },
              },
            }}
          />
        </Box>
      </Box>

      {/* MODAL VIDEO DENGAN STYLE GLASS */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition // Penting untuk animasi yang lebih smooth
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)",
        }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }>
          <Box
            sx={{
              width: { xs: "95vw", md: "800px" },
              bgcolor: "black", // Background hitam pekat lebih aman
              borderRadius: 4,
              overflow: "hidden",
              aspectRatio: "16/9",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              position: "relative",
            }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
                zIndex: 10,
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": { bgcolor: "rgba(255,0,0,0.6)" }, // Hover merah sedikit lebih intuitif
              }}>
              <Close />
            </IconButton>

            {/* PENGGUNAAN TERNARY UNTUK MENGHENTIKAN IFRAME SAAT MODAL CLOSED */}
            {open && (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/As4YGGFiXUU?autoplay=1"
                title="Video Profil"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </Box>
        </motion.div>
      </Modal>
    </Box>
  );
};

export default HeroSection;
