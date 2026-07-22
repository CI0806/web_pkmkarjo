import React from "react";
import { Container, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Divider } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import PageHeader from "@/components/ui/PageHeader";

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
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader title="Jadwal Pelayanan" description="Jadwal operasional loket dan layanan imunisasi anak." />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {/* Jadwal Loket */}
        <Paper elevation={3} sx={{ borderRadius: "16px", overflow: "hidden", mb: 6 }}>
          <Box sx={{ bgcolor: "#193b68", p: 2, display: "flex", alignItems: "center", color: "#fff" }}>
            <LocalHospitalIcon sx={{ mr: 1 }} />
            <Typography variant="h6" fontWeight="bold">Jadwal Pelayanan Loket (WITA)</Typography>
          </Box>
          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "#f1f5f9" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Hari</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>Pagi</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>Sore</TableCell>
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>Malam</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jadwalLoket.map((row, i) => (
                  <TableRow key={i} hover>
                    <TableCell fontWeight="bold">{row.hari}</TableCell>
                    <TableCell align="center">{row.pagi}</TableCell>
                    <TableCell align="center">{row.sore}</TableCell>
                    <TableCell align="center">{row.malam}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Jadwal Imunisasi */}
        <Paper elevation={3} sx={{ borderRadius: "16px", overflow: "hidden" }}>
          <Box sx={{ bgcolor: "#059669", p: 2, display: "flex", alignItems: "center", color: "#fff" }}>
            <ChildCareIcon sx={{ mr: 1 }} />
            <Typography variant="h6" fontWeight="bold">Jadwal Imunisasi Anak</Typography>
          </Box>
          <TableContainer>
            <Table>
              <TableHead sx={{ bgcolor: "#f1f5f9" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", width: "20%" }}>Hari</TableCell>
                  <TableCell sx={{ fontWeight: "bold", width: "50%" }}>Jenis Vaksin</TableCell>
                  <TableCell sx={{ fontWeight: "bold", width: "30%" }}>Jam Pelayanan</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {jadwalImunisasi.map((row, i) => (
                  <TableRow key={i} hover>
                    <TableCell sx={{ fontWeight: "bold" }}>{row.hari}</TableCell>
                    <TableCell>{row.jenis}</TableCell>
                    <TableCell>{row.jam}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Box>
  );
};

export default JadwalPelayanan;