import { Box, Typography, Container } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const PageHeader = ({ title, description, children }) => {
  const gold = "#D4AF37"; 
  const navy = "#193b68";
  
  const decorations = [
    { top: "-10%", left: "-5%", size: 300, duration: 20, delay: 0 },
    { top: "40%", right: "-10%", size: 250, duration: 25, delay: 2 },
    { bottom: "-20%", left: "30%", size: 200, duration: 15, delay: 5 },
  ];

  return (
    <Box
      component="header"
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        pt: { xs: 15, md: 18 },
        pb: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, #112643 0%, ${navy} 100%)`,
        textAlign: "center",
        color: "#ffffff",
      }}>
      
      {/* Ornamen Latar Belakang (Glowing Orbs) */}
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
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.2, 1],
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
              borderRadius: "50%",
              filter: "blur(60px)",
              background: `radial-gradient(circle, ${gold} 0%, transparent 70%)`,
            }}
          />
        ))}
      </Box>

      {/* Grid Pattern Overlay */}
      <Box 
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.03,
          backgroundImage: `linear-gradient(${gold} 1px, transparent 1px), linear-gradient(90deg, ${gold} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          
          {/* Garis Aksen Emas */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Box sx={{ width: 60, height: 4, bgcolor: gold, borderRadius: 2 }} />
          </Box>

          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              mb: 3,
              fontSize: { xs: "2.2rem", md: "3.8rem" },
              letterSpacing: "-0.02em",
              textShadow: "0 10px 30px rgba(0,0,0,0.4)",
            }}>
            {title}
          </Typography>
          
          {description && (
            <Typography
              variant="h6"
              fontWeight={400}
              sx={{
                maxWidth: "700px",
                mx: "auto",
                mb: 4,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                fontSize: { xs: "1.05rem", md: "1.2rem" },
              }}>
              {description}
            </Typography>
          )}
        </motion.div>
        {children && <Box>{children}</Box>}
      </Container>

      {/* Wave shape divider at the bottom */}
      <Box sx={{ position: "absolute", bottom: -1, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', height: 'auto' }}>
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#f8fafc" />
        </svg>
      </Box>
    </Box>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default PageHeader;
