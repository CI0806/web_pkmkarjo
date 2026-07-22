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

const PenyakitTerbanyak = () => {
  // Data dari gambar
  const data = [
    { nama: "J00", penyakit: "Common Cold", jumlah: 5114 },
    { nama: "K30", penyakit: "Dyspepsia", jumlah: 3132 },
    { nama: "J06.9", penyakit: "URI, Unspecified", jumlah: 2927 },
    { nama: "I10", penyakit: "Hypertension", jumlah: 2677 },
    { nama: "J02", penyakit: "Acute Pharyngitis", jumlah: 2505 },
    { nama: "J02.9", penyakit: "Pharyngitis, Unspec.", jumlah: 2336 },
    { nama: "K02.1", penyakit: "Caries of Dentine", jumlah: 1231 },
    { nama: "K04.0", penyakit: "Pulpitis", jumlah: 954 },
    { nama: "M79.1", penyakit: "Myalgia", jumlah: 946 },
    { nama: "K04.1", penyakit: "Necrosis of Pulp", jumlah: 946 },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="10 Besar Penyakit Tahun 2025"
        description="Data sepuluh penyakit terbanyak yang ditangani di Puskesmas Karang Rejo selama periode tahun 2025."
      />
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        
        {/* Grafik Penyakit */}
        <Paper elevation={3} sx={{ p: 4, mb: 6, borderRadius: "20px" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <ResponsiveContainer>
              <BarChart layout="vertical" data={data} margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="penyakit" type="category" width={150} />
                <Tooltip />
                <Bar dataKey="jumlah" fill="#b91c1c">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#b91c1c" : "#ef4444"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Paper>

        {/* Tabel Penyakit */}
        <TableContainer
          component={Paper}
          elevation={3}
          sx={{ borderRadius: "20px" }}>
          <Table>
            <TableHead sx={{ bgcolor: "#fef2f2" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>No</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Kode</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Nama Penyakit</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Jumlah
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  Persentase
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.nama}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.nama}</TableCell>
                  <TableCell>{row.penyakit}</TableCell>
                  <TableCell align="right">
                    {row.jumlah.toLocaleString()}
                  </TableCell>
                  <TableCell align="right">
                    {((row.jumlah / 22768) * 100).toFixed(2)}%
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default PenyakitTerbanyak;
