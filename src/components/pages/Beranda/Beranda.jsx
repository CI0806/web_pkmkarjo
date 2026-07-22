import React from "react";
import { Box, Typography, Button, Grid, Paper, Container, Avatar } from "@mui/material";
import {
  Users,
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
      desc: "Informasi mengenai jadwal layanan poli di Puskesmas Karang Rejo.",
      path: "/jadwal",
      color: "#193b68"
    },
    {
      icon: <Users size={32} />,
      title: "Pimpinan Puskesmas",
      desc: "Mengenal lebih dekat struktur kepemimpinan Puskesmas Karang rejo.",
      path: "/pimpinan",
      color: "#D4AF37"
    },
    {
      icon: <AlertCircle size={32} />,
      title: "Pengumuman",
      desc: "Pusat informasi terbaru dan pengumuman penting bagi masyarakat.",
      path: "/informasi/pengumuman",
      color: "#50C878"
    },
  ];

  const quickLinks = [
    { icon: <Activity size={28} />, label: "Layanan Pasien", path: "/klaster1" },
    { icon: <Users size={28} />, label: "Program Promotif", path: "/klaster5" },
    { icon: <CalendarDays size={28} />, label: "Jadwal Layanan", path: "/jadwal" },
    { icon: <Phone size={28} />, label: "Kontak Darurat", path: "/contact-person" },
  ];

  return (
    <Box sx={{ pb: 0, bgcolor: "#f8fafc", overflowX: "hidden" }}>
      <HeroSection />

      {/* Feature Cards (Premium Glassmorphism Style) */}
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
                  boxShadow: `0 25px 50px -12px ${item.color}40`,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                sx={{
                  p: 4,
                  borderRadius: 6,
                  height: "100%",
                  bgcolor: "white",
                  border: "1px solid rgba(0,0,0,0.03)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
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
                    height: "6px",
                    background: `linear-gradient(90deg, ${item.color}, ${item.color}90)`,
                  },
                }}>
                
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    color: "white",
                    mb: 3,
                    background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}CC 100%)`,
                    boxShadow: `0 10px 20px ${item.color}40`,
                  }}>
                  {item.icon}
                </Avatar>

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
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    color: item.color,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    padding: 0,
                    "&:hover": { bgcolor: "transparent", opacity: 0.8 }
                  }}>
                  Pelajari Lebih Lanjut
                  <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                </Button>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>


      {/* Promosi Telekonseling PMBA */}
      <Container maxWidth="lg" sx={{ mt: 10, position: "relative", zIndex: 10 }}>
        <MotionPaper
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "32px",
            background: "linear-gradient(135deg, #193b68 0%, #112643 100%)",
            color: "white",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
            boxShadow: "0 30px 60px -15px rgba(25, 59, 104, 0.5)",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
          
          {/* Animated Background Orbs */}
          <Box sx={{ position: "absolute", top: -100, right: -50, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%)", filter: "blur(40px)", animation: "pulse 4s infinite" }} />
          <Box sx={{ position: "absolute", bottom: -100, left: -50, width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(25, 118, 210, 0.3) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <Box sx={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "30px 30px", opacity: 0.4 }} />

          <Box sx={{ display: "flex", alignItems: "flex-start", gap: { xs: 2, md: 4 }, flex: 1, position: "relative", zIndex: 2 }}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Box sx={{ position: "relative" }}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: "rgba(212,175,55,0.15)", border: "2px solid #D4AF37", boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)" }}>
                  <ShieldCheck size={40} color="#D4AF37" />
                </Avatar>
                {/* Glowing ring */}
                <Box sx={{ position: "absolute", inset: -5, borderRadius: "50%", border: "1px solid rgba(212,175,55,0.5)", animation: "spin 10s linear infinite", "@keyframes spin": { "100%": { transform: "rotate(360deg)" } } }} />
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5, flexWrap: "wrap" }}>
                <Typography variant="overline" sx={{ fontWeight: 800, color: "#D4AF37", letterSpacing: 2 }}>
                  INOVASI PELAYANAN PUBLIK
                </Typography>
                <Box sx={{ bgcolor: "rgba(255,255,255,0.1)", px: 1.5, py: 0.5, borderRadius: 2, border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(5px)" }}>
                  <Typography variant="caption" sx={{ fontWeight: 800, color: "white" }}>TELEKONSELING</Typography>
                </Box>
              </Box>
              
              <Typography variant="h3" sx={{ fontWeight: 900, color: "white", mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' }, letterSpacing: "-0.5px" }}>
                ViTA: Konseling PMBA Online
              </Typography>
              
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1.05rem", maxWidth: "600px" }}>
                <strong style={{ color: "#D4AF37" }}>ViTA (Virtual interaksi & Tele-Asuhan)</strong> hadir dengan aman, anonim, dan terenkripsi. Dapatkan layanan konsultasi gizi balita (PMBA) langsung dengan tenaga kesehatan profesional kami secara nyaman dari rumah Anda.
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ position: "relative", zIndex: 2, minWidth: { md: "220px" }, textAlign: { xs: "center", md: "right" } }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => window.open("https://vita.pkmkarjotarakan.com", "_blank")}
              endIcon={<ArrowRight />}
              sx={{
                bgcolor: "#D4AF37",
                color: "#193b68",
                fontWeight: 900,
                px: 5,
                py: 2.5,
                borderRadius: 50,
                fontSize: "1.1rem",
                boxShadow: "0 10px 20px rgba(212, 175, 55, 0.4), inset 0 -3px 0 rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: "#facc15",
                  transform: "translateY(-5px)",
                  boxShadow: "0 15px 30px rgba(212, 175, 55, 0.6), inset 0 -3px 0 rgba(0,0,0,0.1)",
                },
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}>
              Mulai Konseling
            </Button>
          </Box>
        </MotionPaper>
      </Container>

      {/* Info & Quick Links Section */}
      <Container maxWidth="lg" sx={{ mt: 12, mb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
              <Typography
                variant="overline"
                sx={{ fontWeight: 800, color: "#193b68", letterSpacing: 2 }}>
                Puskesmas Karang Rejo
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  color: "#0f172a",
                  lineHeight: 1.3,
                  fontSize: { xs: "2rem", md: "2.5rem" }
                }}>
                Pusat Pelayanan Kesehatan{" "}
                <Box component="span" sx={{ color: "#D4AF37", position: "relative" }}>
                  Terintegrasi & Bermutu
                  <Box sx={{ position: "absolute", bottom: -2, left: 0, width: "100%", height: "4px", bgcolor: "#D4AF37", borderRadius: 1 }} />
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
            </motion.div>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {quickLinks.map((menu, i) => (
                <Grid item size={{ xs: 6 }} key={i}>
                  <MotionPaper
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -6 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => navigate(menu.path)}
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 5,
                      bgcolor: "white",
                      color: "#1e293b",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.03)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      "&:hover": {
                        background: "linear-gradient(135deg, #193b68 0%, #112643 100%)",
                        color: "white",
                        boxShadow: "0 20px 40px rgba(25, 59, 104, 0.3)",
                        "& .quick-icon": { color: "#D4AF37", transform: "scale(1.2)" },
                      },
                    }}>
                    <Box className="quick-icon" sx={{ color: "#193b68", transition: "all 0.3s ease" }}>
                      {menu.icon}
                    </Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 800, fontSize: "0.95rem" }}>
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
