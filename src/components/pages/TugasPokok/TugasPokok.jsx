import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  useTheme,
} from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PageHeader from "@/components/ui/PageHeader";

const TugasPokok = () => {
  const theme = useTheme();

  // Data Klaster Puskesmas Karang Rejo
  const dataKlaster = [
    {
      title: "Kepala Puskesmas",
      color: "#134e4a",
      tugas:
        "Memimpin dan mengoordinasikan penyelenggaraan pelayanan kesehatan masyarakat dan pelayanan kesehatan perorangan tingkat pertama di wilayah kerja Puskesmas.",
      details: [
        "Penyusunan rencana, program, dan anggaran",
        "Pengelolaan klaster",
        "Koordinasi jejaring Pelayanan Kesehatan primer di wilayah kerja Puskesmas",
        "Pengelolaan data dan sistem informasi",
        "Pemantauan, evaluasi, dan pelaporan Puskesmas; dan",
        "Pelaksanaan urusan administrasi Puskesmas",
      ],
    },
    {
      title: "Klaster 1: Manajemen Puskesmas",
      color: "#64748b",
      tugas:
        "Memastikan perencanaan, pelaksanaan, dan evaluasi kegiatan berjalan dengan baik, sumber daya yang dimiliki Puskesmas direncanakan dan dipenuhi sesuai dengan standar untuk mendukung Pelayanan Kesehatan berjalan sesuai dengan standar mutu.",
      details: [
        "Pengelolaan manajemen inti Puskesmas meliputi Penyusunan perencanaan kegiatan Puskesmas (RUK dan RPK), penggerakan dan pelaksanaan melalui rapat koordinasi dan lokakarya mini bulanan ataupun triwulanan, pengendalian, pengawasan, dan penilaian kinerja",
        "Pengelolaan arsip termasuk arsip keuangan",
        "Pengelolaan manajemen sumber daya manusia",
        "Pengelolaan sarana, prasarana, dan perbekalan kesehatan",
        "Pengelolaan manajemen mutu pelayanan",
        "Pengelolaan keuangan dan aset atau barang milik daerah",
        "Pengelolaan sistem informasi kesehatan dan sistem informasi digital",
        "Pengelolaan jejaring",
        "Pengelolaan pemberdayaan masyarakat",
      ],
    },
    {
      title: "Klaster 2: KIA, Remaja & Keluarga",
      color: "#db2777",
      tugas:
        "Menyelenggarakan pelayanan kesehatan bagi ibu, bayi, balita, anak, dan remaja secara terpadu.",
      details: [
        "Pelayanan pemeriksaan kehamilan",
        "Pelayanan persalinan dan nifas",
        "Pelayanan kesehatan bayi dan balita",
        "Pelaksanaan imunisasi dasar lengkap",
        "Pemantauan tumbuh kembang anak",
        "Pelayanan kesehatan reproduksi dan keluarga berencana",
        "Pelayanan kesehatan remaja dan anak usia sekolah",
        "Pelaksanaan kegiatan perbaikan gizi masyarakat",
      ],
    },
    {
      title: "Klaster 3: Dewasa & Lansia",
      color: "#d97706",
      tugas:
        "Menyelenggarakan pelayanan kesehatan bagi kelompok usia dewasa dan lanjut usia.",
      details: [
        "Pelaksanaan skrining faktor risiko penyakit tidak menular",
        "Pelayanan Posbindu PTM",
        "Pelayanan kesehatan lansia melalui Posyandu Lansia",
        "Pengelolaan penyakit kronis seperti hipertensi dan diabetes mellitus",
        "Edukasi kesehatan dan pembinaan perilaku hidup sehat",
      ],
    },
    {
      title: "Klaster 4: Penyakit Menular",
      color: "#ef4444",
      tugas:
        "Melaksanakan pencegahan, pengendalian, dan penanggulangan penyakit menular dan kesehatan lingkungan.",
      details: [
        "Pelaksanaan surveilans epidemiologi penyakit menular",
        "Penemuan kasus penyakit menular",
        "Pengobatan dan pemantauan pasien",
        "Investigasi epidemiologi",
        "Penanganan kejadian luar biasa (KLB)",
        "Penyuluhan pencegahan penyakit menular",
      ],
    },
    {
      title: "Klaster 5: Lintas Klaster",
      color: "#059669",
      tugas:
        "Menggerakkan dan memberdayakan masyarakat serta meningkatkan kerja sama lintas sektor dalam pembangunan kesehatan.",
      details: [
        "Melakukan pemeriksaan kesehatan gigi dan mulut",
        "Melakukan triase pasien gawat darurat",
        "Melakukan perencanaan kebutuhan obat dan BMHP",
        "Melakukan pemeriksaan spesimen laboratorium",
        "Memberikan perawatan medis dan keperawatan kepada pasien",
        "Menyusun rencana kesiapsiagaan penanggulangan krisis kesehatan",
        "Melakukan asesmen kondisi pasien",
      ],
    },
  ];

  return (
    <Box sx={{ pb: 10, bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <PageHeader
        title="Struktur Tugas & Fungsi"
        description={
          "Pembagian peran dan tanggung jawab operasional dalam pelayanan kesehatan di Puskesmas Karang Rejo."
        }
      />

      <Container sx={{ mt: 6 }}>
        <Box textAlign="center" mb={8}>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 80,
              height: 80,
              mx: "auto",
              mb: 3,
            }}>
            <AccountTreeIcon sx={{ fontSize: 40 }} />
          </Avatar>
        </Box>

        <Grid container spacing={4}>
          {dataKlaster.map((item, index) => (
            <Grid item size={{ xs: 12,}} key={index}>
              <Card
                sx={{
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
                }}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "grey.50",
                    borderBottom: "1px solid #e2e8f0",
                  }}>
                  <Typography variant="h6" fontWeight="bold" color={item.color}>
                    {item.title}
                  </Typography>
                </Box>

                <CardContent>
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      mb: 2,
                      color: "text.secondary",
                    }}>
                    <strong>Tugas:</strong> {item.tugas}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ mb: 1 }}>
                    Fungsi Utama:
                  </Typography>
                  <List dense disablePadding>
                    {item.details.map((detail, i) => (
                      <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <FiberManualRecordIcon
                            sx={{ fontSize: 8, color: item.color }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={detail}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Box sx={{ height: 4, bgcolor: item.color }} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TugasPokok;
