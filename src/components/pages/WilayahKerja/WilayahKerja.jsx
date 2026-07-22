import React from "react";
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import PeopleIcon from "@mui/icons-material/People";
import PlaceIcon from "@mui/icons-material/Place";
import PageHeader from "@/components/ui/PageHeader";
import peta from "@/assets/img/peta.png";

const WilayahKerja = () => {
  const dataWilayah = [
    { title: "Kelurahan", value: "4 Kelurahan", sub: "Karang Anyar, Karang Anyar Pantai, Karang Rejo, Karang Balik", icon: <PlaceIcon color="primary" /> },
    { title: "Total RT", value: "136 RT", sub: "Cakupan administratif wilayah", icon: <MapIcon color="primary" /> },
    { title: "Luas Wilayah", value: "15,68 km²", sub: "6,3% dari total luas Kota Tarakan", icon: <MapIcon color="primary" /> },
    { title: "Jumlah Penduduk", value: "71.802 Jiwa", sub: "30% dari total penduduk Kota Tarakan (BPS 2025)", icon: <PeopleIcon color="primary" /> },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Wilayah Kerja" 
        description="Informasi cakupan wilayah operasional Puskesmas Karang Rejo."
      />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {/* Statistik Ringkas */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {dataWilayah.map((item, index) => (
            <Grid item size={{xs:12, sm:6, md:3}} key={index}>
              <Card sx={{ height: "100%", borderRadius: "12px" }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {item.icon}
                    <Typography variant="subtitle2" sx={{ ml: 1, color: "text.secondary" }}>{item.title}</Typography>
                  </Box>
                  <Typography variant="h5" fontWeight="bold" sx={{ color: "#1e3a8a" }}>{item.value}</Typography>
                  <Typography variant="caption" sx={{ display: "block", mt: 1 }}>{item.sub}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bagian Peta */}
        <Paper elevation={3} sx={{ p: 3, borderRadius: "16px", textAlign: "center" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Peta Wilayah Kerja</Typography>
          <Box 
            component="img"
            src={peta} // Ganti dengan path file peta Anda
            alt="Peta Wilayah Kerja Puskesmas Karang Rejo"
            sx={{ 
              width: "100%", 
              maxWidth: "800px", 
              borderRadius: "8px", 
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              mt: 2
            }}
          />
          <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
            Cakupan wilayah Puskesmas Karang Rejo mencakup 4 kelurahan di Kota Tarakan.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default WilayahKerja;