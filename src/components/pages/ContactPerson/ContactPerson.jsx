import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PageHeader from "@/components/ui/PageHeader";

const ContactPerson = () => {
  const contacts = [
    {
      title: "WhatsApp (Admin)",
      info: "0812-5878-1378",
      icon: <WhatsAppIcon />,
      color: "#25D366",
    },
    {
      title: "Email",
      info: "pkmkarjotarakan@email.com",
      icon: <EmailIcon />,
      color: "#EA4335",
    },
    {
      title: "Alamat",
      info: "Jl. R.A. Kartini RT. 12 Nomor 40 Tarakan",
      icon: <LocationOnIcon />,
      color: "#1e3a8a",
    },  
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Hubungi Kami"
        description="Punya pertanyaan atau butuh bantuan layanan kesehatan? Silakan hubungi kami melalui saluran berikut."
      />

      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Grid container spacing={3}>
          {contacts.map((item, index) => (
            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  p: 1,
                }}>
                <IconButton
                  sx={{ bgcolor: `${item.color}15`, color: item.color, m: 2 }}>
                  {item.icon}
                </IconButton>
                <CardContent sx={{ p: 1 }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight="bold">
                    {item.title}
                  </Typography>
                  <Typography variant="body1" fontWeight="600">
                    {item.info}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        

        {/* Peta (Placeholder) */}
        <Paper
          sx={{
            mt: 6,
            p: 1, // Padding dikurangi agar peta memenuhi ruang
            borderRadius: "16px",
            height: "300px",
            overflow: "hidden", // Penting agar peta tidak keluar dari sudut rounded
            display: "flex",
          }}>
          <iframe
            // Ganti URL di bawah ini dengan hasil Copy Embed dari Google Maps Anda
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16015.696687136298!2d117.57506430584797!3d3.30598664692335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32138a8e05274819%3A0x376aeafcae7a3910!2sPuskesmas%20Karang%20Rejo!5e1!3m2!1sid!2sid!4v1777431008050!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactPerson;
