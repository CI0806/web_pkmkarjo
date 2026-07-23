import React from "react";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";

const HakKewajiban = () => {
  const hakPasien = [
    "Mendapatkan informasi mengenai kesehatan dirinya.",
    "Mendapatkan penjelasan yang memadai mengenai pelayanan kesehatan yang diterimanya.",
    "Mendapatkan pelayanan kesehatan sesuai dengan kebutuhan medis, standar profesi, dan pelayanan yang bermutu.",
    "Menolak atau menyetujui tindakan medis, kecuali tindakan untuk pencegahan penyakit menular/wabah.",
    "Mendapatkan akses terhadap informasi rekam medis.",
    "Meminta pendapat tenaga medis lain (second opinion).",
    "Mendapatkan hak lain sesuai ketentuan peraturan perundang-undangan."
  ];

  const kewajibanPasien = [
    "Memberikan informasi yang lengkap dan jujur tentang masalah kesehatannya.",
    "Mematuhi nasihat dan petunjuk tenaga medis.",
    "Mematuhi ketentuan yang berlaku pada fasilitas pelayanan kesehatan.",
    "Memberikan imbalan jasa atas pelayanan yang diterima."
  ];

  const gold = "#D4AF37";
  const navy = "#193b68";

  return (
    <Box sx={{ pb: 15, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Hak & Kewajiban Pasien" 
        description="Pahami hak Anda sebagai pasien serta tanggung jawab yang perlu dipatuhi demi terwujudnya pelayanan kesehatan yang optimal."
      />

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: -4 }, position: "relative", zIndex: 10 }}>
        <Grid container spacing={5}>
          
          {/* Kolom Hak Pasien */}
          <Grid item size={{xs: 12, md: 6}}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  borderRadius: "24px",
                  bgcolor: "white",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)"
                }}
              >
                {/* Header Card Hak */}
                <Box sx={{ bgcolor: navy, p: 4, color: "white", position: "relative", overflow: "hidden" }}>
                  <Box sx={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, bgcolor: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, position: "relative", zIndex: 1 }}>
                    <Box sx={{ p: 1.5, bgcolor: "rgba(255,255,255,0.1)", borderRadius: 3, backdropFilter: "blur(10px)" }}>
                      <CheckCircleIcon sx={{ fontSize: 36, color: gold }} />
                    </Box>
                    <Box>
                      <Typography variant="overline" sx={{ color: gold, fontWeight: 800, letterSpacing: 2 }}>BAGIAN 1</Typography>
                      <Typography variant="h4" fontWeight="900">Hak Pasien</Typography>
                    </Box>
                  </Box>
                </Box>
                
                {/* Daftar Hak */}
                <Box sx={{ p: { xs: 3, md: 4 }, display: "flex", flexDirection: "column", gap: 2 }}>
                  {hakPasien.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Box 
                        sx={{ 
                          display: "flex", 
                          gap: 2, 
                          p: 2.5, 
                          borderRadius: "16px",
                          bgcolor: "#f1f5f9",
                          border: "1px solid transparent",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "white",
                            borderColor: "rgba(25, 59, 104, 0.2)",
                            boxShadow: "0 10px 20px rgba(25, 59, 104, 0.08)",
                            transform: "translateX(8px)"
                          }
                        }}
                      >
                        <Box sx={{ 
                          width: 32, height: 32, flexShrink: 0, borderRadius: "50%", 
                          bgcolor: "rgba(25, 59, 104, 0.1)", color: navy, 
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontWeight: 800, fontSize: "0.9rem"
                        }}>
                          {index + 1}
                        </Box>
                        <Typography variant="body1" sx={{ color: "#334155", fontWeight: 500, lineHeight: 1.6, pt: 0.5 }}>
                          {item}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Kolom Kewajiban Pasien */}
          <Grid item size={{xs: 12, md: 6}}>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Paper 
                elevation={0} 
                sx={{ 
                  borderRadius: "24px",
                  bgcolor: "white",
                  overflow: "hidden",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(0,0,0,0.04)"
                }}
              >
                {/* Header Card Kewajiban */}
                <Box sx={{ bgcolor: gold, p: 4, color: navy, position: "relative", overflow: "hidden" }}>
                  <Box sx={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, bgcolor: "rgba(25, 59, 104, 0.05)", borderRadius: "50%" }} />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, position: "relative", zIndex: 1 }}>
                    <Box sx={{ p: 1.5, bgcolor: "rgba(25, 59, 104, 0.1)", borderRadius: 3, backdropFilter: "blur(10px)" }}>
                      <AssignmentTurnedInIcon sx={{ fontSize: 36, color: navy }} />
                    </Box>
                    <Box>
                      <Typography variant="overline" sx={{ color: "rgba(25, 59, 104, 0.7)", fontWeight: 800, letterSpacing: 2 }}>BAGIAN 2</Typography>
                      <Typography variant="h4" fontWeight="900">Kewajiban Pasien</Typography>
                    </Box>
                  </Box>
                </Box>
                
                {/* Daftar Kewajiban */}
                <Box sx={{ p: { xs: 3, md: 4 }, display: "flex", flexDirection: "column", gap: 2 }}>
                  {kewajibanPasien.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Box 
                        sx={{ 
                          display: "flex", 
                          gap: 2, 
                          p: 2.5, 
                          borderRadius: "16px",
                          bgcolor: "#fcf8e3",
                          border: "1px solid transparent",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "white",
                            borderColor: "rgba(212, 175, 55, 0.4)",
                            boxShadow: "0 10px 20px rgba(212, 175, 55, 0.15)",
                            transform: "translateX(8px)"
                          }
                        }}
                      >
                        <Box sx={{ 
                          width: 32, height: 32, flexShrink: 0, borderRadius: "50%", 
                          bgcolor: "rgba(212, 175, 55, 0.3)", color: navy, 
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontWeight: 800, fontSize: "0.9rem"
                        }}>
                          {index + 1}
                        </Box>
                        <Typography variant="body1" sx={{ color: "#334155", fontWeight: 500, lineHeight: 1.6, pt: 0.5 }}>
                          {item}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                  
                  {/* Info Box Tambahan (Opsional untuk estetika) */}
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }}>
                    <Box sx={{ mt: 2, p: 3, borderRadius: "16px", bgcolor: "#f1f5f9", borderLeft: `4px solid ${navy}` }}>
                      <Typography variant="body2" sx={{ color: "#64748b", fontStyle: "italic" }}>
                        "Pelayanan kesehatan yang bermutu terwujud melalui sinergi antara kewajiban pelayanan kami dan ketaatan partisipasi Anda."
                      </Typography>
                    </Box>
                  </motion.div>
                  
                </Box>
              </Paper>
            </motion.div>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default HakKewajiban;