import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f8fafc",
        textAlign: "center",
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              fontSize: { xs: "5rem", md: "8rem" },
              color: "#193b68",
              lineHeight: 1,
              mb: 2,
            }}
          >
            404
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            color="#0f172a"
            gutterBottom
            sx={{ mb: 3 }}
          >
            Oops! Halaman Tidak Ditemukan
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: "1.1rem" }}>
            Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<Home />}
            onClick={() => navigate("/")}
            sx={{
              bgcolor: "#D4AF37",
              color: "#193b68",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 8,
              boxShadow: "0 10px 25px rgba(212,175,55,0.4)",
              "&:hover": {
                bgcolor: "#b48c1e",
              },
            }}
          >
            Kembali ke Beranda
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default NotFound;
