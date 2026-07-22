import React from "react";
import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PageHeader from "@/components/ui/PageHeader";

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

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Hak & Kewajiban Pasien" 
        description="Informasi mengenai hak dan tanggung jawab pasien sesuai UU No. 17 Tahun 2023."
      />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          {/* Hak Pasien */}
          <Grid item size={{xs:12, md:6}}>
            <Paper elevation={3} sx={{ p: 4, height: "100%", borderRadius: "16px" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3, color: "#1e3a8a" }}>
                <CheckCircleIcon sx={{ fontSize: 30, mr: 1 }} />
                <Typography variant="h5" fontWeight="bold">Hak Pasien</Typography>
              </Box>
              <List>
                {hakPasien.map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                      <Typography variant="body1" fontWeight="bold">{String.fromCharCode(97 + index)}.</Typography>
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          {/* Kewajiban Pasien */}
          <Grid item size={{xs:12, md:6}}>
            <Paper elevation={3} sx={{ p: 4, height: "100%", borderRadius: "16px" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3, color: "#c2410c" }}>
                <AssignmentTurnedInIcon sx={{ fontSize: 30, mr: 1 }} />
                <Typography variant="h5" fontWeight="bold">Kewajiban Pasien</Typography>
              </Box>
              <List>
                {kewajibanPasien.map((item, index) => (
                  <ListItem key={index} sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: 30, mt: 0.5 }}>
                      <Typography variant="body1" fontWeight="bold">{String.fromCharCode(97 + index)}.</Typography>
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HakKewajiban;