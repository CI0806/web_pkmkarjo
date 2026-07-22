import React from "react";
import { Container, Typography, Box, Paper, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealingIcon from "@mui/icons-material/Healing";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import ScienceIcon from "@mui/icons-material/Science";
import EmergencyIcon from "@mui/icons-material/Emergency";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PageHeader from "@/components/ui/PageHeader";

const Klaster5 = () => {
  const layananPenunjang = [
    { title: "Pelayanan Gawat Darurat", desc: "Triase dan penanganan medis darurat 24 jam.", icon: <EmergencyIcon /> },
    { title: "Pelayanan Farmasi", desc: "Perencanaan kebutuhan dan penyediaan obat/BMHP.", icon: <LocalPharmacyIcon /> },
    { title: "Pelayanan Laboratorium", desc: "Pemeriksaan spesimen untuk diagnosa klinis.", icon: <ScienceIcon /> },
    { title: "Pelayanan Gigi & Mulut", desc: "Pemeriksaan dan tindakan kesehatan gigi.", icon: <MedicalServicesIcon /> },
    { title: "Rawat Inap", desc: "Perawatan medis bagi pasien yang memerlukan observasi.", icon: <HealingIcon /> },
    { title: "Rehabilitasi Medik", desc: "Layanan fisioterapi untuk pemulihan fungsi tubuh.", icon: <HealthAndSafetyIcon /> },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Klaster 5: Lintas Klaster" 
        description="Layanan penunjang medis dan tindakan gawat darurat Puskesmas Karang Rejo."
      />

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {/* Kolom Kiri: Layanan Penunjang */}
          <Grid item size={{xs:12, md:7}}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>Layanan Penunjang Medis</Typography>
            <Grid container spacing={2}>
              {layananPenunjang.map((item, index) => (
                <Grid item size={{xs:12, sm:6}} key={index}>
                  <Card sx={{ height: "100%", borderRadius: "16px", borderLeft: "5px solid #059669" }}>
                    <CardContent>
                      <Box sx={{ color: "#059669", mb: 1 }}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Kolom Kanan: Fokus Strategis */}
          <Grid item size={{xs:12, md:5}}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: "16px", bgcolor: "#ecfdf5", border: "1px solid #a7f3d0" }}>
              <Typography variant="h6" fontWeight="bold" color="#065f46" gutterBottom>
                Peran Strategis Lintas Klaster
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Klaster 5 berfungsi sebagai penyokong utama yang menghubungkan seluruh pelayanan kesehatan di Puskesmas, memastikan tindakan gawat darurat dan kebutuhan klinis pasien terpenuhi dengan standar keselamatan tinggi.
              </Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Fokus Utama:</Typography>
              <List dense>
                <ListItem>
                  <ListItemText primary="Kesiapsiagaan Krisis Kesehatan" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Akurasi Diagnosa Laboratorium" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Efisiensi Stok Farmasi" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Klaster5;