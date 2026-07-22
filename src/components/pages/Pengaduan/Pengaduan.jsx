import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Alert,
  Avatar,
  Fade,
  Slide
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PageHeader from "@/components/ui/PageHeader";
import api from "@/services";

const schema = yup.object().shape({
  nama: yup.string().required("Nama wajib diisi"),
  email: yup.string().email("Email tidak valid"),
  telepon: yup.string(),
  isi_pengaduan: yup.string().required("Isi aduan wajib diisi").min(10, "Minimal 10 karakter"),
});

const Pengaduan = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await api.pengaduan.create(data);
      if (response.status === "success") {
        setSubmitStatus({ type: "success", message: "Terima kasih, pengaduan Anda berhasil dikirim dan akan segera ditindaklanjuti." });
        reset();
      } else {
        setSubmitStatus({ type: "error", message: response.message || "Gagal mengirim pengaduan." });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Terjadi kesalahan jaringan. Silakan coba lagi." });
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      icon: <EditNoteIcon fontSize="large" />,
      title: "1. Isi Formulir",
      desc: "Tuliskan keluhan atau masukan Anda dengan jelas beserta identitas diri.",
      color: "#3b82f6" // blue
    },
    {
      icon: <FactCheckIcon fontSize="large" />,
      title: "2. Verifikasi Data",
      desc: "Tim admin akan memverifikasi laporan Anda dalam waktu 1x24 jam kerja.",
      color: "#8b5cf6" // purple
    },
    {
      icon: <ForwardToInboxIcon fontSize="large" />,
      title: "3. Tindak Lanjut",
      desc: "Laporan diteruskan ke unit layanan terkait untuk segera ditangani.",
      color: "#f59e0b" // amber
    },
    {
      icon: <TaskAltIcon fontSize="large" />,
      title: "4. Selesai",
      desc: "Maksimal 5 hari kerja, layanan akan diperbaiki sesuai dengan keluhan.",
      color: "#10b981" // green
    }
  ];

  return (
    <Box sx={{ pb: 12, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Layanan Pengaduan"
        description="Suara Anda sangat berarti. Sampaikan kritik, saran, atau keluhan untuk pelayanan yang lebih baik."
      />

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: -6 }, position: "relative", zIndex: 2 }}>
        
        {/* Banner Card */}
        <Fade in timeout={800}>
          <Paper 
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: "24px",
              background: "linear-gradient(135deg, #193b68 0%, #112643 100%)",
              color: "white",
              mb: 6,
              boxShadow: "0 20px 40px rgba(25, 59, 104, 0.15)",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
              position: "relative"
            }}
          >
            {/* Dekorasi Background */}
            <Box sx={{ position: "absolute", top: -50, right: -50, width: 250, height: 250, bgcolor: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
            <Box sx={{ position: "absolute", bottom: -80, right: 100, width: 150, height: 150, bgcolor: "rgba(212,175,55,0.1)", borderRadius: "50%" }} />

            <Grid container spacing={4} alignItems="center">
              <Grid item size={{ xs: 12, md: 8 }} sx={{ position: "relative", zIndex: 1 }}>
                <Typography variant="h4" fontWeight="800" gutterBottom sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
                  Kami Siap <span style={{ color: "#D4AF37" }}>Mendengar</span> Anda!
                </Typography>
                <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600 }}>
                  Setiap keluhan dan masukan yang Anda berikan adalah kunci bagi kami untuk terus mengevaluasi dan meningkatkan mutu pelayanan di Puskesmas Karang Rejo.
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 4 }} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", position: "relative", zIndex: 1 }}>
                <Avatar sx={{ width: 120, height: 120, bgcolor: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                  <SupportAgentIcon sx={{ fontSize: 60, color: "#D4AF37" }} />
                </Avatar>
              </Grid>
            </Grid>
          </Paper>
        </Fade>

        <Grid container spacing={5}>
          {/* Kolom Kiri: Prosedur */}
          <Grid item size={{ xs: 12, lg: 4 }}>
            <Typography variant="h5" fontWeight="800" color="#193b68" gutterBottom sx={{ mb: 4, display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ width: 6, height: 24, bgcolor: "#D4AF37", borderRadius: 10 }} />
              Alur Penanganan
            </Typography>

            <Box sx={{ position: "relative" }}>
              {/* Garis Vertikal Penghubung */}
              <Box sx={{ position: "absolute", top: 30, bottom: 30, left: 32, width: 2, bgcolor: "#e2e8f0", display: { xs: "none", sm: "block" } }} />

              {steps.map((step, index) => (
                <Slide in direction="up" timeout={500 + (index * 200)} key={index}>
                  <Box sx={{ display: "flex", mb: 4, position: "relative", zIndex: 1 }}>
                    <Avatar 
                      sx={{ 
                        width: 64, 
                        height: 64, 
                        bgcolor: "white", 
                        color: step.color, 
                        boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
                        mr: 3,
                        border: `2px solid ${step.color}15`
                      }}
                    >
                      {step.icon}
                    </Avatar>
                    <Box sx={{ pt: 1 }}>
                      <Typography variant="h6" fontWeight="700" color="#1e293b" gutterBottom sx={{ fontSize: "1.1rem" }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {step.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Slide>
              ))}
            </Box>
          </Grid>

          {/* Kolom Kanan: Form */}
          <Grid item size={{ xs: 12, lg: 8 }}>
            <Fade in timeout={1000}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: { xs: 3, sm: 5 }, 
                  borderRadius: "24px", 
                  boxShadow: "0 20px 50px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.03)",
                  bgcolor: "white"
                }}
              >
                <Typography variant="h5" fontWeight="800" color="#193b68" gutterBottom sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
                  Tulis Laporan
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  Identitas Anda akan kami jaga kerahasiaannya. Mohon isi data dengan sebenar-benarnya.
                </Typography>
                
                {submitStatus && (
                  <Alert 
                    severity={submitStatus.type} 
                    sx={{ 
                      mb: 4, 
                      borderRadius: "12px",
                      "& .MuiAlert-icon": { alignItems: "center" }
                    }}
                  >
                    {submitStatus.message}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Grid container spacing={3}>
                    <Grid item size={{ xs: 12 }}>
                      <Typography variant="subtitle2" fontWeight="600" color="#475569" sx={{ mb: 1 }}>Nama Lengkap *</Typography>
                      <TextField
                        fullWidth
                        placeholder="Masukkan nama lengkap Anda"
                        {...register("nama")}
                        error={!!errors.nama}
                        helperText={errors.nama?.message}
                        variant="outlined"
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", bgcolor: "#f8fafc" } }}
                      />
                    </Grid>
                    
                    <Grid item size={{ xs: 12, sm: 6 }}>
                      <Typography variant="subtitle2" fontWeight="600" color="#475569" sx={{ mb: 1 }}>Email Aktif (Opsional)</Typography>
                      <TextField
                        fullWidth
                        placeholder="contoh@email.com"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        variant="outlined"
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", bgcolor: "#f8fafc" } }}
                      />
                    </Grid>

                    <Grid item size={{ xs: 12, sm: 6 }}>
                      <Typography variant="subtitle2" fontWeight="600" color="#475569" sx={{ mb: 1 }}>No. Telepon / WA (Opsional)</Typography>
                      <TextField
                        fullWidth
                        placeholder="0812xxxxxx"
                        {...register("telepon")}
                        variant="outlined"
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", bgcolor: "#f8fafc" } }}
                      />
                    </Grid>

                    <Grid item size={{ xs: 12 }}>
                      <Typography variant="subtitle2" fontWeight="600" color="#475569" sx={{ mb: 1 }}>Rincian Pengaduan / Keluhan *</Typography>
                      <TextField
                        fullWidth
                        multiline
                        rows={6}
                        {...register("isi_pengaduan")}
                        error={!!errors.isi_pengaduan}
                        helperText={errors.isi_pengaduan?.message}
                        variant="outlined"
                        placeholder="Tuliskan secara detail apa yang menjadi keluhan Anda. Kapan dan di mana kejadiannya..."
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", bgcolor: "#f8fafc" } }}
                      />
                    </Grid>

                    <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        disabled={loading}
                        endIcon={<SendIcon />}
                        sx={{ 
                          py: 1.8, 
                          borderRadius: "14px",
                          textTransform: "none",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          bgcolor: "#193b68",
                          boxShadow: "0 10px 20px rgba(25, 59, 104, 0.2)",
                          "&:hover": {
                            bgcolor: "#112643",
                            transform: "translateY(-2px)",
                            boxShadow: "0 15px 25px rgba(25, 59, 104, 0.3)",
                          },
                          transition: "all 0.3s ease"
                        }}
                      >
                        {loading ? "Sedang Mengirim..." : "Kirim Laporan Sekarang"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pengaduan;
