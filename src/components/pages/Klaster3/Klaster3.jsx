import React from "react";
import { Container, Typography, Box, Paper, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import ElderlyIcon from "@mui/icons-material/Elderly";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PageHeader from "@/components/ui/PageHeader";

const Klaster3 = () => {
  const layananDewasaLansia = [
    { title: "Skrining Faktor Risiko", desc: "Deteksi dini penyakit tidak menular (hipertensi, diabetes, dll).", icon: <MonitorHeartIcon /> },
    { title: "Posbindu PTM", desc: "Pos pembinaan terpadu untuk pengendalian penyakit tidak menular.", icon: <AccessibilityNewIcon /> },
    { title: "Kesehatan Lansia", desc: "Pelayanan kesehatan melalui Posyandu Lansia.", icon: <ElderlyIcon /> },
    { title: "Pengelolaan Penyakit Kronis", desc: "Pemantauan berkala bagi pasien hipertensi dan diabetes mellitus.", icon: <LocalPharmacyIcon /> },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Klaster 3: Dewasa & Lansia" 
        description="Layanan kesehatan bagi kelompok usia dewasa dan lanjut usia di Puskesmas Karang Rejo."
      />

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {/* Kolom Kiri: Layanan Utama */}
          <Grid item size={{xs:12, md:8}} >
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>Layanan Utama</Typography>
            <Grid container spacing={2}>
              {layananDewasaLansia.map((item, index) => (
                <Grid item size={{xs:12, sm:6}} key={index}>
                  <Card sx={{ height: "100%", borderRadius: "16px", borderLeft: "5px solid #d97706" }}>
                    <CardContent>
                      <Box sx={{ color: "#d97706", mb: 1 }}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Kolom Kanan: Jadwal & Informasi */}
          <Grid item size={{xs:12, md:4}}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: "16px", bgcolor: "#fffbeb", border: "1px solid #fcd34d" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2, color: "#b45309" }}>
                <ScheduleIcon sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">Jadwal Pelayanan</Typography>
              </Box>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="Posbindu PTM" secondary="Setiap hari Selasa & Kamis" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="Posyandu Lansia" secondary="Sesuai jadwal kelurahan masing-masing" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="Konsultasi Penyakit Kronis" secondary="Senin - Sabtu (08.00 - 12.00)" />
                </ListItem>
              </List>
              <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "#b45309", "&:hover": { bgcolor: "#92400e" } }}>
                Lihat Jadwal Posbindu
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Klaster3;