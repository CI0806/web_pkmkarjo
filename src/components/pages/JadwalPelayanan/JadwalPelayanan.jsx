import React from "react";
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PageHeader from "@/components/ui/PageHeader";
import { motion } from "framer-motion";

const JadwalPelayanan = () => {
  const jadwalLoket = [
    { hari: "Senin - Kamis", pagi: "07.30 - 12.30", sore: "14.30 - 18.00", malam: "19.00 - 07.30" },
    { hari: "Jum'at", pagi: "07.30 - 10.30", sore: "14.30 - 18.00", malam: "19.00 - 07.30" },
    { hari: "Sabtu", pagi: "07.30 - 11.30", sore: "14.30 - 18.00", malam: "19.00 - 07.30" },
    { hari: "Minggu/Libur", pagi: "07.30 - 11.30", sore: "14.30 - 18.00", malam: "19.00 - 07.30" },
  ];

  const jadwalImunisasi = [
    { hari: "Senin & Rabu", jenis: "HB0, Polio, DPT HB Hib, IPV, Rotavirus, MR, DPT HB Boster, MR Boster, PCV", jam: "08.00 - 11.30" },
    { hari: "Selasa, Kamis & Sabtu", jenis: "HB0, BCG, Polio, DPT HB Hib, IPV, MR, DPT HB Boster, MR Boster, PCV, Rotavirus", jam: "Senin-Kamis: 08.00-11.30 | Sabtu: 08.00-10.30" },
  ];

  return (
    <Box sx={{ pb: 12, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader title="Jadwal Pelayanan" description="Jadwal operasional loket dan layanan imunisasi anak di Puskesmas Karang Rejo." />

      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: -2 }, position: "relative", zIndex: 10 }}>
        
        {/* Jadwal Loket */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper 
            elevation={0} 
            sx={{ 
              borderRadius: "24px", 
              overflow: "hidden", 
              mb: 6,
              boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.04)"
            }}
          >
            <Box 
              sx={{ 
                background: "linear-gradient(135deg, #0d9488 0%, #115e59 100%)", 
                p: { xs: 3, md: 4 }, 
                display: "flex", 
                alignItems: "center", 
                color: "#fff",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box sx={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, bgcolor: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
              <Avatar sx={{ bgcolor: "#10b981", width: 56, height: 56, mr: 3, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}>
                <LocalHospitalIcon sx={{ color: "#0d9488", fontSize: 32 }} />
              </Avatar>
              <Box>
                <Typography variant="overline" sx={{ color: "#10b981", fontWeight: 700, letterSpacing: 1.5 }}>UNIT PELAYANAN</Typography>
                <Typography variant="h5" fontWeight="800">Jadwal Pelayanan Loket (WITA)</Typography>
              </Box>
            </Box>
            
            <TableContainer sx={{ bgcolor: "white" }}>
              <Table>
                <TableHead sx={{ bgcolor: "#f1f5f9" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 800, color: "#1e293b", py: 2.5, fontSize: "1.05rem" }}>Hari</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 800, color: "#1e293b", py: 2.5, fontSize: "1.05rem" }}>Pagi</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 800, color: "#1e293b", py: 2.5, fontSize: "1.05rem" }}>Sore</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 800, color: "#1e293b", py: 2.5, fontSize: "1.05rem" }}>Malam</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jadwalLoket.map((row, i) => (
                    <TableRow 
                      key={i} 
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 }, "&:hover": { bgcolor: "#f8fafc" } }}
                    >
                      <TableCell sx={{ fontWeight: 700, color: "#334155", py: 2.5 }}>{row.hari}</TableCell>
                      <TableCell align="center" sx={{ color: "#475569", fontWeight: 500 }}>{row.pagi}</TableCell>
                      <TableCell align="center" sx={{ color: "#475569", fontWeight: 500 }}>{row.sore}</TableCell>
                      <TableCell align="center" sx={{ color: "#475569", fontWeight: 500 }}>{row.malam}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </motion.div>

        {/* Jadwal Imunisasi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper 
            elevation={0} 
            sx={{ 
              borderRadius: "24px", 
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.04)"
            }}
          >
            <Box 
              sx={{ 
                background: "linear-gradient(135deg, #059669 0%, #047857 100%)", 
                p: { xs: 3, md: 4 }, 
                display: "flex", 
                alignItems: "center", 
                color: "#fff",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box sx={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, bgcolor: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
              <Avatar sx={{ bgcolor: "#a7f3d0", width: 56, height: 56, mr: 3, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}>
                <ChildCareIcon sx={{ color: "#047857", fontSize: 32 }} />
              </Avatar>
              <Box>
                <Typography variant="overline" sx={{ color: "#a7f3d0", fontWeight: 700, letterSpacing: 1.5 }}>LAYANAN ANAK</Typography>
                <Typography variant="h5" fontWeight="800">Jadwal Imunisasi Anak</Typography>
              </Box>
            </Box>
            
            <TableContainer sx={{ bgcolor: "white" }}>
              <Table>
                <TableHead sx={{ bgcolor: "#f1f5f9" }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 800, color: "#1e293b", py: 2.5, width: "25%", fontSize: "1.05rem" }}>Hari</TableCell>
                    <TableCell sx={{ fontWeight: 800, color: "#1e293b", py: 2.5, width: "50%", fontSize: "1.05rem" }}>Jenis Vaksin</TableCell>
                    <TableCell sx={{ fontWeight: 800, color: "#1e293b", py: 2.5, width: "25%", fontSize: "1.05rem" }}>Jam Pelayanan</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jadwalImunisasi.map((row, i) => (
                    <TableRow 
                      key={i} 
                      hover
                      sx={{ "&:last-child td, &:last-child th": { border: 0 }, "&:hover": { bgcolor: "#f8fafc" } }}
                    >
                      <TableCell sx={{ fontWeight: 700, color: "#334155", py: 3 }}>
                        <Box sx={{ display: "inline-block", p: 1, bgcolor: "#ecfdf5", color: "#059669", borderRadius: 2 }}>
                          {row.hari}
                        </Box>
                      </TableCell>
                      <TableCell sx={{ color: "#475569", lineHeight: 1.8 }}>{row.jenis}</TableCell>
                      <TableCell sx={{ color: "#475569", fontWeight: 600 }}>{row.jam}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default JadwalPelayanan;