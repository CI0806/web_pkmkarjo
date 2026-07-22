import { Box, Typography, Container } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PageHeader = ({ title, description, children }) => {
  const gold = "rgba(16, 185, 129, 0.2)"; // Emas transparan untuk dekorasi
  const navy = "#0d9488";
  const decorations = [
    { top: "10%", left: "5%", size: 200, duration: 20, delay: 0 },
    { top: "40%", right: "5%", size: 150, duration: 25, delay: 2 },
    { bottom: "10%", left: "20%", size: 100, duration: 15, delay: 5 },
  ];

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 8 },
        background: `radial-gradient(circle at 50% 50%, #254b7d 0%, ${navy} 100%)`,
        borderBottom: `1px solid ${gold}`,
        textAlign: "center",
        color: "#ffffff",
      }}>
      {/* Dekorasi Animasi */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}>
        {decorations.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              x: [0, 30, -20, 0],
              y: [0, -50, 20, 0],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
            style={{
              position: "absolute",
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              width: item.size,
              height: item.size,
              border: `1px solid ${gold}`,
              borderRadius: "40%",
              filter: "blur(8px)",
              background: `linear-gradient(45deg, ${gold}, transparent)`,
            }}
          />
        ))}
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              mb: 2,
              fontSize: { xs: "2rem", md: "3.5rem" },
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}>
            {title}
          </Typography>
          {description && (
            <Typography
              variant="h6"
              fontWeight={300}
              sx={{
                maxWidth: "600px",
                mx: "auto",
                mb: 4,
                opacity: 0.9,
                color: "#e2e8f0",
              }}>
              {description}
            </Typography>
          )}
        </motion.div>
        {children && <Box>{children}</Box>}
      </Container>
    </Box>
  );
};

export default PageHeader;
