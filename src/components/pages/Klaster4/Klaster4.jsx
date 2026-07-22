import React from "react";
import { Container, Typography, Box, Paper, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Button, Chip } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import BugReportIcon from "@mui/icons-material/BugReport";
import PublicIcon from "@mui/icons-material/Public";
import ScienceIcon from "@mui/icons-material/Science";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PageHeader from "@/components/ui/PageHeader";

const Klaster4 = () => {
  const layananPenyakitMenular = [
    { title: "Surveilans Epidemiologi", desc: "Pemantauan tren penyakit menular secara berkala.", icon: <PublicIcon /> },
    { title: "Penemuan Kasus", desc: "Deteksi aktif kasus baru di masyarakat.", icon: <BugReportIcon /> },
    { title: "Respons KLB", desc: "Tim gerak cepat dalam penanganan Kejadian Luar Biasa.", icon: <WarningAmberIcon /> },
    { title: "Kesehatan Lingkungan", desc: "Pengendalian vektor dan binatang pembawa penyakit.", icon: <ScienceIcon /> },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Klaster 4: Penyakit Menular" 
        description="Pusat pencegahan, pengendalian, dan respons cepat terhadap penyakit menular dan risiko lingkungan."
      />

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4}>
          {/* Kolom Kiri: Layanan Utama */}
          <Grid item size={{xs:12, md:8}}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Typography variant="h5" fontWeight="bold">Layanan Utama</Typography>
              <Chip label="SIAGA" color="error" sx={{ ml: 2, fontWeight: 'bold' }} />
            </Box>
            <Grid container spacing={2}>
              {layananPenyakitMenular.map((item, index) => (
                <Grid item size={{xs:12, sm:6}} key={index}>
                  <Card sx={{ height: "100%", borderRadius: "16px", borderLeft: "5px solid #ef4444" }}>
                    <CardContent>
                      <Box sx={{ color: "#ef4444", mb: 1 }}>{item.icon}</Box>
                      <Typography variant="h6" fontWeight="bold">{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Kolom Kanan: Kontak & Respons */}
          <Grid item size={{xs:12, md:4}}>
            <Paper elevation={3} sx={{ p: 3, borderRadius: "16px", bgcolor: "#fef2f2", border: "1px solid #fecaca" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2, color: "#b91c1c" }}>
                <SupportAgentIcon sx={{ mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">Lapor Kasus / KLB</Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Segera hubungi tim surveilans kami jika menemukan indikasi wabah atau lonjakan kasus di lingkungan Anda.
              </Typography>
              {/* <Button fullWidth variant="contained" color="error" sx={{ py: 1.5, fontWeight: 'bold' }}>
                Hotline Surveilans: 08xx-xxxx-xxxx
              </Button> */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Klaster4;