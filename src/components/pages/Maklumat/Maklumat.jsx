import React from "react";
import { Container, Typography, Box, Paper, Grid, Avatar } from "@mui/material";
import { Scale, CheckCircle2, Award } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";

const Maklumat = () => {
  const maklumat = [
    {
      text: "Sanggup menyelenggarakan pelayanan kesehatan sesuai dengan standar pelayanan yang telah ditetapkan.",
      icon: <Award size={32} />,
      color: "#0d9488" // Royal Blue
    },
    {
      text: "Memberikan pelayanan sesuai dengan kewajiban dan akan melakukan perbaikan secara terus menerus.",
      icon: <CheckCircle2 size={32} />,
      color: "#059669" // Emerald Green
    },
    {
      text: "Apabila terdapat ketidaksesuaian standar pelayanan, kami siap menerima sanksi sesuai peraturan perundang-undangan, dan/atau memberikan kompensasi apabila pelayanan yang diberikan tidak sesuai standar.",
      icon: <Scale size={32} />,
      color: "#10b981" // Gold
    }
  ];

  return (
    <Box sx={{ pb: 12, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Maklumat Pelayanan" 
        description="Komitmen kami untuk memberikan pelayanan kesehatan yang berkualitas, transparan, dan akuntabel."
      />

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: -2 }, position: "relative", zIndex: 10 }}>
        
        {/* Judul Utama Maklumat */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#475569", mb: 2, fontStyle: "italic" }}>
              "Dengan ini, kami menyatakan:"
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center" sx={{ mb: 10 }}>
          {maklumat.map((item, index) => (
            <Grid item size={{ xs: 12, md: 4 }} key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 5,
                    height: "100%",
                    borderRadius: "24px",
                    bgcolor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    position: "relative",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.03)",
                    transition: "all 0.3s ease",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "6px",
                      background: `linear-gradient(90deg, ${item.color}, ${item.color}90)`,
                    },
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: `0 30px 60px ${item.color}20`,
                      borderColor: `${item.color}40`,
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: `${item.color}15`,
                      color: item.color,
                      mb: 4,
                      boxShadow: `0 10px 25px ${item.color}30`
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography variant="h2" sx={{ position: "absolute", top: 20, right: 20, opacity: 0.05, color: item.color, fontFamily: "serif", lineHeight: 1 }}>
                    "
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#334155", fontSize: "1.1rem", lineHeight: 1.8, fontWeight: 500 }}>
                    {item.text}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Bagian Tanda Tangan */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 4, md: 5 }, 
                borderRadius: "24px", 
                bgcolor: "#0d9488", 
                color: "white",
                display: "inline-block",
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(13, 148, 136, 0.2)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box sx={{ position: "absolute", top: -50, right: -50, width: 150, height: 150, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.05)" }} />
              
              <Typography variant="body1" sx={{ mb: 10, color: "rgba(255,255,255,0.8)" }}>
                Tarakan, 21 Oktober 2025
                <br />
                Kepala Puskesmas Karang Rejo
              </Typography>
              
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
                dr. Hj. Ametta Angastuty
              </Typography>
              <Typography variant="body2" sx={{ color: "#94a3b8", mt: 0.5, letterSpacing: 1 }}>
                NIP. 19810212 200902 2 002
              </Typography>
            </Paper>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Maklumat;