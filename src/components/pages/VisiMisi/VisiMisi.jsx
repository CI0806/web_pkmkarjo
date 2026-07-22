import React from "react";
import { Box, Typography, Container, Grid, Paper, Stack } from "@mui/material";
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
      color: "#0ea5e9",
    },
    {
      title: "Tata Kelola & Inovasi",
      desc: "Meningkatkan tata Kelola pelayanan yang transparan, akuntabel dan responsive terhadap kebutuhan masyarakat.",
      icon: <Handshake size={32} />,
      color: "#8b5cf6",
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
            mb: 6,
            borderRadius: 10,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)",
            background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
          }}
        >
          {/* Decorative Element */}
          <Box sx={{ position: "absolute", top: -20, right: -20, opacity: 0.05, color: "#3b82f6" }}>
             <Lightbulb size={200} />
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid item size={{xs:12, md:2}} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: "#3b82f6",
                  borderRadius: "24px",
                  color: "white",
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
                }}
              >
                <Lightbulb size={48} />
              </Box>
            </Grid>
            <Grid item size={{xs:12, md:10}}>
              <Typography
                variant="overline"
                sx={{ fontWeight: 800, color: "#3b82f6", letterSpacing: 3, mb: 1, display: "block" }}
              >
                Visi Puskesmas
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, color: "#0f172a", fontSize: {xs: '2rem', md: '2.5rem'} }}>
                Visi Kami
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontStyle: "italic",
                  color: "#334155",
                  lineHeight: 1.6,
                  fontWeight: 600,
                  position: "relative",
                  pl: 2,
                  borderLeft: "4px solid #3b82f6"
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
              <Target size={32} color="#3b82f6" />
              <Typography variant="h4" sx={{ fontWeight: 900, color: "#0f172a" }}>
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
            <Grid container spacing={4}>
              {missionItems.map((item, index) => (
                <Grid item size={{xs:12, md:6}} key={index}>
                  <MotionPaper
                    variants={itemVariants}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                    sx={{
                      p: 5,
                      height: "100%",
                      borderRadius: 8,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      border: "1px solid #f1f5f9",
                      background: "#fff",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0, left: 0, right: 0,
                        height: "6px",
                        background: item.color,
                        borderRadius: "8px 8px 0 0"
                      }
                    }}
                  >
                    <Box sx={{ 
                      color: item.color, 
                      mb: 3, 
                      bgcolor: `${item.color}15`, 
                      width: "fit-content", 
                      p: 2, 
                      borderRadius: 4 
                    }}>
                      {item.icon}
                    </Box>
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
            borderRadius: 10,
            background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
            color: "white",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Decorative Background Icon */}
          <Box sx={{ position: "absolute", bottom: -30, right: -30, opacity: 0.1 }}>
             <Sparkles size={240} />
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid item size={{xs:12, md:2}} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "24px",
                  color: "#60a5fa",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                <ViewComfyAltRounded sx={{ fontSize: 48 }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, letterSpacing: -0.5 }}>
                Tata Nilai Puskesmas
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#cbd5e1",
                  lineHeight: 1.6,
                  fontWeight: 500,
                  fontSize: {xs: '1.2rem', md: '1.5rem'}
                }}
              >
                <Box component="span" sx={{ color: "#60a5fa", fontWeight: 900, mr: 1 }}>SMART</Box>
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