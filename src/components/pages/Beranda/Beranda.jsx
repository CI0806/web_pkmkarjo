import React from "react";
import { Box, Typography, Button, Grid, Paper, Container } from "@mui/material";
import {
  Newspaper,
  Users,
  Award,
  CalendarDays,
  Phone,
  Activity,
  ArrowRight,
  AlertCircle,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import HeroSection from "@/components/layouts/HeroSection";
import NewsSection from "@/components/layouts/NewsSection";
import { CalendarViewWeekRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MotionPaper = motion(Paper);

const Dashboard = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <CalendarViewWeekRounded size={32} />,
      title: "Jadwal Pelayanan",
      desc: "Informasi mengenai jadwal layanan di Puskesmas Karang Rejo.",
      path: "/jadwal",
    },
    {
      icon: <Users size={32} />,
      title: "Pimpinan Puskesmas",
      desc: "Mengenal lebih dekat pimpinan Puskesmas Karang rejo.",
      path: "/pimpinan",
    },
    {
      icon: <AlertCircle size={32} />,
      title: "Pengumuman",
      desc: "Informasi pengumuman di Puskesmas Karang Rejo.",
      path: "/informasi/pengumuman",
    },
  ];

  const quickLinks = [
    { icon: <Activity size={28} />, label: "Layanan Pasien", path: "/klaster1" },
    { icon: <Users size={28} />, label: "Program Promotif", path: "/klaster5" },
    { icon: <CalendarDays size={28} />, label: "Jadwal Layanan", path: "/jadwal" },
    { icon: <Phone size={28} />, label: "Kontak Darurat", path: "/contact-person" },
  ];

  return (
    <Box sx={{ pb: 0, bgcolor: "#f4f7fb", overflowX: "hidden" }}>
      <HeroSection />

      {/* Feature Cards (Diperbarui dengan efek Hover dan Gradien) */}
      <Container
        maxWidth="lg"
        sx={{ mt: { xs: -6, md: -10 }, position: "relative", zIndex: 10 }}>
        <Grid container spacing={4}>
          {features.map((item, index) => (
            <Grid item size={{ xs: 12, md: 4 }} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -12,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                sx={{
                  p: 4,
                  borderRadius: 5,
                  height: "100%",
                  bgcolor: "white",
                  // Border gradient halus untuk kesan profesional
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                  },
                }}>
                <Box
                  sx={{
                    color: "white",
                    mb: 3,
                    p: 2,
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                    borderRadius: 4,
                    width: "fit-content",
                    boxShadow: "0 8px 16px rgba(59, 130, 246, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    mb: 1.5,
                    color: "#0f172a",
                    letterSpacing: "-0.02em",
                  }}>
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.7,
                    flexGrow: 1,
                  }}>
                  {item.desc}
                </Typography>

                <Button
                  onClick={() => navigate(item.path)}
                  sx={{
                    mt: 3,
                    display: "flex",
                    alignItems: "center",
                    color: "#3b82f6",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                  }}>
                  Pelajari Lebih Lanjut{" "}
                  <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                </Button>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* Promosi Telekonseling PMBA & VCT */}
      <Container maxWidth="lg" sx={{ mt: 4, position: "relative", zIndex: 10 }}>
        <MotionPaper
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 6,
            background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
            border: "1px solid rgba(99, 102, 241, 0.2)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.3)",
            position: "relative",
            overflow: "hidden"
          }}>
          <Box
            sx={{
              position: "absolute",
              bottom: -40,
              left: -40,
              width: 150,
              height: 150,
              borderRadius: "50%",
              background: "rgba(99, 102, 241, 0.1)",
              filter: "blur(30px)",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 3, flex: 1, position: "relative", zIndex: 2 }}>
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
              <Box sx={{ p: 2, bgcolor: "#4f46e5", color: "white", borderRadius: 4, boxShadow: "0 8px 16px rgba(79, 70, 229, 0.3)" }}>
                <ShieldCheck size={32} />
              </Box>
              <Box sx={{ p: 2, bgcolor: "white", color: "#4f46e5", borderRadius: 4, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.05)", mt: 2 }}>
                <MessageCircle size={32} />
              </Box>
            </Box>
            <Box>
              <Typography variant="overline" sx={{ fontWeight: 800, color: "#4f46e5", letterSpacing: 1.5 }}>
                LAYANAN TELEKONSELING
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#1e293b", mb: 1, mt: 0.5 }}>
                ViTA: Konseling PMBA & VCT Online
              </Typography>
              <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.6 }}>
                <strong>ViTA (Virtual interaksi & Tele-Asuhan Puskesmas Karang Rejo)</strong> hadir dengan aman, anonim, dan terenkripsi. Dapatkan layanan konsultasi VCT dan gizi balita (PMBA) dengan tenaga kesehatan profesional kami tanpa harus datang ke puskesmas. Privasi Anda adalah prioritas kami.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ position: "relative", zIndex: 2, minWidth: { md: "200px" }, textAlign: { xs: "center", md: "right" } }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => window.open("https://vita.pkmkarjotarakan.com", "_blank")}
              endIcon={<ArrowRight />}
              sx={{
                bgcolor: "#4f46e5",
                color: "white",
                fontWeight: 700,
                px: 3,
                py: 1.5,
                borderRadius: 8,
                "&:hover": {
                  bgcolor: "#4338ca",
                  transform: "translateX(4px)",
                },
                transition: "all 0.3s ease",
              }}>
              Mulai Konseling
            </Button>
          </Box>
        </MotionPaper>
      </Container>

      {/* Info & Quick Links Section (Tampilan Jauh Lebih Bersih) */}
      <Container maxWidth="lg" sx={{ mt: 12, mb: 6 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Typography
                variant="overline"
                sx={{ fontWeight: 800, color: "#3b82f6", letterSpacing: 1.5 }}>
                Puskesmas Karang Rejo
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  color: "#0f172a",
                  lineHeight: 1.2,
                }}>
                Pusat Pelayanan Kesehatan{" "}
                <Box component="span" sx={{ color: "#3b82f6" }}>
                  Terintegrasi & Bermutu
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#475569",
                  fontSize: "1.1rem",
                  lineHeight: 1.8,
                  mb: 4,
                }}>
                Mengemban misi pelayanan yang transparan dan responsif, kami menyediakan informasi akurat mengenai program kesehatan dan jadwal kegiatan terbaru. Berlandaskan tata nilai SMART, kami berkomitmen agar pelayanan kami hari ini senantiasa lebih baik dari kemarin.
              </Typography>
              {/* <Button
                variant="outlined"
                endIcon={<ArrowRight />}
                sx={{
                  borderRadius: 8,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  borderColor: "#3b82f6",
                  color: "#3b82f6",
                  "&:hover": { bgcolor: "#eff6ff" },
                }}>
                Tentang Kami
              </Button> */}
            </motion.div>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {quickLinks.map((menu, i) => (
                <Grid item size={{ xs: 6 }} key={i}>
                  <MotionPaper
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => navigate(menu.path)}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 4,
                      bgcolor: "white",
                      color: "#475569",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(59, 130, 246, 0.08)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1.5,
                      "&:hover": {
                        bgcolor: "#3b82f6",
                        color: "white",
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.25)",
                        "& .quick-icon": { color: "white" },
                      },
                    }}>
                    <Box className="quick-icon" sx={{ color: "#3b82f6", transition: "color 0.3s" }}>
                      {menu.icon}
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {menu.label}
                    </Typography>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <NewsSection />
    </Box>
  );
};

export default Dashboard;
