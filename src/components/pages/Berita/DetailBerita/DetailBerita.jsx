import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Stack,
  Skeleton,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";
import { ArrowBackIosNew, CalendarMonth, PersonOutlineOutlined } from "@mui/icons-material";
import services from "@/services"; // Import service API

const DetailBerita = () => {
  const { id } = useParams(); // 'id' bisa berisi slug atau ID asli tergantung route
  const navigate = useNavigate();
  
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  //const BASE_URL_IMAGE = "http://localhost/website/uploads/informasi/";
  const BASE_URL_IMAGE = "https://admin.pkmkarjotarakan.com/uploads/informasi/";

  useEffect(() => {
    const fetchDetailBerita = async () => {
      try {
        setLoading(true);
        // Memanggil API berdasarkan ID/Slug
        const response = await services.informasi.getone(id);
        if (response.status === "success") {
          setBerita(response.data);
        }
      } catch (error) {
        console.error("Gagal memuat detail berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetailBerita();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ pb: 8, bgcolor: "#f8fafc", minHeight: "100vh" }}>
        <PageHeader title={"Memuat Berita..."} />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Skeleton variant="text" height={80} />
          <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 4, my: 3 }} />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="60%" />
        </Container>
      </Box>
    );
  }

  if (!berita) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography>Berita tidak ditemukan.</Typography>
        <Button onClick={() => navigate(-1)}>Kembali</Button>
      </Box>
    );
  }

  return (
    <Box sx={{ pb: 8, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader title={berita.judul} />

      <Container maxWidth="md" sx={{ mt: 4, position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            startIcon={<ArrowBackIosNew />}
            onClick={() => navigate(-1)}
            sx={{
              mb: 3,
              textTransform: "none",
              color: "#1e293b",
              fontWeight: 600,
              "&:hover": { bgcolor: "rgba(30, 41, 59, 0.05)" },
            }}
          >
            Kembali ke Berita
          </Button>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 6,
              boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
              border: "1px solid #e2e8f0",
            }}
          >
            {/* Judul Berita dari Database */}
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: "#0f172a",
                lineHeight: 1.2,
                mb: 3,
                fontSize: { xs: "1.8rem", md: "2.8rem" },
              }}
            >
              {berita.judul}
            </Typography>

            {/* Metadata */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CalendarMonth sx={{ fontSize: 20, color: "#3b82f6" }} />
                <Typography variant="body2" color="text.secondary" fontWeight="500">
                  {new Date(berita.created_at).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PersonOutlineOutlined sx={{ fontSize: 20, color: "#3b82f6" }} />
                <Typography variant="body2" color="text.secondary" fontWeight="500">
                  {berita.author || "Admin Puskesmas"}
                </Typography>
              </Box>
            </Stack>

            {/* Gambar Utama */}
            <Box
              component="img"
              src={`${BASE_URL_IMAGE}${berita.thumbnail}`}
              alt={berita.judul}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: { xs: "250px", md: "500px" },
                objectFit: "cover",
                borderRadius: 4,
                mb: 5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Gambar+Tidak+Tersedia";
              }}
            />

            {/* Isi Berita (Render HTML jika isinya dari Text Editor) */}
            <Box
              sx={{
                lineHeight: 2,
                fontSize: "1.15rem",
                color: "#334155",
                textAlign: "justify",
                "& p": { mb: 2 },
                "& img": { maxWidth: "100%", borderRadius: 2 },
                "&::first-letter": {
                  fontSize: "3.5rem",
                  fontWeight: "bold",
                  float: "left",
                  mr: 1.5,
                  color: "#3b82f6",
                  lineHeight: 0.8,
                  mt: 1,
                },
              }}
              dangerouslySetInnerHTML={{ __html: berita.isi }}
            />
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default DetailBerita;