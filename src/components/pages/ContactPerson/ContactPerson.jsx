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
  Avatar,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";

const ContactPerson = () => {
  const contacts = [
    {
      title: "WhatsApp (Admin)",
      info: "0812-5878-1378",
      icon: <WhatsAppIcon fontSize="large" />,
      color: "#25D366",
    },
    {
      title: "Email",
      info: "pkmkarjotarakan@email.com",
      icon: <EmailIcon fontSize="large" />,
      color: "#D4AF37",
    },
    {
      title: "Alamat",
      info: "Jl. R.A. Kartini RT. 12 Nomor 40 Tarakan",
      icon: <LocationOnIcon fontSize="large" />,
      color: "#193b68",
    },
  ];

  return (
    <Box sx={{ pb: 12, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Hubungi Kami"
        description="Punya pertanyaan atau butuh bantuan layanan kesehatan? Silakan hubungi kami melalui saluran berikut."
      />

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: -4 }, position: "relative", zIndex: 10 }}>
        <Grid container spacing={4} justifyContent="center">
          {contacts.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "24px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                    textAlign: "center",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.03)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: `0 25px 50px ${item.color}30`,
                      borderColor: `${item.color}50`
                    }
                  }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: `${item.color}15`,
                      color: item.color,
                      mb: 3,
                      boxShadow: `0 10px 20px ${item.color}20`
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      fontWeight="800"
                      letterSpacing={1.5}
                      sx={{ mb: 1, display: "block" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="h6" fontWeight="700" color="#1e293b" sx={{ fontSize: "1.1rem" }}>
                      {item.info}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Peta Lokasi */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Paper
            elevation={0}
            sx={{
              mt: 8,
              p: { xs: 2, md: 3 },
              borderRadius: "24px",
              background: "white",
              boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.04)"
            }}>
            <Typography variant="h5" fontWeight="800" color="#193b68" sx={{ mb: 3, px: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ width: 6, height: 24, bgcolor: "#D4AF37", borderRadius: 10 }} />
              Lokasi Puskesmas
            </Typography>
            <Box
              sx={{
                borderRadius: "16px",
                height: { xs: 300, md: 450 },
                overflow: "hidden",
                display: "flex",
                boxShadow: "inset 0 4px 15px rgba(0,0,0,0.05)"
              }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16015.696687136298!2d117.57506430584797!3d3.30598664692335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32138a8e05274819%3A0x376aeafcae7a3910!2sPuskesmas%20Karang%20Rejo!5e1!3m2!1sid!2sid!4v1777431008050!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactPerson;
