import React, { useState, useEffect, useCallback } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Dialog,
  Chip,
  Skeleton,
} from "@mui/material";
import {
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import services from "@/services";

const BASE_URL = "https://admin.pkmkarjotarakan.com/uploads/hasil_survei/";

const HasilSurvei = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await services.hasilSurvei.getall();
        if (response.status === "success") setData(response.data);
      } catch (error) {
        console.error("Gagal mengambil data hasil survei:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const goPrev = useCallback(() => {
    setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + data.length) % data.length }));
  }, [data.length]);

  const goNext = useCallback(() => {
    setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % data.length }));
  }, [data.length]);

  useEffect(() => {
    if (!lightbox.open) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox.open, goPrev, goNext]);

  const currentItem = data[lightbox.index];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Hasil Survei Kepuasan Masyarakat"
        description="Transparansi data hasil survei kepuasan masyarakat terhadap layanan Puskesmas Karang Rejo."
      />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key="survei"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}>
            
            <Grid container spacing={3}>
              {loading
                ? [...Array(6)].map((_, i) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                      <Skeleton variant="rectangular" height={260} sx={{ borderRadius: 4 }} />
                      <Skeleton variant="text" sx={{ mt: 1 }} width="60%" />
                    </Grid>
                  ))
                : data.length > 0
                ? data.map((item, index) => (
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                      <Card
                        onClick={() => openLightbox(index)}
                        sx={{
                          borderRadius: 4,
                          overflow: "hidden",
                          cursor: "pointer",
                          position: "relative",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                          border: "1px solid rgba(0,0,0,0.05)",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                            "& .photo-overlay": { opacity: 1 },
                          },
                        }}>
                        <Box sx={{ height: 260, overflow: "hidden", bgcolor: "#f1f5f9" }}>
                          <CardMedia
                            component="img"
                            image={`${BASE_URL}${item.nama_file}`}
                            alt={item.judul}
                            loading="lazy"
                            sx={{
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.5s ease",
                              ".MuiCard-root:hover &": { transform: "scale(1.08)" },
                            }}
                          />
                        </Box>
                        <Box
                          className="photo-overlay"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(25, 59, 104, 0.8) 0%, rgba(25, 59, 104, 0.2) 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          }}>
                          <ZoomInIcon sx={{ color: "white", fontSize: 40, mb: 1 }} />
                        </Box>
                        <Box sx={{ p: 2, bgcolor: "white" }}>
                          <Typography sx={{ fontWeight: 700, color: "#193b68", fontSize: "0.95rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                            {item.judul}
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  ))
                : (
                  <Grid item xs={12}>
                    <Box sx={{ textAlign: "center", py: 10 }}>
                      <Typography color="text.secondary">Belum ada data Hasil Survei.</Typography>
                    </Box>
                  </Grid>
                )}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* ===== LIGHTBOX ===== */}
      <Dialog
        fullScreen
        open={lightbox.open}
        onClose={closeLightbox}
        transitionDuration={400}
        PaperProps={{ 
          sx: { 
            backgroundColor: "transparent", 
            boxShadow: "none",
            overflow: "hidden"
          } 
        }}>
        <Box sx={{
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.85)", 
          backdropFilter: "blur(12px)",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          position: "relative"
        }}>
          <IconButton
            onClick={closeLightbox}
            sx={{ 
              position: "absolute", 
              top: { xs: 16, sm: 24 }, 
              right: { xs: 16, sm: 24 }, 
              color: "white", 
              bgcolor: "rgba(255,255,255,0.1)", 
              backdropFilter: "blur(8px)",
              zIndex: 10, 
              transition: "all 0.3s ease",
              "&:hover": { 
                bgcolor: "rgba(255,255,255,0.25)", 
                transform: "scale(1.1) rotate(90deg)" 
              } 
            }}>
            <CloseIcon />
          </IconButton>

          {data.length > 0 && (
            <Box sx={{ position: "absolute", top: { xs: 20, sm: 30 }, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
              <Chip
                label={`${lightbox.index + 1} / ${data.length}`}
                sx={{ 
                  bgcolor: "rgba(255,255,255,0.15)", 
                  backdropFilter: "blur(10px)",
                  color: "white", 
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  px: 1,
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              />
            </Box>
          )}

          <IconButton
            onClick={goPrev}
            sx={{ 
              position: "absolute", 
              left: { xs: 8, sm: 32 }, 
              color: "white", 
              bgcolor: "rgba(255,255,255,0.1)", 
              backdropFilter: "blur(8px)",
              width: { xs: 44, sm: 56 }, 
              height: { xs: 44, sm: 56 }, 
              zIndex: 10,
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
              "&:hover": { 
                bgcolor: "rgba(255,255,255,0.25)", 
                transform: "scale(1.1) translateX(-4px)" 
              } 
            }}>
            <ChevronLeft sx={{ fontSize: { xs: 30, sm: 36 } }} />
          </IconButton>

          <AnimatePresence mode="wait">
            {currentItem && (
              <motion.div
                key={lightbox.index}
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -30 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                  padding: "80px 20px"
                }}>
                <Box
                  component="img"
                  src={`${BASE_URL}${currentItem.nama_file}`}
                  alt={currentItem.judul}
                  sx={{ 
                    maxWidth: "100%", 
                    maxHeight: "calc(100vh - 160px)", 
                    objectFit: "contain", 
                    borderRadius: 3, 
                    boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                />
                <Typography 
                  sx={{ 
                    color: "white", 
                    mt: { xs: 3, sm: 4 }, 
                    fontWeight: 500, 
                    fontSize: { xs: "1rem", sm: "1.25rem" }, 
                    textAlign: "center",
                    maxWidth: { xs: "90%", md: "70%" },
                    textShadow: "0 4px 12px rgba(0,0,0,0.8)",
                    letterSpacing: "0.02em"
                  }}>
                  {currentItem.judul}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>

          <IconButton
            onClick={goNext}
            sx={{ 
              position: "absolute", 
              right: { xs: 8, sm: 32 }, 
              color: "white", 
              bgcolor: "rgba(255,255,255,0.1)", 
              backdropFilter: "blur(8px)",
              width: { xs: 44, sm: 56 }, 
              height: { xs: 44, sm: 56 }, 
              zIndex: 10,
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
              "&:hover": { 
                bgcolor: "rgba(255,255,255,0.25)", 
                transform: "scale(1.1) translateX(4px)" 
              } 
            }}>
            <ChevronRight sx={{ fontSize: { xs: 30, sm: 36 } }} />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
};

export default HasilSurvei;
