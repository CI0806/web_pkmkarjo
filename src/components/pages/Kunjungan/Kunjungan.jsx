import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import PageHeader from "@/components/ui/PageHeader";

const Kunjungan = () => {
  const theme = useTheme();

  const data = [
    { name: "Balita", total: 33592 },
    { name: "Kanak", total: 14740 },
    { name: "Remaja Awal", total: 7681 },
    { name: "Remaja Akhir", total: 17835 },
    { name: "Dewasa Awal", total: 16239 },
    { name: "Dewasa Akhir", total: 13072 },
    { name: "Lansia Awal", total: 13278 },
    { name: "Lansia Akhir", total: 10781 },
    { name: "Manula", total: 7040 },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Statistik Kunjungan Tahun 2025"
        description="Data kunjungan pasien Puskesmas Karang Rejo berdasarkan kelompok umur."
      />

      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {/* Grafik Batang */}
        <Paper elevation={3} sx={{ p: 4, mb: 6, borderRadius: "20px" }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 4 }}>
            Visualisasi Jumlah Kunjungan
          </Typography>
          <Box sx={{ height: 400, width: "100%" }}>
            <ResponsiveContainer>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#1e3a8a">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#db2777" : "#1e3a8a"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>

        {/* Tabel Data */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: "20px" }}>
          <Table>
            <TableHead sx={{ bgcolor: "#f1f5f9" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Kelompok Umur</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  LK
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Perempuan
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Total
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Persentase (%)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Data dari gambar */}
              {[
                {
                  umur: "Balita (0-5 Thn)",
                  lk: 18528,
                  pr: 15064,
                  tot: 33592,
                  pct: 25.02,
                },
                {
                  umur: "Kanak-kanak (6-11 Thn)",
                  lk: 7523,
                  pr: 7217,
                  tot: 14740,
                  pct: 10.98,
                },
                {
                  umur: "Remaja Awal (12-16 Thn)",
                  lk: 3695,
                  pr: 3986,
                  tot: 7681,
                  pct: 5.72,
                },
                {
                  umur: "Remaja Akhir (17-25 Thn)",
                  lk: 6099,
                  pr: 11736,
                  tot: 17835,
                  pct: 13.28,
                },
                {
                  umur: "Dewasa Awal (26-35 Thn)",
                  lk: 4743,
                  pr: 11496,
                  tot: 16239,
                  pct: 12.1,
                },
                {
                  umur: "Dewasa Akhir (36-45 Thn)",
                  lk: 3914,
                  pr: 9158,
                  tot: 13072,
                  pct: 9.74,
                },
                {
                  umur: "Lansia Awal (46-55 Thn)",
                  lk: 4713,
                  pr: 8565,
                  tot: 13278,
                  pct: 9.89,
                },
                {
                  umur: "Lansia Akhir (56-65 Thn)",
                  lk: 4575,
                  pr: 6206,
                  tot: 10781,
                  pct: 8.03,
                },
                {
                  umur: "Manula (> 65 Thn)",
                  lk: 3556,
                  pr: 3484,
                  tot: 7040,
                  pct: 5.24,
                },
              ].map((row) => (
                <TableRow key={row.umur}>
                  <TableCell>{row.umur}</TableCell>
                  <TableCell align="right">{row.lk.toLocaleString()}</TableCell>
                  <TableCell align="right">{row.pr.toLocaleString()}</TableCell>
                  <TableCell align="right" sx={{ fontWeight: "bold" }}>
                    {row.tot.toLocaleString()}
                  </TableCell>
                  <TableCell align="right">{row.pct}%</TableCell>
                </TableRow>
              ))}
              <TableRow sx={{ bgcolor: "#f8fafc" }}>
                <TableCell colSpan={3} sx={{ fontWeight: "bold" }}>
                  TOTAL
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  134.258
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Kunjungan;
