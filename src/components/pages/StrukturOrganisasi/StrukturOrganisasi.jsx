import React from "react";
import { Container, Typography, Box, Paper, Grid, Avatar } from "@mui/material";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import foto from "@/assets/img/fotoPimpinan.jpg";
import pj1 from "@/assets/img/pj1.jpg";
import pj2 from "@/assets/img/pj2.jpg";
import pj3 from "@/assets/img/pj3.jpg";
import pj4 from "@/assets/img/pj4.jpg";
import pj5 from "@/assets/img/pj5.jpg";

const StrukturOrganisasi = () => {
  const namaPimpinan = "dr. Hj. Ametta Angastuty";
  const fotoPimpinan = foto; 

  const clusterData = [
    {
      name: "KLASTER 1",
      pj: "Nurul Qalbi, S.K.M",
      fotoPj: pj1,
      items: [
        { pos: "Manajemen Inti", staff: "Nurul Qalbi, S.K.M" },
        { pos: "Manajemen Arsip", staff: "Fikri Thifal Bagus Saputra, S.K.M" },
        { pos: "Manajemen SDM", staff: "Musriani, S.K.M" },
        { pos: "Manajemen Sarpras", staff: "Marissa Yamin, S.Kom" },
        { pos: "Manajemen Mutu Pelayanan", staff: "dr. Nabila Rasyida Fajrianty" },
        { pos: "Manajemen Keuangan dan BMD", staff: "Jane Justien, SE" },
        { pos: "Manajemen Sistem Informasi Digital", staff: "Sahadan, S.Kom" },
        { pos: "Manajemen Jejaring", staff: "dr. Andry Susanto" },
        { pos: "Manajemen Pemberdayaan Masyarakat", staff: "Mince Mangera, S.K.M" },
      ],
    },
    {
      name: "KLASTER 2",
      pj: "dr. Sri Wahyu Ekowati",
      fotoPj: pj2,
      items: [
        { pos: "Ibu Hamil, Bersalin, Nifas", staff: "Sumariana, S.Keb" },
        { pos: "Bayi dan Anak Balita", staff: "dr. Puspita Dewi Harmoko" },
        { pos: "Anak Pra Sekolah", staff: "Sabariah, A.Md.Kep" },
        { pos: "Anak Usia Sekolah", staff: "Alberthin Lapegia P, A.Md.Kep" },
        { pos: "Remaja", staff: "Ita Purwati, A.Md.Kep" },
      ],
    },
    {
      name: "KLASTER 3",
      pj: "Sari Dewi Permata W, S.Kep,Ns",
      fotoPj: pj3,
      items: [
        { pos: "Dewasa", staff: "dr. Nabila Rasyida Fajrianty" },
        { pos: "Lanjut Usia", staff: "dr. Rusli" },
      ],
    },
    {
      name: "KLASTER 4",
      pj: "dr. Indah Noormala Santi",
      fotoPj: pj4,
      items: [
        { pos: "Surveilans & Respon Penyakit Menular", staff: "Ain Nur Aini, S.K.M" },
        { pos: "Kesehatan Lingkungan", staff: "Heru Cahyadi, A.Md.KL" },
      ],
    },
    {
      name: "KLASTER 5",
      pj: "dr. Dayang Christi N",
      fotoPj: pj5,
      items: [
        { pos: "Pelayanan Gigi & Mulut", staff: "drg. Putri Deena Borin Mafazi" },
        { pos: "Pelayanan Gawat Darurat", staff: "dr. Dayang Christi N" },
        { pos: "Pelayanan Kefarmasian", staff: "Ayu Puspasari, S.Farm,Apt" },
        { pos: "Pelayanan Labkesmas", staff: "Erin Setiawati, S.Tr,Kes" },
        { pos: "Penanggulangan Krisis", staff: "Nur Darobianto, A.Md.Kep" },
      ],
    },
  ];

  return (
    <Box sx={{ pb: 12, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Struktur Organisasi"
        description="Bagan struktur pelayanan inovasi klaster di Puskesmas Karang Rejo."
      />

      <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 0 }, position: "relative", zIndex: 10 }}>
        {/* Kepala Puskesmas */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                background: "linear-gradient(135deg, #193b68 0%, #112643 100%)",
                color: "#fff",
                borderBottom: "6px solid #D4AF37",
                textAlign: "center",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                minWidth: { xs: "300px", md: "400px" },
                boxShadow: "0 25px 50px -12px rgba(25, 59, 104, 0.25)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box sx={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, bgcolor: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
              
              <Avatar
                src={fotoPimpinan}
                sx={{
                  width: 100,
                  height: 100,
                  border: "4px solid #fff",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "&:hover": { transform: "scale(1.1) rotate(2deg)", cursor: "pointer" },
                }}
              />
              <Box>
                <Typography variant="overline" sx={{ color: "#D4AF37", letterSpacing: 2, fontWeight: 800 }}>
                  KEPALA PUSKESMAS
                </Typography>
                <Typography variant="h5" fontWeight="900" sx={{ mt: 0.5 }}>
                  {namaPimpinan}
                </Typography>
              </Box>
            </Paper>
          </motion.div>

          {/* Garis Penghubung Utama */}
          <motion.div initial={{ height: 0 }} animate={{ height: 40 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <Box sx={{ width: "4px", height: "100%", background: "linear-gradient(to bottom, #193b68, #94a3b8)", borderRadius: 2 }} />
          </motion.div>
          
          <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 0.7, delay: 0.7 }}>
            <Box sx={{ width: "100%", height: "4px", background: "linear-gradient(90deg, transparent, #94a3b8 10%, #94a3b8 90%, transparent)", mb: 4, borderRadius: 2 }} />
          </motion.div>
        </Box>

        {/* Klaster Grid */}
        <Grid container spacing={3} justifyContent="center">
          {clusterData.map((cluster, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                style={{ height: "100%" }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  
                  {/* Box PJ Klaster */}
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      mb: 2,
                      textAlign: "center",
                      bgcolor: "white",
                      border: "1px solid rgba(25, 59, 104, 0.1)",
                      borderTop: "4px solid #193b68",
                      borderRadius: "16px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 15px 40px rgba(25, 59, 104, 0.12)",
                        borderColor: "rgba(25, 59, 104, 0.2)"
                      }
                    }}
                  >
                    <Box sx={{ bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 4 }}>
                      <Typography variant="overline" fontWeight="800" sx={{ color: "#193b68", letterSpacing: 1 }}>
                        {cluster.name}
                      </Typography>
                    </Box>
                    <Avatar
                      src={cluster.fotoPj}
                      sx={{
                        width: 72,
                        height: 72,
                        border: "3px solid #f1f5f9",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                        transition: "transform 0.3s ease",
                        "&:hover": { transform: "scale(1.15)" },
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="800" sx={{ color: "#1e293b", lineHeight: 1.2, mb: 0.5 }}>
                        {cluster.pj}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 600 }}>
                        Penanggung Jawab
                      </Typography>
                    </Box>
                  </Paper>

                  {/* Box Anggota/Staf */}
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {cluster.items.map((item, idx) => (
                      <Paper
                        key={idx}
                        elevation={0}
                        sx={{
                          p: 1.5,
                          px: 2,
                          textAlign: "center",
                          bgcolor: "white",
                          border: "1px solid #e2e8f0",
                          borderRadius: "12px",
                          transition: "0.2s",
                          "&:hover": { 
                            bgcolor: "#193b68", 
                            borderColor: "#193b68",
                            "& .pos-text": { color: "white" },
                            "& .staff-text": { color: "rgba(255,255,255,0.7)" }
                          },
                        }}
                      >
                        <Typography variant="body2" fontWeight="700" className="pos-text" sx={{ color: "#334155", mb: 0.5, transition: "color 0.2s" }}>
                          {item.pos}
                        </Typography>
                        <Typography variant="caption" className="staff-text" sx={{ color: "#64748b", fontStyle: "italic", transition: "color 0.2s" }}>
                          {item.staff}
                        </Typography>
                      </Paper>
                    ))}
                  </Box>
                  
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StrukturOrganisasi;
