import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/layouts";
import Dashboard from "./components/pages/Beranda";
import SnackbarProvider from "./components/ui/Snackbar";
import VisiMisi from "./components/pages/VisiMisi";
import TugasPokok from "./components/pages/TugasPokok";
import StrukturOrganisasi from "./components/pages/StrukturOrganisasi";
import Berita from "./components/pages/Berita";
import DetailBerita from "./components/pages/Berita/DetailBerita/DetailBerita";
import Pimpinan from "./components/pages/Pimpinan";
import WilayahKerja from "./components/pages/WilayahKerja";
import Maklumat from "./components/pages/Maklumat";
import HakKewajiban from "./components/pages/HakKewajiban";
import JadwalPelayanan from "./components/pages/JadwalPelayanan";
import AntrianOnline from "./components/pages/AntrianOnline";
import Klaster1 from "./components/pages/Klaster1";
import Klaster2 from "./components/pages/Klaster2";
import Klaster3 from "./components/pages/Klaster3";
import Klaster4 from "./components/pages/Klaster4";
import Klaster5 from "./components/pages/Klaster5";
import Kunjungan from "./components/pages/Kunjungan";
import PenyakitTerbanyak from "./components/pages/PenyakitTerbanyak";
import ContactPerson from "./components/pages/ContactPerson";
import Gallery from "./components/pages/Gallery";
import Video from "./components/pages/Video";
import HasilSurvei from "./components/pages/HasilSurvei/HasilSurvei";
import Pengaduan from "./components/pages/Pengaduan";

const theme = createTheme({
 typography: {
  // Menggunakan Inter (alternatif terbaik Google Sans)
  fontFamily: ["Inter", "sans-serif"].join(","),
  
  h1: {
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
},
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none", // Kadang MUI menambahkan gradient putih di atas AppBar
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/visi-misi",
        element: <VisiMisi />,
      },
      {
        path: "/tugas-pokok",
        element: <TugasPokok />,
      },
      {
        path: "/struktur",
        element: <StrukturOrganisasi />,
      },
      {
        path: "/pimpinan",
        element: <Pimpinan />,
      },
      {
        path: "/wilayah",
        element: <WilayahKerja />,
      },
      {
        path: "/maklumat-pelayanan",
        element: <Maklumat />,
      },
      {
        path: "/hak-kewajiban",
        element: <HakKewajiban />,
      },
      {
        path: "/jadwal",
        element: <JadwalPelayanan />,
      },
      {
        path: "/antrian-online",
        element: <AntrianOnline />,
      },
      {
        path: "/klaster1",
        element: <Klaster1 />,
      },
      {
        path: "/klaster2",
        element: <Klaster2 />,
      },
      {
        path: "/klaster3",
        element: <Klaster3 />,
      },
      {
        path: "/klaster4",
        element: <Klaster4 />,
      },
      {
        path: "/klaster5",
        element: <Klaster5 />,
      },
      {
        path: "/informasi/:slugKategori",
        element: <Berita />,
      },
      {
        path: "/read/:id",
        element: <DetailBerita />,
      },
      {
        path: "/kunjungan",
        element: <Kunjungan />,
      },
      {
        path: "/penyakit",
        element: <PenyakitTerbanyak />,
      },
      {
        path: "/contact-person",
        element: <ContactPerson />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/video",
        element: <Video />,
      },
      {
        path: "/hasil-survei",
        element: <HasilSurvei />,
      },
      {
        path: "/pengaduan",
        element: <Pengaduan />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <SnackbarProvider>
          <CssBaseline />
          <RouterProvider router={router} />
        </SnackbarProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
