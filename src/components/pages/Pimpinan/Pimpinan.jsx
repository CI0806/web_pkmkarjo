import React from "react";
import { Container, Typography, Box, Paper, Divider, Avatar, Grid } from "@mui/material";
import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import foto from "@/assets/img/fotoPimpinan.jpg";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Pimpinan = () => {
  const pimpinan = {
    nama: "dr. Hj. Ametta Angastuty",
    jabatan: "Kepala Puskesmas Karang Rejo",
    pendidikan: "Dokter Umum",
    sambutan: "Selamat datang di website resmi Puskesmas Karang Rejo. Sebagai Pusat Pelayanan Kesehatan Terintegrasi dan Bermutu, kami berkomitmen penuh untuk memberikan pelayanan prima yang inklusif bagi seluruh masyarakat. Kami percaya bahwa kesehatan adalah fondasi utama kesejahteraan, sehingga melalui inovasi klaster pelayanan, kami hadir lebih dekat untuk menjamin akses kesehatan yang lebih baik bagi Anda dan keluarga. Sesuai dengan tata nilai SMART, kami senantiasa Semangat Melayani dengan Amanah, Responsif, dan Tanggung Jawab. Kami terus berupaya meningkatkan tata kelola yang transparan dan akuntabel demi memenuhi kebutuhan masyarakat secara tepat. Segala pembaruan informasi, program kesehatan, dan jadwal kegiatan dalam website ini merupakan wujud dedikasi kami karena bagi kami, pelayanan kami hari ini harus lebih baik dari kemarin.Terima kasih atas kepercayaan Anda kepada Puskesmas Karang Rejo.",
    kutipan: "Puskesmas Karang Rejo hadir sebagai Pusat Pelayanan Kesehatan Terintegrasi dan Bermutu. Dengan semangat untuk terus berbenah, kami memegang teguh prinsip bahwa Kesehatan Anda adalah prioritas dan motivasi utama kami dalam bekerja. Hal inilah yang mendasari komitmen kami agar pelayanan kami hari ini senantiasa lebih baik dari kemarin."
  };

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Profil Pimpinan" 
        description="Mengenal lebih dekat pimpinan Puskesmas Karang Rejo."
      />

      <Container maxWidth="md" sx={{ mt: 6 }}>
        <MotionPaper 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 6 }, 
            borderRadius: "32px",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.08)"
          }}
        >
          <Grid container spacing={5} alignItems="center">
            {/* Foto dengan Efek Animasi */}
            <Grid item size={{xs:12, md:4}} sx={{ textAlign: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <Avatar
                  src={foto}
                  alt={pimpinan.nama}
                  sx={{ 
                    width: 220, 
                    height: 220, 
                    margin: '0 auto', 
                    border: '8px solid white',
                    boxShadow: '0 15px 30px rgba(30, 58, 138, 0.2)'
                  }}
                />
              </motion.div>
            </Grid>

            {/* Profil Singkat */}
            <Grid item size={{xs:12, md:8}}>
              <Typography variant="h3" fontWeight="800" color="#1e293b" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                {pimpinan.nama}
              </Typography>
              <Box sx={{ display: 'inline-block', px: 2, py: 0.5, borderRadius: '8px', bgcolor: '#e0e7ff', mb: 2 }}>
                <Typography variant="subtitle1" color="#4338ca" fontWeight="600">
                  {pimpinan.jabatan}
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" fontWeight="500" sx={{ mt: 1 }}>
                Pendidikan: {pimpinan.pendidikan}
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 6, borderColor: '#e2e8f0' }} />

          {/* Kata Sambutan */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h5" fontWeight="700" color="#1e293b" gutterBottom sx={{ mb: 3 }}>
              Kata Sambutan
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 2, fontSize: '1.1rem' }}>
              "{pimpinan.sambutan}"
            </Typography>
          </Box>

          {/* Kutipan dengan Style Modern */}
          <MotionBox 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            sx={{ 
              p: 4, 
              bgcolor: '#193b68', 
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Typography variant="h6" sx={{ color: 'white', fontStyle: 'italic', fontWeight: 300, position: 'relative', zIndex: 1 }}>
              <span style={{ fontSize: '3rem', position: 'absolute', top: -20, left: -10, opacity: 0.2 }}>"</span>
              {pimpinan.kutipan}
            </Typography>
          </MotionBox>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Pimpinan;