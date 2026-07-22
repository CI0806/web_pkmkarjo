import React from "react";
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from "@mui/material";
import { 
  Settings, Description, PeopleAlt, Domain, Verified, 
  AccountBalance, Lan, Groups, SpeakerNotes 
} from "@mui/icons-material";
import PageHeader from "@/components/ui/PageHeader";

const Klaster1 = () => {
  const manajemenItems = [
    { title: "Manajemen Inti", desc: "Perencanaan RUK/RPK, Lokakarya Mini, Pengendalian & Penilaian Kinerja", icon: <Settings /> },
    { title: "Manajemen Arsip", desc: "Pengelolaan arsip umum dan arsip keuangan Puskesmas", icon: <Description /> },
    { title: "Manajemen SDM", desc: "Pengembangan kapasitas dan administrasi kepegawaian", icon: <PeopleAlt /> },
    { title: "Sarana & Prasarana", desc: "Pemeliharaan gedung, alat kesehatan, dan perbekalan", icon: <Domain /> },
    { title: "Manajemen Mutu", desc: "Penjaminan standar mutu pelayanan kesehatan", icon: <Verified /> },
    { title: "Keuangan & Aset", desc: "Pengelolaan keuangan dan Barang Milik Daerah", icon: <AccountBalance /> },
    { title: "Sistem Informasi", desc: "Pengelolaan data kesehatan dan sistem informasi digital", icon: <Lan /> },
    { title: "Jejaring", desc: "Pengelolaan kerjasama lintas fasilitas kesehatan", icon: <Groups /> },
    { title: "Pemberdayaan", desc: "Program pemberdayaan masyarakat di wilayah kerja", icon: <SpeakerNotes /> },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Klaster 1: Manajemen Puskesmas" 
        description="Pusat kendali operasional, administrasi, dan pengembangan mutu Puskesmas Karang Rejo."
      />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={3}>
          {manajemenItems.map((item, index) => (
            <Grid item size={{xs:12, sm:6, md:4}} key={index}>
              <Card sx={{ height: "100%", borderRadius: "16px", transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ color: "#1e3a8a", mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Info Tambahan */}
        <Paper sx={{ mt: 6, p: 4, borderRadius: "16px", bgcolor: "#eff6ff", borderLeft: "6px solid #1e3a8a" }}>
          <Typography variant="h6" fontWeight="bold" color="#1e3a8a" gutterBottom>
            Fokus Utama Klaster 1
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Klaster 1 berperan sebagai tulang punggung Puskesmas yang memastikan bahwa seluruh 
            sumber daya (manusia, anggaran, sarana, dan data) terkelola secara efisien 
            dan transparan untuk mendukung keberhasilan pelayanan kesehatan di klaster lainnya.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Klaster1;