import React from "react";
import { Container, Typography, Box, Paper, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PageHeader from "@/components/ui/PageHeader";

const Klaster2 = () => {
  const layanan = [
    { title: "Kesehatan Ibu & Anak", desc: "Pemeriksaan kehamilan, persalinan, dan nifas.", icon: <PregnantWomanIcon /> },
    { title: "Imunisasi", desc: "Pelayanan imunisasi dasar lengkap bagi bayi dan balita.", icon: <VaccinesIcon /> },
    { title: "Tumbuh Kembang", desc: "Pemantauan berkala kesehatan bayi dan balita.", icon: <ChildCareIcon /> },
    { title: "KB & Reproduksi", desc: "Pelayanan Keluarga Berencana dan kesehatan reproduksi.", icon: <PregnantWomanIcon /> },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Klaster 2: KIA, Anak & Remaja" 
        description="Layanan terpadu untuk kesehatan Ibu, Anak, dan Remaja di Puskesmas Karang Rejo."
      />

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {/* Kolom Kiri: Layanan Utama */}
          <Grid item size={{xs:12, md:8}}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>Layanan Utama</Typography>
            <Grid container spacing={2}>
              {layanan.map((item, index) => (
                <Grid item size={{xs:12, sm:6}} key={index}>
                  <Card sx={{ height: "100%", borderRadius: "16px" }}>
                    <CardContent>
                      <Box sx={{ color: "#db2777", mb: 1 }}>{item.icon}</Box>
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
            <Paper elevation={3} sx={{ p: 3, borderRadius: "16px", bgcolor: "#fff1f2", border: "1px solid #fda4af" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2, color: "#be185d" }}>
                <ScheduleIcon sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">Jadwal Pelayanan</Typography>
              </Box>
              <List>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="Senin & Rabu" secondary="08.00 - 11.30 WITA (Imunisasi Lengkap)" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText primary="Selasa, Kamis & Sabtu" secondary="08.00 - 11.30 WITA (KIA & Tumbuh Kembang)" />
                </ListItem>
              </List>
              <Button fullWidth variant="contained" sx={{ mt: 2, bgcolor: "#be185d", "&:hover": { bgcolor: "#9d174d" } }}>
                Daftar Online via Mobile JKN
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Klaster2;