import React from "react";
import { Container, Typography, Box, Paper, Divider, Avatar, Grid } from "@mui/material";
import { motion } from "framer-motion";
import PageHeader from "@/components/ui/PageHeader";
import { Quote } from "lucide-react";
import foto from "@/assets/img/fotoPimpinan.jpg";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Pimpinan = () => {
  const pimpinan = {
    nama: "dr. Hj. Ametta Angastuty",
    jabatan: "Kepala Puskesmas Karang Rejo",
    pendidikan: "Dokter Umum",
    sambutan: "Selamat datang di website resmi Puskesmas Karang Rejo. Sebagai Pusat Pelayanan Kesehatan Terintegrasi dan Bermutu, kami berkomitmen penuh untuk memberikan pelayanan prima yang inklusif bagi seluruh masyarakat. Kami percaya bahwa kesehatan adalah fondasi utama kesejahteraan, sehingga melalui inovasi klaster pelayanan, kami hadir lebih dekat untuk menjamin akses kesehatan yang lebih baik bagi Anda dan keluarga. Sesuai dengan tata nilai SMART, kami senantiasa Semangat Melayani dengan Amanah, Responsif, dan Tanggung Jawab. Kami terus berupaya meningkatkan tata kelola yang transparan dan akuntabel demi memenuhi kebutuhan masyarakat secara tepat. Segala pembaruan informasi, program kesehatan, dan jadwal kegiatan dalam website ini merupakan wujud dedikasi kami karena bagi kami, pelayanan kami hari ini harus lebih baik dari kemarin. Terima kasih atas kepercayaan Anda kepada Puskesmas Karang Rejo.",
    kutipan: "Puskesmas Karang Rejo hadir sebagai Pusat Pelayanan Kesehatan Terintegrasi dan Bermutu. Dengan semangat untuk terus berbenah, kami memegang teguh prinsip bahwa Kesehatan Anda adalah prioritas dan motivasi utama kami dalam bekerja. Hal inilah yang mendasari komitmen kami agar pelayanan kami hari ini senantiasa lebih baik dari kemarin."
  };

  return (
    <Box sx={{ pb: 12, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader 
        title="Profil Pimpinan" 
        description="Mengenal lebih dekat pimpinan Puskesmas Karang Rejo."
      />

      <Container maxWidth="md" sx={{ mt: { xs: 6, md: -2 }, position: "relative", zIndex: 10 }}>
        <MotionPaper 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          elevation={0}
          sx={{ 
            borderRadius: "32px",
            border: "1px solid rgba(0,0,0,0.04)",
            boxShadow: "0 25px 50px -12px rgba(25, 59, 104, 0.15)",
            overflow: "hidden",
            bgcolor: "white"
          }}
        >
          {/* Top Banner (Royal Blue gradient) */}
          <Box sx={{ height: 160, background: "linear-gradient(135deg, #193b68 0%, #112643 100%)", position: "relative" }}>
             <Box sx={{ position: "absolute", top: -50, right: -20, width: 200, height: 200, bgcolor: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />
          </Box>

          <Box sx={{ px: { xs: 3, md: 6 }, pb: { xs: 4, md: 6 } }}>
            <Grid container spacing={5} sx={{ mt: -16 }}>
              {/* Foto Profile */}
              <Grid item size={{xs:12, md:4}} sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Avatar
                    src={foto}
                    alt={pimpinan.nama}
                    sx={{ 
                      width: 200, 
                      height: 200, 
                      border: '6px solid white',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                      mb: 3,
                      bgcolor: "#f1f5f9"
                    }}
                  />
                </motion.div>
                
                {/* Badge Jabatan */}
                <Box 
                  sx={{ 
                    bgcolor: "rgba(212,175,55,0.15)", 
                    color: "#b48c1e", 
                    px: 3, 
                    py: 1, 
                    borderRadius: 8,
                    border: "1px solid rgba(212,175,55,0.3)"
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="700" letterSpacing={1}>
                    {pimpinan.jabatan.toUpperCase()}
                  </Typography>
                </Box>
              </Grid>

              {/* Biodata Singkat */}
              <Grid item size={{xs:12, md:8}} sx={{ pt: { xs: 3, md: 16 } }}>
                <Typography variant="h3" fontWeight="900" color="#193b68" gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  {pimpinan.nama}
                </Typography>
                <Typography variant="body1" color="text.secondary" fontWeight="600" sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#D4AF37' }} />
                  Pendidikan: {pimpinan.pendidikan}
                </Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 6, borderColor: '#f1f5f9' }} />

            {/* Kata Sambutan */}
            <Box sx={{ mb: 6, position: 'relative' }}>
              <Typography variant="h5" fontWeight="800" color="#1e293b" gutterBottom sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                Kata Sambutan
              </Typography>
              
              <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.9, fontSize: '1.05rem', textAlign: 'justify' }}>
                <span style={{ fontSize: '2.5rem', color: '#193b68', float: 'left', lineHeight: 0.8, marginRight: '8px', marginTop: '8px' }}>S</span>
                elamat datang di website resmi Puskesmas Karang Rejo. Sebagai Pusat Pelayanan Kesehatan Terintegrasi dan Bermutu, kami berkomitmen penuh untuk memberikan pelayanan prima yang inklusif bagi seluruh masyarakat. 
                <br/><br/>
                Kami percaya bahwa kesehatan adalah fondasi utama kesejahteraan, sehingga melalui inovasi klaster pelayanan, kami hadir lebih dekat untuk menjamin akses kesehatan yang lebih baik bagi Anda dan keluarga. Sesuai dengan tata nilai SMART, kami senantiasa Semangat Melayani dengan Amanah, Responsif, dan Tanggung Jawab. 
                <br/><br/>
                Kami terus berupaya meningkatkan tata kelola yang transparan dan akuntabel demi memenuhi kebutuhan masyarakat secara tepat. Segala pembaruan informasi, program kesehatan, dan jadwal kegiatan dalam website ini merupakan wujud dedikasi kami karena bagi kami, pelayanan kami hari ini harus lebih baik dari kemarin. Terima kasih atas kepercayaan Anda kepada Puskesmas Karang Rejo.
              </Typography>
            </Box>

            {/* Kutipan Eksklusif */}
            <MotionBox 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              sx={{ 
                p: { xs: 4, md: 5 }, 
                background: "linear-gradient(135deg, #193b68 0%, #112643 100%)",
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: "0 20px 40px rgba(25,59,104,0.2)"
              }}
            >
              <Box sx={{ position: 'absolute', top: -10, left: 20, opacity: 0.1, color: '#D4AF37' }}>
                <Quote size={100} />
              </Box>
              
              <Typography variant="h6" sx={{ color: 'white', fontStyle: 'italic', fontWeight: 400, position: 'relative', zIndex: 1, lineHeight: 1.8 }}>
                "{pimpinan.kutipan}"
              </Typography>
              
              <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid rgba(255,255,255,0.1)", display: 'flex', alignItems: 'center', gap: 2, position: 'relative', zIndex: 1 }}>
                <Avatar src={foto} sx={{ width: 40, height: 40, border: "2px solid #D4AF37" }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#D4AF37", fontWeight: "bold" }}>{pimpinan.nama}</Typography>
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.6)" }}>{pimpinan.jabatan}</Typography>
                </Box>
              </Box>
            </MotionBox>

          </Box>
        </MotionPaper>
      </Container>
    </Box>
  );
};

export default Pimpinan;