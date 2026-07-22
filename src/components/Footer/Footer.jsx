import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Instagram,
  YouTube,
  Facebook,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import { Eye } from "lucide-react"; // Import ikon mata untuk statistik
import services from "@/services"; // Pastikan path service sudah benar
import logoUrl from "@/assets/img/logoaja.png";

const Footer = () => {
  // Warna Emas Mewah
  const goldColor = "#D4AF37";
  const [totalKunjungan, setTotalKunjungan] = useState(0);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        // Memanggil service statistik
        const response = await services.statistik.getSummary();
        if (response.status === "success") {
          setTotalKunjungan(response.total);
        }
      } catch (error) {
        console.error("Gagal memuat statistik", error);
      }
    };
    recordVisit();
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#193b68",
        color: "#cbd5e1",
        py: 6,
        mt: "auto",
        // Mengganti border biru menjadi emas untuk kesan mewah
        borderTop: `4px solid ${goldColor}`,
      }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          {/* Kolom 1: Logo & Branding */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
              <img
                src={logoUrl}
                alt="Logo"
                style={{ width: 45, marginRight: 12 }}
              />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.2,
                  letterSpacing: 0.5,
                }}>
                PUSKESMAS KARANG REJO
                <br />
                <Typography
                  component="span"
                  sx={{
                    fontSize: "0.85rem",
                    color: goldColor,
                    fontWeight: 600,
                  }}>
                  KOTA TARAKAN
                </Typography>
              </Typography>
            </Box>
            <Typography
              variant="caption"
              sx={{
                color: "#cbd5e1",
                display: "block",
                maxWidth: 300,
                fontStyle: "italic",
              }}>
              "Pelayanan Kami Hari Ini Lebih Baik Dari Kemarin."
            </Typography>
          </Grid>

          {/* Kolom 2: Kontak Ringkas */}
          <Grid item size={{ xs: 12, md: 4 }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: goldColor,
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}>
              Kontak
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                {
                  icon: <LocationOn sx={{ fontSize: 18, color: goldColor }} />,
                  text: "Jl. R.A. Kartini RT. 12 Nomor 40 Tarakan",
                },
                {
                  icon: <Phone sx={{ fontSize: 18, color: goldColor }} />,
                  text: "0812-5878-1378",
                },
                {
                  icon: <Email sx={{ fontSize: 18, color: goldColor }} />,
                  text: "pkmkarjotarakan@gmail.com",
                },
              ].map((item, idx) => (
                <Box
                  key={idx}
                  sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  {item.icon}
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "0.85rem", color: "#e2e8f0" }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Kolom 3: Sosmed & Statistik Kunjungan */}
          <Grid
            item
            size={{ xs: 12, md: 4 }}
            sx={{ textAlign: { xs: "left", md: "right" } }}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: goldColor,
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}>
              Ikuti Kami
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                gap: 1,
                mb: 3,
              }}>
              {[
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/puskesmas.karangrejotarakan/",
                },
                {
                  icon: YouTube,
                  link: "https://www.youtube.com/@puskesmaskarangrejotarakan",
                },
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/puskesmaskarangrejotrkn",
                },
              ].map((item, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  component="a"
                  href={item.link}
                  target="_blank"
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    "&:hover": {
                      backgroundColor: goldColor,
                      color: "#193b68",
                    },
                  }}>
                  <item.icon fontSize="small" />
                </IconButton>
              ))}
            </Box>

            {/* Statistik Kunjungan */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                bgcolor: "rgba(255,255,255,0.05)",
                p: 1.5,
                borderRadius: "12px",
                border: "1px solid rgba(212, 175, 55, 0.2)",
              }}>
              <Eye size={20} color={goldColor} />
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "white", lineHeight: 1, fontWeight: 800 }}>
                  {totalKunjungan.toLocaleString("id-ID")}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#94a3b8",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                  }}>
                  Total Kunjungan
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(212, 175, 55, 0.2)" }} />

        <Typography
          variant="caption"
          sx={{ color: "#94a3b8", textAlign: "center", display: "block" }}>
          © {new Date().getFullYear()} Puskesmas Karang Rejo. All Rights
          Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
