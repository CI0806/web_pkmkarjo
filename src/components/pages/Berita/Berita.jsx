import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  Pagination,
  Stack,
  Paper,
  Skeleton,
} from "@mui/material";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import services from "@/services"; // Import service API Anda

const Berita = () => {
  const { slugKategori } = useParams();
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  //const BASE_URL_IMAGE = "http://localhost/website/uploads/informasi/";
  const BASE_URL_IMAGE = "https://admin.pkmkarjotarakan.com/uploads/informasi/";

  // 1. Logika Judul dan Deskripsi Dinamis
  const getHeaderInfo = () => {
    switch (slugKategori?.toLowerCase()) {
      case "artikel":
        return {
          title: "Artikel Kesehatan",
          desc: "Edukasi dan tips kesehatan mendalam untuk keluarga Anda."
        };
      case "pengumuman":
        return {
          title: "Pengumuman Resmi",
          desc: "Informasi penting mengenai jadwal, layanan, dan kebijakan Puskesmas."
        };
      default:
        return {
          title: "Berita Terkini",
          desc: "Kabar terbaru seputar kegiatan dan layanan di Puskesmas Karang Rejo."
        };
    }
  };

  const header = getHeaderInfo();

  // 2. Perbaikan useEffect (Dependency Array)
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        setLoading(true);
        setNewsData([]);
        // Pastikan slugKategori dikirim ke API
        const response = await services.informasi.getall(slugKategori);
        if (response.status === "success") {
          setNewsData(response.data);
          setPage(1); // Reset ke halaman 1 setiap ganti kategori
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setNewsData([]); // Kosongkan data jika error
      } finally {
        setLoading(false);
      }
    };

    fetchBerita();
  }, [slugKategori]); // SANGAT PENTING: Masukkan slugKategori di sini!

  // Filter Logika berdasarkan search bar
  const filteredNews = newsData.filter((news) =>
    news.judul.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination Logika
  const count = Math.ceil(filteredNews.length / itemsPerPage);
  const currentData = filteredNews.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title={header.title} // Menggunakan judul dinamis
        description={header.desc} // Menggunakan deskripsi dinamis
      />

      <Container sx={{ mt: 6 }}>
        {/* Search Bar */}
        <Box sx={{ mb: 4, display: "flex", justifyContent: "center", px: 2 }}>
          <Paper
            elevation={0}
            sx={{
              p: "6px",
              width: "100%",
              maxWidth: 700,
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              bgcolor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              border: "1px solid #e2e8f0",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
            }}>
            <TextField
              fullWidth
              placeholder={`Cari ${slugKategori || 'informasi'}...`}
              variant="standard"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start" sx={{ pl: 2 }}>
                    <Search size={20} color="#1e3a8a" />
                  </InputAdornment>
                ),
              }}
              sx={{ "& .MuiInputBase-input": { px: 2, py: 1.5 } }}
            />
          </Paper>
        </Box>

        {/* News Grid */}
        <Grid container spacing={4}>
          {loading ? (
            // Tampilan Loading Skeleton
            [...Array(6)].map((_, i) => (
              <Grid item size={{xs:12, sm:6, md:4}} key={i}>
                <Skeleton
                  variant="rectangular"
                  height={220}
                  sx={{ borderRadius: 4 }}
                />
                <Skeleton sx={{ mt: 2 }} />
                <Skeleton width="60%" />
              </Grid>
            ))
          ) : currentData.length > 0 ? (
            currentData.map((news) => (
              <Grid item  size={{xs:12, sm:6, md:4}} key={news.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  style={{ height: "100%" }}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 4,
                      transition: "0.3s",
                      border: "1px solid rgba(0,0,0,0.05)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                      },
                    }}>
                    <Box sx={{ position: "relative" }}>
                      {/* Wrapper mengunci tinggi gambar */}
                      <Box sx={{ height: 200, overflow: "hidden" }}>
                        <CardMedia
                          component="img"
                          sx={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            transition: "transform 0.4s ease",
                            ".MuiCard-root:hover &": { transform: "scale(1.05)" },
                          }}
                          image={`${BASE_URL_IMAGE}${news.thumbnail}`}
                          alt={news.judul}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 15,
                          left: 15,
                          bgcolor: "rgba(255,255,255,0.9)",
                          backdropFilter: "blur(4px)",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}>
                        <Calendar size={14} color="#3b82f6" />
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>
                          {new Date(news.created_at).toLocaleDateString(
                            "id-ID",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </Typography>
                      </Box>
                    </Box>

                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        p: 3,
                      }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          mb: 1.5,
                          fontSize: "0.95rem",
                          lineHeight: 1.4,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          color: "#0f172a",
                        }}>
                        {news.judul}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 3,
                          lineHeight: 1.6,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}>
                        {/* Menggunakan isian berita sebagai kutipan jika tidak ada field excerpt */}
                        {news.isi
                          ?.replace(/<[^>]*>/g, "")
                          .substring(0, 150)}
                        ...
                      </Typography>

                      <Box sx={{ mt: "auto" }}>
                        <Button
                          fullWidth
                          endIcon={<ArrowRight size={18} />}
                          sx={{
                            justifyContent: "space-between",
                            borderRadius: 3,
                            textTransform: "none",
                            fontWeight: 700,
                            bgcolor: "#eff6ff",
                            color: "#3b82f6",
                            "&:hover": { bgcolor: "#3b82f6", color: "white" },
                          }}
                          onClick={() => navigate(`/read/${news.slug}`)}>
                          Baca Selengkapnya
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))
          ) : (
            <Grid item size={{xs:12}}>
              <Box textAlign="center" py={10}>
                <Typography variant="h6" color="text.secondary">
                  Tidak ada berita ditemukan.
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* Pagination */}
        {count > 1 && (
          <Stack spacing={2} sx={{ mt: 8, alignItems: "center" }}>
            <Pagination
              count={count}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size="large"
            />
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Berita;
