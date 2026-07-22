import React from "react";
import { Box, Typography, Container, Grid, Paper, Stack, Avatar } from "@mui/material";
import {
  Lightbulb,
  Target,
  ShieldCheck,
  Handshake,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { ViewComfyAltRounded } from "@mui/icons-material";

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

const VisiMisi = () => {
  const missionItems = [
    {
      title: "Mutu Pelayanan",
      desc: "Meningkatkan mutu pelayanan Kesehatan sesuai dengan standar pelayanan.",
      icon: <ShieldCheck size={32} />,
      color: "#0d9488",
    },
    {
      title: "Tata Kelola & Inovasi",
      desc: "Meningkatkan tata kelola pelayanan yang transparan, akuntabel dan responsif terhadap kebutuhan masyarakat.",
      icon: <Handshake size={32} />,
      color: "#10b981",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader title="Visi & Misi" />
      
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {/* Visi Section */}
        <MotionPaper
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          sx={{
            p: { xs: 4, md: 6 },
            mb: 8,
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(13, 148, 136, 0.15)",
            background: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Decorative Element */}
          <Box sx={{ position: "absolute", top: -40, right: -40, opacity: 0.1, color: "#10b981" }}>
             <Lightbulb size={240} />
          </Box>
          <Box sx={{ position: "absolute", bottom: -80, right: 100, width: 150, height: 150, bgcolor: "rgba(16, 185, 129,0.1)", borderRadius: "50%" }} />

          <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
            <Grid item size={{ xs: 12, md: 2 }} sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "#10b981",
                  color: "#0d9488",
                  boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)",
                }}
              >
                <Lightbulb size={40} />
              </Avatar>
            </Grid>
            <Grid item size={{ xs: 12, md: 10 }}>
              <Typography
                variant="overline"
                sx={{ fontWeight: 800, color: "#10b981", letterSpacing: 3, mb: 1, display: "block" }}
              >
                VISI PUSKESMAS
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: "white", fontSize: {xs: '2rem', md: '2.5rem'} }}>
                Visi Kami
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.6,
                  fontWeight: 600,
                  position: "relative",
                  pl: 3,
                  borderLeft: "4px solid #10b981"
                }}
              >
                "PUSAT PELAYANAN KESEHATAN TERINTEGRASI DAN BERMUTU."
              </Typography>
            </Grid>
          </Grid>
        </MotionPaper>

        {/* Misi Section */}
        <Box sx={{ mt: 10, mb: 10 }}>
          <Stack spacing={1} alignItems="center" sx={{ mb: 6, textAlign: "center" }}>
            <MotionBox 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
            >
              <Target size={36} color="#10b981" />
              <Typography variant="h4" sx={{ fontWeight: 900, color: "#0d9488" }}>
                Misi Puskesmas
              </Typography>
            </MotionBox>
            <Typography variant="body1" sx={{ color: "#64748b", maxWidth: "600px", fontSize: "1.1rem" }}>
              Strategi kami dalam mencapai Visi Puskesmas
            </Typography>
          </Stack>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4} justifyContent="center">
              {missionItems.map((item, index) => (
                <Grid item size={{ xs: 12, md: 6 }} key={index}>
                  <MotionPaper
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    sx={{
                      p: 5,
                      height: "100%",
                      borderRadius: 6,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.03)",
                      background: "#fff",
                      position: "relative",
                      transition: "all 0.3s ease",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0, left: 0, right: 0,
                        height: "6px",
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}90)`,
                        borderRadius: "24px 24px 0 0"
                      },
                      "&:hover": {
                        boxShadow: `0 25px 50px ${item.color}20`,
                      }
                    }}
                  >
                    <Avatar sx={{ 
                      width: 64, height: 64, 
                      color: item.color, 
                      bgcolor: `${item.color}15`, 
                      mb: 3,
                      boxShadow: `0 10px 20px ${item.color}15`
                    }}>
                      {item.icon}
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: "#1e293b" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.8, fontSize: "1.05rem" }}>
                      {item.desc}
                    </Typography>
                  </MotionPaper>
                </Grid>
              ))}
            </Grid>
          </MotionBox>
        </Box>

        {/* Tata Nilai Section */}
        <MotionPaper
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 8,
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            color: "#1e293b",
            boxShadow: "0 20px 50px rgba(13, 148, 136, 0.08)",
            border: "1px solid rgba(13, 148, 136, 0.1)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Decorative Background Icon */}
          <Box sx={{ position: "absolute", bottom: -30, right: -30, opacity: 0.05, color: "#0d9488" }}>
             <Sparkles size={240} />
          </Box>

          <Grid container spacing={4} alignItems="center" sx={{ position: "relative", zIndex: 1 }}>
            <Grid item size={{ xs: 12, md: 2 }} sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "#0d9488",
                  color: "#10b981",
                  boxShadow: "0 10px 20px rgba(13, 148, 136, 0.3)",
                }}
              >
                <ViewComfyAltRounded sx={{ fontSize: 40 }} />
              </Avatar>
            </Grid>
            <Grid item size={{ xs: 12, md: 10 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, letterSpacing: -0.5, color: "#0d9488" }}>
                Tata Nilai Puskesmas
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#475569",
                  lineHeight: 1.6,
                  fontWeight: 500,
                  fontSize: {xs: '1.2rem', md: '1.5rem'}
                }}
              >
                <Box component="span" sx={{ color: "#10b981", fontWeight: 900, mr: 1, textShadow: "0 2px 4px rgba(0,0,0,0.05)" }}>SMART</Box>
                - "Semangat Melayani dengan Amanah, Responsif dan Tanggung Jawab"
              </Typography>
            </Grid>
          </Grid>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default VisiMisi;