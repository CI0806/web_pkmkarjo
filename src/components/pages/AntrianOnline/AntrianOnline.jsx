import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import PageHeader from "@/components/ui/PageHeader";
import img1 from "@/assets/img/1.png";
import img2 from "@/assets/img/2.png";
import img3 from "@/assets/img/3.png";
import img4 from "@/assets/img/4.png";

const AntrianOnline = () => {
  const steps = [
    {
      label: "Buka Aplikasi Mobile JKN",
      description:
        "Pastikan aplikasi Mobile JKN sudah terinstall dan Anda sudah login dengan akun yang aktif.",
    },
    {
      label: "Pilih Menu Pendaftaran",
      description:
        "Pada halaman utama, klik ikon 'Pendaftaran Pelayanan (Antrean)'.",
      image: img1,
    },
    {
      label: "Pilih Fasilitas Kesehatan",
      description:
        "Pilih 'Faskes Tingkat Pertama' dan cari Puskesmas Karang Rejo.",
      image: img2,
    },
    {
      label: "Isi Data Kunjungan",
      description:
        "Pilih Poli tujuan, tanggal rencana kunjungan, dan masukkan keluhan kesehatan Anda, lalu klik 'Simpan'.",
      image: img3,
    },
    {
      label: "Dapatkan Nomor Antrean",
      description:
        "Nomor antrean akan muncul. Anda bisa langsung menuju loket pada hari pelayanan sesuai nomor tersebut.",
      image: img4,
    },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Panduan Antrean Online"
        description="Langkah-langkah mudah mendaftar antrean melalui aplikasi Mobile JKN."
      />

      <Container maxWidth="sm" sx={{ mt: 6 }}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: "20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 4,
              color: "#1e3a8a",
            }}>
            <PhoneAndroidIcon sx={{ fontSize: 40, mr: 2 }} />
            <Typography variant="h5" fontWeight="bold">
              Tutorial Mobile JKN
            </Typography>
          </Box>

          <Stepper orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index} active={true}>
                <StepLabel>
                  <Typography fontWeight="bold">{step.label}</Typography>
                </StepLabel>
                <StepContent>
                  <Typography sx={{ color: "text.secondary", mb: 2 }}>
                    {step.description}
                  </Typography>
                  <Box
                    component="img"
                    src={step.image}
                    sx={{
                      width: "100%",
                      maxWidth: "200px",
                      borderRadius: "8px",
                    }}
                  />
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Pendaftaran dibuka 24 jam sebelum jam buka operasional dan ditutup 1
            jam sebelum tutup.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AntrianOnline;
