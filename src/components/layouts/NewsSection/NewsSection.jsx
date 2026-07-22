import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Skeleton,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import services from "@/services";
import { useNavigate } from "react-router-dom";

const categoryColor = {
  artikel: { bg: "#f0fdfa", color: "#0d9488" },
  berita: { bg: "#f0fdf4", color: "#16a34a" },
  pengumuman: { bg: "#fffbeb", color: "#d97706" },
};

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  // Pastikan URL ini sesuai dengan path folder XAMPP Anda
  const BASE_URL_IMAGE = "https://admin.pkmkarjotarakan.com/uploads/informasi/";
  //const BASE_URL_IMAGE = "http://localhost/website/uploads/informasi/";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await services.informasi.getall("");
        if (response.status === "success") {
          // Ambil hanya 5 data terbaru
          setNewsData(response.data.slice(0, 5));
        }
      } catch (error) {
        console.error("Gagal memuat berita:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ py: 10, bgcolor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{ color: "#0d9488", fontWeight: 800, letterSpacing: 1.5 }}
            >
              Informasi Terkini
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", letterSpacing: "-0.02em" }}>
              Artikel, Berita & Pengumuman
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                bgcolor: "white",
                boxShadow: 1,
                "&:hover": { bgcolor: "#e2e8f0" },
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => scroll("right")}
              sx={{
                bgcolor: "white",
                boxShadow: 1,
                "&:hover": { bgcolor: "#e2e8f0" },
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>
        </Box>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 3,
            overflowX: "auto",
            scrollBehavior: "smooth",
            pb: 4,
            "&::-webkit-scrollbar": { display: "none" },
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {loading
            ? [...Array(3)].map((_, i) => (
                <Box key={i} sx={{ minWidth: 320 }}>
                  <Skeleton
                    variant="rectangular"
                    height={200}
                    sx={{ borderRadius: 4 }}
                  />
                  <Skeleton variant="text" sx={{ mt: 2 }} />
                  <Skeleton variant="text" width="60%" />
                </Box>
              ))
            : newsData.map((news, index) => (
                <motion.div
                  key={news.id || index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: 340, minWidth: 340, maxWidth: 340, flexShrink: 0, display: "flex" }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Wrapper untuk mengunci tinggi gambar */}
                    <Box sx={{ height: 210, overflow: "hidden", flexShrink: 0 }}>
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
                        onError={(e) => {
                          e.target.src = "https://placehold.co/600x400?text=No+Image";
                        }}
                      />
                    </Box>
                    
                    <CardContent
                      sx={{
                        p: 3,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
                          {news.kategori && (
                            <Chip
                              label={news.kategori.charAt(0).toUpperCase() + news.kategori.slice(1)}
                              size="small"
                              sx={{
                                bgcolor: categoryColor[news.kategori]?.bg ?? "#f1f5f9",
                                color: categoryColor[news.kategori]?.color ?? "#475569",
                                fontWeight: 700,
                                fontSize: "0.7rem",
                                height: 22,
                              }}
                            />
                          )}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                              color: "#94a3b8",
                              fontSize: "0.78rem",
                            }}
                          >
                            <Calendar size={12} />
                            {new Date(news.created_at).toLocaleDateString("id-ID", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </Box>
                        </Box>

                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: "1rem",
                            lineHeight: "1.5em",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            color: "#0f172a",
                          }}
                        >
                          {news.judul}
                        </Typography>
                      </Box>

                      <Box sx={{ mt: "auto" }}>
                        <Button
                          variant="text"
                          endIcon={<ArrowRight size={16} />}
                          href={`/read/${news.slug}`}
                          sx={{
                            p: 0,
                            fontWeight: 700,
                            textTransform: "none",
                            color: "#0d9488",
                            fontSize: "0.85rem",
                            "&:hover": { color: "#0f766e" },
                          }}
                        >
                          Baca Selengkapnya
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            href="/informasi/berita"
            endIcon={<ArrowRight size={20} />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 50,
              fontWeight: 700,
              textTransform: "none",
              borderColor: "#0d9488",
              color: "#0d9488",
              "&:hover": { borderColor: "#0f766e", bgcolor: "#f0fdfa" },
            }}
          >
            Lihat Semua Berita
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsSection;