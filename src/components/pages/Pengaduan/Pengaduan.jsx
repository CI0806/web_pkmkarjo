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
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
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
        setSubmitStatus({ type: "success", message: "Terima kasih, pengaduan Anda berhasil dikirim dan akan segera kami proses." });
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

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Sistem & Layanan Pengaduan"
        description="Sampaikan aduan, keluhan, atau laporan Anda terkait pelayanan kami secara online."
      />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={4}>
          {/* Kolom Kiri: Prosedur */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "sticky", top: "100px" }}>
              <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                Prosedur Pengaduan
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Untuk memastikan pengaduan Anda ditangani dengan cepat dan tepat, silakan perhatikan tata cara berikut:
              </Typography>

              <Paper sx={{ p: 3, borderRadius: "16px", mb: 3 }} elevation={0} variant="outlined">
                <Box component="ol" sx={{ m: 0, pl: 2, color: "text.secondary", "& li": { mb: 2 } }}>
                  <li>
                    <Typography variant="body2" fontWeight="bold" color="text.primary">Isi Form dengan Lengkap</Typography>
                    Sertakan identitas yang jelas (bisa dirahasiakan jika diminta) beserta rincian kejadian.
                  </li>
                  <li>
                    <Typography variant="body2" fontWeight="bold" color="text.primary">Proses Verifikasi</Typography>
                    Tim kami akan memverifikasi aduan Anda dalam waktu 1x24 jam kerja.
                  </li>
                  <li>
                    <Typography variant="body2" fontWeight="bold" color="text.primary">Tindak Lanjut</Typography>
                    Aduan yang valid akan langsung diteruskan ke unit terkait untuk ditindaklanjuti.
                  </li>
                  <li>
                    <Typography variant="body2" fontWeight="bold" color="text.primary">Penyelesaian</Typography>
                    Penyelesaian masalah maksimal 5 hari kerja (tergantung tingkat kesulitan).
                  </li>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Kolom Kanan: Form */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Formulir Pengaduan
              </Typography>
              
              {submitStatus && (
                <Alert severity={submitStatus.type} sx={{ mb: 3, borderRadius: "8px" }}>
                  {submitStatus.message}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nama Lengkap"
                      {...register("nama")}
                      error={!!errors.nama}
                      helperText={errors.nama?.message}
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email (Opsional)"
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="No. Telepon / WhatsApp"
                      {...register("telepon")}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Isi Pengaduan / Keluhan"
                      multiline
                      rows={6}
                      {...register("isi_pengaduan")}
                      error={!!errors.isi_pengaduan}
                      helperText={errors.isi_pengaduan?.message}
                      variant="outlined"
                      placeholder="Ceritakan keluhan Anda secara detail di sini..."
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      endIcon={<SendIcon />}
                      sx={{ 
                        py: 1.5, 
                        borderRadius: "10px",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        fontWeight: "bold"
                      }}
                    >
                      {loading ? "Mengirim..." : "Kirim Pengaduan"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pengaduan;
