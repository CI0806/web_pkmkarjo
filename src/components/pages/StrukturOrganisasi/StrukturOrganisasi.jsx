import React from "react";
import { Container, Typography, Box, Paper, Grid, Avatar } from "@mui/material";
import PageHeader from "@/components/ui/PageHeader";
import foto from "@/assets/img/fotoPimpinan.jpg";
import pj1 from "@/assets/img/pj1.jpg";
import pj2 from "@/assets/img/pj2.jpg";
import pj3 from "@/assets/img/pj3.jpg";
import pj4 from "@/assets/img/pj4.jpg";
import pj5 from "@/assets/img/pj5.jpg";

const StrukturOrganisasi = () => {
  const namaPimpinan = "dr. Hj. Ametta Angastuty";
  const fotoPimpinan = foto; // Ganti dengan path foto asli

  const clusterData = [
    {
      name: "KLASTER 1",
      pj: "Nurul Qalbi, S.K.M",
      fotoPj: pj1, // Path foto PJ
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
        { pos: "Surveilans & Respon Penyakit Menular (SKDR)", staff: "Ain Nur Aini, S.K.M" },
        { pos: "Kesehatan Lingkungan", staff: "Heru Cahyadi, A.Md.KL" },
      ],
    },
    {
      name: "KLASTER 5",
      pj: "dr. Dayang Christi N",
      fotoPj: pj5,
      items: [
        {
          pos: "Pelayanan Gigi & Mulut",
          staff: "drg. Putri Deena Borin Mafazi",
        },
        { pos: "Pelayanan Gawat Darurat", staff: "dr. Dayang Christi N" },
        { pos: "Pelayanan Kefarmasian", staff: "Ayu Puspasari, S.Farm,Apt" },
        { pos: "Pelayanan Labkesmas", staff: "Erin Setiawati, S.Tr,Kes" },
        { pos: "Penanggulangan Krisis Kesehatan", staff: "Nur Darobianto, A.Md.Kep" },
      ],
    },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Struktur Organisasi"
        description="Daftar penanggung jawab klaster pelayanan Puskesmas Karang Rejo."
      />

      <Container maxWidth="xl" sx={{ mt: 6 }}>
        {/* Kepala Puskesmas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 2,
          }}>
          <Paper
            elevation={4}
            sx={{
              p: 3,
              bgcolor: "#193b68",
              color: "#fff",
              borderBottom: "4px solid #3b82f6",
              textAlign: "center",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
              minWidth: "300px",
            }}>
            <Avatar
              src={fotoPimpinan}
              sx={{
                width: 80,
                height: 80,
                border: "3px solid #fff",
                // Efek Transisi
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.25)",
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", // Membesar 20%
                  cursor: "pointer",
                  zIndex: 10,
                },
              }}
            />
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ opacity: 0.8, letterSpacing: 1 }}>
                KEPALA PUSKESMAS
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                {namaPimpinan}
              </Typography>
            </Box>
          </Paper>

          <Box sx={{ width: "2px", height: "30px", bgcolor: "#64748b" }} />
          <Box
            sx={{ width: "85%", height: "2px", bgcolor: "#64748b", mb: 4 }}
          />
        </Box>

        {/* Klaster Grid */}
        <Grid container spacing={2} justifyContent="center">
          {clusterData.map((cluster, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
              {/* Box PJ Klaster */}
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  mb: 3,
                  textAlign: "center",
                  bgcolor: "#e2e8f0",
                  border: "1px solid #cbd5e1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  color="text.secondary">
                  {cluster.name}
                </Typography>
                <Avatar
                  src={cluster.fotoPj}
                  sx={{
                    width: 60,
                    height: 60,
                    border: "2px solid #fff",
                    boxShadow: 1,
                    // Efek Transisi
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.25)",
                      transformOrigin: "bottom", // Membesar menjauh dari titik bawah
                    },
                  }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ lineHeight: 1.2 }}>
                  {cluster.pj}
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b" }}>
                  Penanggung Jawab
                </Typography>
              </Paper>

              {/* Box Anggota/Staf */}
              {cluster.items.map((item, idx) => (
                <Paper
                  key={idx}
                  elevation={1}
                  sx={{
                    p: 1.5,
                    mb: 1,
                    textAlign: "center",
                    border: "1px solid #e2e8f0",
                    transition: "0.2s",
                    "&:hover": { bgcolor: "#eff6ff", borderColor: "#bfdbfe" },
                  }}>
                  <Typography
                    variant="body2"
                    fontWeight="700"
                    sx={{ color: "#1e293b" }}>
                    {item.pos}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#64748b",
                      fontStyle: "italic",
                      display: "block",
                      mt: 0.5,
                    }}>
                    {item.staff}
                  </Typography>
                </Paper>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StrukturOrganisasi;
