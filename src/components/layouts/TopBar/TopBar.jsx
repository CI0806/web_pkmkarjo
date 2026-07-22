import { Box, Typography, Container, IconButton, Stack } from "@mui/material";
import { Email, Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Music2 } from "lucide-react";

const shineAnimation = {
  "0%": { left: "-100%" },
  "100%": { left: "100%" },
};

const TopBar = () => {
  const socialLinks = [
    {
      icon: Facebook,
      link: "https://www.facebook.com/puskesmaskarangrejotrkn",
      label: "Facebook",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/puskesmas.karangrejotarakan/",
      label: "Instagram",
    },
    {
      icon: YouTube,
      link: "https://www.youtube.com/@puskesmaskarangrejotarakan",
      label: "YouTube",
    },
    {
      icon: Music2,
      link: "https://www.tiktok.com/@pkmkarangrejotarakan",
      label: "TikTok",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#193b68",
        color: "#ffffff",
        py: 0.8,
        fontSize: "0.75rem",
        display: { xs: "none", md: "block" },
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(212, 175, 55, 0.3)",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: "-100%",
          width: "50%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #D4AF37, transparent)",
          animation: "shine 3s infinite linear",
        },
        "@keyframes shine": shineAnimation,
      }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          {/* Info Kontak */}
          <Box sx={{ display: "flex", gap: 3 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email sx={{ color: "#e2e8f0", fontSize: "1rem" }} />
              <Typography variant="caption" sx={{ color: "#e2e8f0" }}>
                pkmkarjotarakan@gmail.com
              </Typography>
            </Stack>

            {/* Baris WhatsApp */}
            <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
              <WhatsApp sx={{ color: "#D4AF37", fontSize: "1rem" }} />
              <Typography
                variant="caption"
                sx={{ fontWeight: 600, color: "#D4AF37" }}>
                0812-5878-1378 (Chat Only)
              </Typography>
            </Stack>
          </Box>

          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {socialLinks.map((item, i) => (
              <IconButton
                key={i}
                size="small"
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#D4AF37",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}>
                <item.icon size={16} sx={{ fontSize: 16 }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TopBar;
