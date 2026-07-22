import React from "react";
import { Container, Typography, Box, Paper, Divider, Stack } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import PageHeader from "@/components/ui/PageHeader";

const Maklumat = () => {
  const maklumat = [
    "Sanggup menyelenggarakan pelayanan kesehatan sesuai dengan standar pelayanan yang telah ditetapkan.",
    "Memberikan pelayanan sesuai dengan kewajiban dan akan melakukan perbaikan secara terus menerus.",
    "Apabila terdapat ketidaksesuaian standar pelayanan, kami siap menerima sanksi sesuai peraturan perundang-undangan, dan/atau memberikan kompensasi apabila pelayanan yang diberikan tidak sesuai standar."
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Maklumat Pelayanan" 
        description="Komitmen kami untuk memberikan pelayanan kesehatan yang berkualitas, transparan, dan akuntabel."
      />

      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Paper elevation={3} sx={{ p: { xs: 4, md: 6 }, borderRadius: "16px" }}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            {/* <GavelIcon sx={{ fontSize: 60, color: "#1e3a8a", mb: 2 }} /> */}
            <Typography variant="h4" fontWeight="800" color="#1e293b" gutterBottom>
              Maklumat Pelayanan
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Puskesmas Karang Rejo
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 4, fontWeight: 600, color: "#334155" }}>
            Dengan ini, kami menyatakan:
          </Typography>

          <Stack spacing={3}>
            {maklumat.map((text, index) => (
              <Box key={index} sx={{ display: "flex", gap: 2 }}>
                <Typography variant="h5" fontWeight="bold" color="#3b82f6">
                  {index + 1}.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#475569" }}>
                  {text}
                </Typography>
              </Box>
            ))}
          </Stack>

          <Divider sx={{ my: 6 }} />

          {/* Tanda Tangan */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box sx={{ textAlign: "center", width: "250px" }}>
              <Typography variant="body1" sx={{ mb: 8 }}>
                Tarakan, 21 Oktober 2025
                <br />
                Kepala Puskesmas Karang Rejo
              </Typography>
              <Typography variant="body1" fontWeight="bold" sx={{ textDecoration: "underline" }}>
                dr. Ametta Angastuty
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NIP 198102122009022002
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Maklumat;