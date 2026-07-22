import React, { useEffect, useState } from "react";
import { Close, EditCalendar, PlayArrow, VerifiedUser, LocalHospital, AssignmentTurnedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  Typography,
  Button,
  Modal,
  IconButton,
  Grid,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "@/assets/img/foto1.jpeg";
import img2 from "@/assets/img/foto2.jpeg";
import img3 from "@/assets/img/foto3.jpeg";
import img4 from "@/assets/img/foto4.jpeg";
import img5 from "@/assets/img/foto5.jpeg";

const MotionTypography = motion(Typography);
const images = [img1, img2, img3, img4, img5];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const gold = "#D4AF37";
  const navy = "#193b68";

  // Efek untuk mengganti gambar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: <LocalHospital fontSize="large" />, title: "Fasilitas Modern", desc: "Didukung peralatan medis terkini" },
    { icon: <VerifiedUser fontSize="large" />, title: "Tenaga Profesional", desc: "Dokter dan perawat tersertifikasi" },
    { icon: <AssignmentTurnedIn fontSize="large" />, title: "Layanan 24 Jam", desc: "Siap melayani IGD setiap saat" }
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        color: "white",
        pb: { xs: 15, md: 8 }
      }}>
      
      {/* Background Image Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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

      {/* Elegant Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, rgba(17, 38, 67, 0.95) 0%, rgba(25, 59, 104, 0.7) 50%, rgba(0, 0, 0, 0.2) 100%)`,
          zIndex: 1,
        }}
      />

      {/* Main Content Area */}
      <Container
        maxWidth="lg"
        sx={{ 
          position: "relative", 
          zIndex: 2, 
          pt: { xs: 12, md: 20 },
          pb: 8,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
        
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            
            {/* Pill Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Box sx={{ 
                display: "inline-block", 
                px: 2, 
                py: 0.8, 
                borderRadius: "50px", 
                bgcolor: "rgba(212, 175, 55, 0.15)", 
                border: `1px solid rgba(212, 175, 55, 0.4)`,
                mb: 3,
                backdropFilter: "blur(10px)"
              }}>
                <Typography variant="caption" sx={{ color: gold, fontWeight: 800, letterSpacing: 1.5 }}>
                  PUSAT PELAYANAN KESEHATAN TERINTEGRASI
                </Typography>
              </Box>
            </motion.div>

            <MotionTypography
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              variant="h1"
              sx={{
                fontWeight: 900,
                mb: 2,
                fontSize: { xs: "2.8rem", md: "4.5rem", lg: "5.5rem" },
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                textShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}>
              Puskesmas<br />
              <Box component="span" sx={{ color: gold }}>Karang Rejo</Box>
            </MotionTypography>

            <MotionTypography
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              variant="h5"
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 6,
                fontWeight: 400,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                maxWidth: "600px",
                lineHeight: 1.6,
                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
              }}>
              Berkomitmen memberikan pelayanan prima. Pelayanan kami hari ini harus selalu lebih baik dari kemarin.
            </MotionTypography>

            {/* Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  size="large"
                  startIcon={<EditCalendar />}
                  onClick={() => navigate("/antrian-online")}
                  sx={{
                    borderRadius: "50px",
                    px: { xs: 4, md: 5 },
                    py: 1.8,
                    bgcolor: gold,
                    color: navy,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    boxShadow: "0 15px 30px rgba(212, 175, 55, 0.4)",
                    transition: "all 0.3s ease",
                    "&:hover": { bgcolor: "#facc15", transform: "translateY(-4px)", boxShadow: "0 20px 40px rgba(212, 175, 55, 0.6)" },
                  }}>
                  Daftar Online
                </Button>

                <Button
                  size="large"
                  startIcon={<PlayArrow />}
                  onClick={handleOpen}
                  sx={{
                    borderRadius: "50px",
                    px: { xs: 4, md: 5 },
                    py: 1.8,
                    color: "white",
                    border: `2px solid rgba(255,255,255,0.2)`,
                    backdropFilter: "blur(10px)",
                    bgcolor: "rgba(255,255,255,0.05)",
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.15)",
                      borderColor: "white",
                      transform: "translateY(-4px)"
                    },
                  }}>
                  Video Profil
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Side Empty for visual balance (Background shows clearly here) */}
          <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
             {/* Dot Indicator di sebelah kanan agak bawah */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, alignItems: "flex-end", pr: 4, mt: 10 }}>
              {images.map((_, idx) => (
                <Box
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  sx={{
                    height: idx === currentIndex ? 32 : 8,
                    width: 8,
                    borderRadius: "4px",
                    bgcolor: idx === currentIndex ? gold : "rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    "&:hover": { bgcolor: gold, opacity: 0.8 },
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Glass Cards at the Bottom */}
      <Container maxWidth="lg" sx={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%) translateY(50%)", zIndex: 10, display: { xs: "none", lg: "block" } }}>
        <Grid container spacing={3}>
          {features.map((feat, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + (index * 0.2), duration: 0.6 }}>
                <Box sx={{ 
                  bgcolor: "rgba(255,255,255,0.1)", 
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "20px",
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.2)", transform: "translateY(-5px)" }
                }}>
                  <Box sx={{ color: gold }}>{feat.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "white" }}>{feat.title}</Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>{feat.desc}</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* MODAL VIDEO */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(10px)",
        }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }>
          <Box
            sx={{
              width: { xs: "95vw", md: "900px" },
              bgcolor: "black",
              borderRadius: 4,
              overflow: "hidden",
              aspectRatio: "16/9",
              boxShadow: "0 30px 60px rgba(0,0,0,0.8)",
              position: "relative",
              border: `1px solid rgba(255,255,255,0.1)`
            }}>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "white",
                zIndex: 10,
                bgcolor: "rgba(0,0,0,0.5)",
                "&:hover": { bgcolor: "#ef4444" },
              }}>
              <Close />
            </IconButton>

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
