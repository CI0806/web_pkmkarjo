import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Fade,
  Dialog,
  Chip,
  Skeleton,
  Breadcrumbs,
  Link,
} from "@mui/material";
import {
  Close as CloseIcon,
  ZoomIn as ZoomInIcon,
  ChevronLeft,
  ChevronRight,
  Folder as FolderIcon,
  ArrowBack,
  PhotoLibrary,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import services from "@/services";

const BASE_URL_GALLERY = "https://admin.pkmkarjotarakan.com/uploads/gallery/";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await services.gallery.getall();
        if (response.status === "success") setPhotos(response.data);
      } catch (error) {
        console.error("Gagal mengambil data gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  // Kelompokkan foto per folder
  const folders = useMemo(() => {
    const grouped = {};
    photos.forEach((photo) => {
      const key = photo.folder || photo.album || photo.kategori || "Galeri Umum";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(photo);
    });
    return Object.entries(grouped).map(([name, items]) => ({
      name,
      items,
      cover: items[0],
      count: items.length,
    }));
  }, [photos]);

  const folderPhotos = selectedFolder ? selectedFolder.items : [];

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const goPrev = useCallback(() => {
    setLightbox((lb) => ({ ...lb, index: (lb.index - 1 + folderPhotos.length) % folderPhotos.length }));
  }, [folderPhotos.length]);

  const goNext = useCallback(() => {
    setLightbox((lb) => ({ ...lb, index: (lb.index + 1) % folderPhotos.length }));
  }, [folderPhotos.length]);

  useEffect(() => {
    if (!lightbox.open) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox.open, goPrev, goNext]);

  const currentPhoto = folderPhotos[lightbox.index];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Galeri Kegiatan"
        description="Dokumentasi visual berbagai kegiatan dan layanan di Puskesmas Karang Rejo."
      />

      <Container maxWidth="lg" sx={{ mt: 6 }}>

        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link
            underline="hover"
            color={selectedFolder ? "inherit" : "text.primary"}
            sx={{ cursor: "pointer", fontWeight: 600, display: "flex", alignItems: "center", gap: 0.5 }}
            onClick={() => setSelectedFolder(null)}>
            <PhotoLibrary sx={{ fontSize: 18 }} />
            Semua Folder
          </Link>
          {selectedFolder && (
            <Typography color="text.primary" sx={{ fontWeight: 700 }}>
              {selectedFolder.name}
            </Typography>
          )}
        </Breadcrumbs>

        <AnimatePresence mode="wait">

          {/* ===== FOLDER VIEW ===== */}
          {!selectedFolder && (
            <motion.div
              key="folders"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}>
              <Grid container spacing={3}>
                {loading
                  ? [...Array(6)].map((_, i) => (
                      <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                        <Skeleton variant="rectangular" height={220} sx={{ borderRadius: 4 }} />
                        <Skeleton variant="text" sx={{ mt: 1 }} width="60%" />
                      </Grid>
                    ))
                  : folders.length > 0
                  ? folders.map((folder, fi) => (
                      <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={folder.name}>
                          <Card
                            onClick={() => setSelectedFolder(folder)}
                            sx={{
                              borderRadius: 4,
                              overflow: "hidden",
                              cursor: "pointer",
                              position: "relative",
                              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                "& .folder-overlay": { opacity: 1 },
                              },
                            }}>
                            {/* Folder Cover — Grid dari 4 foto pertama */}
                            <Box sx={{ height: 220, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2px", bgcolor: "#e2e8f0" }}>
                              {folder.items.slice(0, 4).map((photo, pi) => (
                                <Box
                                  key={pi}
                                  component="img"
                                  src={`${BASE_URL_GALLERY}${photo.nama_file}`}
                                  loading="lazy"
                                  alt=""
                                  onError={(e) => { e.target.style.display = "none"; }}
                                  sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    gridColumn: folder.items.length === 1 ? "1 / span 2" : undefined,
                                    gridRow: folder.items.length === 1 ? "1 / span 2" : undefined,
                                  }}
                                />
                              ))}
                            </Box>

                            {/* Overlay */}
                            <Box
                              className="folder-overlay"
                              sx={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to top, rgba(25,59,104,0.9) 0%, rgba(0,0,0,0.1) 60%)",
                                opacity: 0.8,
                                transition: "opacity 0.3s ease",
                              }}
                            />

                            {/* Info */}
                            <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2.5 }}>
                              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                                <FolderIcon sx={{ color: "#D4AF37", fontSize: 20 }} />
                                <Typography sx={{ color: "white", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3 }}>
                                  {folder.name}
                                </Typography>
                              </Box>
                              <Chip
                                label={`${folder.count} foto`}
                                size="small"
                                sx={{ bgcolor: "rgba(212,175,55,0.3)", color: "#facc15", fontWeight: 700, fontSize: "0.72rem", border: "1px solid rgba(212,175,55,0.5)" }}
                              />
                            </Box>
                          </Card>
                      </Grid>
                    ))
                  : (
                    <Grid item size={{ xs: 12 }}>
                      <Box sx={{ textAlign: "center", py: 10 }}>
                        <Typography color="text.secondary">Belum ada foto dalam galeri.</Typography>
                      </Box>
                    </Grid>
                  )}
              </Grid>
            </motion.div>
          )}

          {/* ===== PHOTO VIEW (dalam folder) ===== */}
          {selectedFolder && (
            <motion.div
              key="photos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}>

              {/* Tombol Kembali + Judul Folder */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                <IconButton
                  onClick={() => setSelectedFolder(null)}
                  sx={{ bgcolor: "white", boxShadow: 1, "&:hover": { bgcolor: "#193b68", color: "white" } }}>
                  <ArrowBack />
                </IconButton>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#0f172a" }}>
                    {selectedFolder.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedFolder.count} foto
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={2.5}>
                {folderPhotos.map((photo, index) => (
                  <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={photo.id}>
                      <Card
                        onClick={() => openLightbox(index)}
                        sx={{
                          borderRadius: 3,
                          overflow: "hidden",
                          cursor: "pointer",
                          position: "relative",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
                            "& .photo-overlay": { opacity: 1 },
                          },
                        }}>
                        <Box sx={{ height: 200, overflow: "hidden", bgcolor: "#f1f5f9" }}>
                          <CardMedia
                            component="img"
                            image={`${BASE_URL_GALLERY}${photo.nama_file}`}
                            alt={photo.judul}
                            loading="lazy"
                            sx={{
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.5s ease",
                              ".MuiCard-root:hover &": { transform: "scale(1.08)" },
                            }}
                          />
                        </Box>
                        <Box
                          className="photo-overlay"
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to top, rgba(25,59,104,0.9) 0%, transparent 70%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                          }}>
                          <ZoomInIcon sx={{ color: "white", fontSize: 40, mb: 1 }} />
                          <Typography sx={{ color: "white", fontSize: "0.8rem", fontWeight: 700, textAlign: "center", px: 1 }}>
                            {photo.judul}
                          </Typography>
                        </Box>
                      </Card>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          )}

        </AnimatePresence>
      </Container>

      {/* ===== LIGHTBOX ===== */}
      <Dialog
        fullScreen
        open={lightbox.open}
        onClose={closeLightbox}
        PaperProps={{ sx: { bgcolor: "rgba(0,0,0,0.95)", display: "flex", alignItems: "center", justifyContent: "center" } }}>

        {/* Tombol Tutup */}
        <IconButton
          onClick={closeLightbox}
          sx={{ position: "absolute", top: 16, right: 16, color: "white", bgcolor: "rgba(255,255,255,0.1)", zIndex: 10, "&:hover": { bgcolor: "rgba(255,0,0,0.5)" } }}>
          <CloseIcon />
        </IconButton>

        {/* Counter */}
        <Box sx={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
          <Chip
            label={`${lightbox.index + 1} / ${folderPhotos.length}`}
            sx={{ bgcolor: "rgba(255,255,255,0.15)", color: "white", fontWeight: 700 }}
          />
        </Box>

        {/* Tombol Prev */}
        <IconButton
          onClick={goPrev}
          sx={{ position: "absolute", left: { xs: 8, md: 24 }, color: "white", bgcolor: "rgba(255,255,255,0.1)", width: 52, height: 52, "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
          <ChevronLeft sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Foto */}
        <AnimatePresence mode="wait">
          {currentPhoto && (
            <motion.div
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "90vw", maxHeight: "90vh" }}>
              <Box
                component="img"
                src={`${BASE_URL_GALLERY}${currentPhoto.nama_file}`}
                alt={currentPhoto.judul}
                sx={{ maxWidth: "85vw", maxHeight: "80vh", objectFit: "contain", borderRadius: 2, boxShadow: "0 25px 60px rgba(0,0,0,0.6)" }}
              />
              <Typography sx={{ color: "rgba(255,255,255,0.85)", mt: 2, fontWeight: 600, fontSize: "1rem", textAlign: "center" }}>
                {currentPhoto.judul}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tombol Next */}
        <IconButton
          onClick={goNext}
          sx={{ position: "absolute", right: { xs: 8, md: 24 }, color: "white", bgcolor: "rgba(255,255,255,0.1)", width: 52, height: 52, "&:hover": { bgcolor: "rgba(255,255,255,0.2)" } }}>
          <ChevronRight sx={{ fontSize: 32 }} />
        </IconButton>

        {/* Thumbnail strip bawah */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            gap: 1,
            overflowX: "auto",
            p: 2,
            bgcolor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            "&::-webkit-scrollbar": { height: 4 },
            "&::-webkit-scrollbar-thumb": { bgcolor: "rgba(255,255,255,0.3)", borderRadius: 2 },
          }}>
          {folderPhotos.map((photo, idx) => (
            <Box
              key={idx}
              onClick={() => setLightbox((lb) => ({ ...lb, index: idx }))}
              component="img"
              src={`${BASE_URL_GALLERY}${photo.nama_file}`}
              alt=""
              sx={{
                height: 56,
                width: 56,
                objectFit: "cover",
                borderRadius: 1.5,
                cursor: "pointer",
                flexShrink: 0,
                border: idx === lightbox.index ? "2px solid #D4AF37" : "2px solid transparent",
                opacity: idx === lightbox.index ? 1 : 0.55,
                transition: "all 0.2s ease",
                "&:hover": { opacity: 1 },
              }}
            />
          ))}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Gallery;
