import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  Divider,
  ListItemText,
  Popper,
  Paper,
  Grow,
  Modal,
  InputBase,
  Chip,
} from "@mui/material";
import { ChevronDown, Search, Menu as MenuIcon, X, ArrowRight, ExternalLink } from "lucide-react";
import logoUrl from "@/assets/img/logoaja.png";
import { useNavigate, useLocation } from "react-router-dom";
import services from "@/services";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const timeoutRef = React.useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const gold = "#D4AF37";
  const navy = "#193b68";

  const isMenuActive = (menu) => {
    if (menu === "Beranda") return location.pathname === "/";
    if (menuData[menu]) {
      return menuData[menu].some((item) => location.pathname === item.path);
    }
    return false;
  };

  const handleSearchOpen = () => setSearchOpen(true);
  const handleSearchClose = () => { setSearchOpen(false); setSearchQuery(""); setDbResults([]); };

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMouseEnter = (e, menu) => {
    clearTimeout(timeoutRef.current);
    setAnchorEl(e.currentTarget);
    setActiveMenu(menu);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
      setAnchorEl(null);
    }, 200);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData = {
    Profil: [
      { label: "Visi & Misi", path: "/visi-misi" },
      { label: "Tugas Pokok & Fungsi", path: "/tugas-pokok" },
      { label: "Struktur Organisasi", path: "/struktur" },
      { label: "Pimpinan", path: "/pimpinan" },
      { label: "Wilayah Kerja", path: "/wilayah" },
      { label: "Maklumat Pelayanan", path: "/maklumat-pelayanan" },
      { label: "Hak & Kewajiban Pasien", path: "/hak-kewajiban" },
    ],
    Layanan: [
      { label: "Jadwal Pelayanan", path: "/jadwal" },
      { label: "Antrian Online", path: "/antrian-online" },
      { label: "Klaster 1 (Manajemen)", path: "/klaster1" },
      { label: "Klaster 2 (Ibu dan Anak)", path: "/klaster2" },
      { label: "Klaster 3 (Dewasa dan Lansia)", path: "/klaster3" },
      { label: "Klaster 4 (Penanggulangan Penyakit Menular)", path: "/klaster4" },
      { label: "Klaster 5 (Lintas Klaster)", path: "/klaster5" },
    ],
    Informasi: [
      { label: "Artikel", path: "/informasi/artikel" },
      { label: "Berita", path: "/informasi/berita" },
      { label: "Pengumuman", path: "/informasi/pengumuman" },
    ],
    Statistik: [
      { label: "Kunjungan Pasien 2025", path: "/kunjungan" },
      { label: "Penyakit Terbanyak 2025", path: "/penyakit" },
    ],
    Lainnya: [
      { label: "Contact Person", path: "/contact-person" },
      { label: "Gallery", path: "/gallery" },
      { label: "Video", path: "/video" },
      { label: "Layanan Pengaduan", path: "/pengaduan" },
      { label: "Hasil Survei Kepuasan Masyarakat", path: "/hasil-survei" },
    ],
  };

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dbResults, setDbResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const allMenuItems = Object.values(menuData).flat();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim().length > 2) {
        setLoading(true);
        try {
          const res = await services.informasi.search(searchQuery);
          setDbResults(res.status === "success" ? res.data : []);
        } catch {
          setDbResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setDbResults([]);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <>
      <AppBar
        color="transparent"
        elevation={0}
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          top: isScrolled ? 0 : { xs: 0, md: "38px" },
          width: "100% !important",
          maxWidth: "none !important",
          borderRadius: "0 !important",
          transition: "all 0.4s ease",
          background: isScrolled
            ? "rgba(25, 59, 104, 0.97)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          border: "none",
          borderBottom: isScrolled ? "1px solid rgba(212,175,55,0.25)" : "none",
          boxShadow: isScrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
          color: "#ffffff",
        }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ height: isScrolled ? 60 : 68, transition: "height 0.3s ease", px: { xs: 1, md: 2 } }}>

            {/* Mobile menu toggle */}
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { md: "none" }, "&:hover": { bgcolor: "rgba(212,175,55,0.15)" } }}>
              <MenuIcon size={22} />
            </IconButton>

            {/* Logo */}
            <Box
              onClick={() => navigate("/")}
              sx={{ display: "flex", alignItems: "center", gap: 1.5, cursor: "pointer", flexShrink: 0 }}>
              <img src={logoUrl} alt="Logo" style={{ height: 40, width: "auto", flexShrink: 0 }} />
              <Box sx={{ display: { xs: "none", sm: "flex" }, flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    lineHeight: 1.15,
                    letterSpacing: "0.04em",
                    color: "white",
                  }}>
                  PUSKESMAS KARANG REJO
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.7rem",
                    color: gold,
                    lineHeight: 1.2,
                    letterSpacing: "0.12em",
                  }}>
                  KOTA TARAKAN
                </Typography>
              </Box>
            </Box>

            {/* Spacer kiri */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }} />

            {/* Desktop Menu — tengah */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5, flexShrink: 0 }}>
              {["Beranda", ...Object.keys(menuData)].map((menu) => {
                const active = isMenuActive(menu);
                return (
                  <Button
                    key={menu}
                    onClick={() => menu === "Beranda" && navigate("/")}
                    onMouseEnter={(e) => menu !== "Beranda" && handleMouseEnter(e, menu)}
                    onMouseLeave={handleMouseLeave}
                    endIcon={menu !== "Beranda" ? (
                      <ChevronDown
                        size={14}
                        style={{
                          transition: "transform 0.2s",
                          transform: activeMenu === menu && open ? "rotate(180deg)" : "rotate(0deg)",
                          marginLeft: -2,
                        }}
                      />
                    ) : null}
                    sx={{
                      color: active ? navy : "rgba(255,255,255,0.88)",
                      fontWeight: active ? 700 : 500,
                      fontSize: "0.82rem",
                      letterSpacing: "0.02em",
                      textTransform: "none",
                      borderRadius: "30px",
                      px: 1.8,
                      py: 0.8,
                      minWidth: "auto",
                      transition: "all 0.25s ease",
                      bgcolor: active ? gold : "transparent",
                      border: `1px solid ${active ? gold : "transparent"}`,
                      boxShadow: active ? "0 4px 12px rgba(212,175,55,0.35)" : "none",
                      "&:hover": {
                        bgcolor: active ? "#c5a028" : "rgba(255,255,255,0.1)",
                        color: active ? navy : "white",
                        border: `1px solid ${active ? "#c5a028" : "rgba(255,255,255,0.15)"}`,
                        transform: "translateY(-1px)",
                      },
                    }}>
                    {menu}
                  </Button>
                );
              })}
            </Box>

            {/* Spacer kanan */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }} />

            {/* Mobile spacer */}
            <Box sx={{ flexGrow: 1, display: { xs: "block", md: "none" } }} />

            {/* Search Button */}
            <Button
              onClick={handleSearchOpen}
              startIcon={<Search size={15} />}
              sx={{
                display: { xs: "none", md: "flex" },
                color: gold,
                bgcolor: "rgba(212,175,55,0.1)",
                border: `1px solid rgba(212,175,55,0.35)`,
                borderRadius: "30px",
                px: 2,
                py: 0.8,
                fontSize: "0.8rem",
                fontWeight: 600,
                textTransform: "none",
                ml: 1.5,
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: gold,
                  color: navy,
                  border: `1px solid ${gold}`,
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(212,175,55,0.4)",
                },
              }}>
              Cari
            </Button>
            <IconButton
              onClick={handleSearchOpen}
              sx={{
                display: { xs: "flex", md: "none" },
                color: gold,
                "&:hover": { bgcolor: "rgba(212,175,55,0.15)" },
              }}>
              <Search size={20} />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Dropdown Popper */}
        <Popper open={open} anchorEl={anchorEl} transition placement="bottom-start" sx={{ zIndex: 1300 }}>
          {({ TransitionProps }) => (
            <Grow {...TransitionProps} timeout={180}>
              <Paper
                onMouseEnter={() => clearTimeout(timeoutRef.current)}
                onMouseLeave={handleMouseLeave}
                sx={{
                  mt: 1.5,
                  borderRadius: 3,
                  overflow: "hidden",
                  minWidth: 230,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,175,55,0.15)",
                  border: "none",
                }}>
                {/* Dropdown Header */}
                <Box sx={{ bgcolor: navy, px: 2.5, py: 1.5, borderBottom: `2px solid ${gold}` }}>
                  <Typography sx={{ color: gold, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em" }}>
                    {activeMenu?.toUpperCase()}
                  </Typography>
                </Box>
                {/* Dropdown Items */}
                <Box sx={{ py: 0.5 }}>
                  {activeMenu &&
                    menuData[activeMenu].map((item) => (
                      <Box
                        key={item.label}
                        onClick={() => {
                          item.isExternal ? window.open(item.path, "_blank") : navigate(item.path);
                          handleClose();
                        }}
                        sx={{
                          px: 2.5,
                          py: 1.1,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 1,
                          transition: "all 0.18s ease",
                          borderLeft: "3px solid transparent",
                          "&:hover": {
                            bgcolor: "rgba(25,59,104,0.06)",
                            borderLeftColor: gold,
                            pl: 3,
                          },
                        }}>
                        <Typography
                          sx={{
                            fontSize: "0.85rem",
                            fontWeight: 500,
                            color: "#1e293b",
                            lineHeight: 1.4,
                          }}>
                          {item.label}
                        </Typography>
                        {item.isExternal
                          ? <ExternalLink size={13} color="#94a3b8" />
                          : <ArrowRight size={13} color="#94a3b8" />}
                      </Box>
                    ))}
                </Box>
              </Paper>
            </Grow>
          )}
        </Popper>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            bgcolor: "#0f2744",
            color: "white",
            border: "none",
          },
        }}>
        {/* Drawer Header */}
        <Box
          sx={{
            background: `linear-gradient(135deg, ${navy} 0%, #254b7d 100%)`,
            p: 2.5,
            borderBottom: `2px solid ${gold}`,
          }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <img src={logoUrl} alt="Logo" style={{ height: 36, width: "auto" }} />
              <Box>
                <Typography sx={{ fontWeight: 800, fontSize: "0.78rem", lineHeight: 1.2 }}>
                  PUSKESMAS
                </Typography>
                <Typography sx={{ fontWeight: 800, fontSize: "0.78rem", lineHeight: 1.2 }}>
                  KARANG REJO
                </Typography>
                <Typography sx={{ color: gold, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.08em" }}>
                  KOTA TARAKAN
                </Typography>
              </Box>
            </Box>
            <IconButton onClick={handleDrawerToggle} sx={{ color: "rgba(255,255,255,0.7)", p: 0.5 }}>
              <X size={20} />
            </IconButton>
          </Box>
        </Box>

        {/* Drawer Menu */}
        <Box sx={{ overflowY: "auto", flexGrow: 1, py: 1 }}>
          <ListItemButton
            onClick={() => { navigate("/"); handleDrawerToggle(); }}
            sx={{
              px: 3,
              py: 1.5,
              "&:hover": { bgcolor: "rgba(212,175,55,0.1)" },
              borderLeft: location.pathname === "/" ? `3px solid ${gold}` : "3px solid transparent",
            }}>
            <ListItemText
              primary="Beranda"
              sx={{
                "& .MuiTypography-root": {
                  fontWeight: location.pathname === "/" ? 700 : 500,
                  color: location.pathname === "/" ? gold : "rgba(255,255,255,0.9)",
                  fontSize: "0.95rem",
                },
              }}
            />
          </ListItemButton>

          {Object.keys(menuData).map((menu) => {
            const isActive = isMenuActive(menu);
            const isExpanded = expandedMobile === menu;
            return (
              <Box key={menu}>
                <ListItemButton
                  onClick={() => setExpandedMobile(isExpanded ? null : menu)}
                  sx={{
                    px: 3,
                    py: 1.2,
                    borderLeft: isActive ? `3px solid ${gold}` : "3px solid transparent",
                    "&:hover": { bgcolor: "rgba(212,175,55,0.08)" },
                  }}>
                  <ListItemText
                    primary={menu}
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? gold : "rgba(255,255,255,0.88)",
                        fontSize: "0.95rem",
                      },
                    }}
                  />
                  <ChevronDown
                    size={16}
                    color={isActive ? gold : "rgba(255,255,255,0.5)"}
                    style={{
                      transition: "transform 0.2s",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                    }}
                  />
                </ListItemButton>
                {isExpanded && (
                  <Box sx={{ bgcolor: "rgba(0,0,0,0.2)", borderLeft: `3px solid rgba(212,175,55,0.3)`, ml: 3 }}>
                    {menuData[menu].map((item) => (
                      <ListItemButton
                        key={item.label}
                        onClick={() => {
                          item.isExternal ? window.open(item.path, "_blank") : navigate(item.path);
                          handleDrawerToggle();
                        }}
                        sx={{ px: 3, py: 1, "&:hover": { bgcolor: "rgba(212,175,55,0.1)" } }}>
                        <ListItemText
                          primary={item.label}
                          sx={{
                            "& .MuiTypography-root": {
                              fontSize: "0.82rem",
                              color: location.pathname === item.path ? gold : "rgba(255,255,255,0.7)",
                              fontWeight: location.pathname === item.path ? 600 : 400,
                            },
                          }}
                        />
                        {item.isExternal && <ExternalLink size={12} color="rgba(255,255,255,0.4)" />}
                      </ListItemButton>
                    ))}
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>

        {/* Drawer Footer */}
        <Box sx={{ p: 2, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Button
            fullWidth
            startIcon={<Search size={15} />}
            onClick={() => { handleDrawerToggle(); handleSearchOpen(); }}
            sx={{
              bgcolor: "rgba(212,175,55,0.15)",
              color: gold,
              border: `1px solid rgba(212,175,55,0.3)`,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "rgba(212,175,55,0.25)" },
            }}>
            Cari Informasi
          </Button>
        </Box>
      </Drawer>

      {/* Search Modal */}
      <Modal open={searchOpen} onClose={handleSearchClose}>
        <Grow in={searchOpen}>
          <Box sx={{ width: "90%", maxWidth: 600, mx: "auto", mt: 12, outline: "none" }}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                borderRadius: "20px",
                background: `linear-gradient(135deg, ${navy} 0%, #254b7d 100%)`,
                border: `1.5px solid ${gold}`,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}>
              <Search color={gold} size={20} />
              <InputBase
                autoFocus
                fullWidth
                sx={{ ml: 2, color: "white", fontSize: "1rem", "& ::placeholder": { color: "rgba(255,255,255,0.4)" } }}
                placeholder="Cari berita, layanan, atau halaman..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Escape" && handleSearchClose()}
              />
              {loading && (
                <Typography sx={{ color: gold, fontSize: "0.72rem", mr: 1, flexShrink: 0 }}>
                  Mencari...
                </Typography>
              )}
              <IconButton onClick={handleSearchClose} sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: "white" } }}>
                <X size={18} />
              </IconButton>
            </Paper>

            {searchQuery.length > 2 && (
              <Paper sx={{ mt: 1, borderRadius: "16px", overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.2)" }}>
                {dbResults.length > 0 ? (
                  dbResults.map((item) => (
                    <ListItemButton
                      key={item.id}
                      onClick={() => { navigate(`/read/${item.slug || item.id}`); handleSearchClose(); }}
                      sx={{ px: 3, py: 1.5, borderBottom: "1px solid #f1f5f9", "&:last-child": { borderBottom: "none" } }}>
                      <ListItemText
                        primary={item.judul || item.title}
                        secondary="Berita & Artikel"
                        sx={{
                          "& .MuiTypography-primary": { fontWeight: 600, color: navy, fontSize: "0.9rem" },
                          "& .MuiTypography-secondary": { fontSize: "0.75rem" },
                        }}
                      />
                      <ArrowRight size={16} color="#94a3b8" />
                    </ListItemButton>
                  ))
                ) : !loading ? (
                  <Box sx={{ p: 3, textAlign: "center" }}>
                    <Typography sx={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                      Tidak ditemukan hasil untuk "{searchQuery}"
                    </Typography>
                  </Box>
                ) : null}
              </Paper>
            )}
          </Box>
        </Grow>
      </Modal>
    </>
  );
};

export default Navbar;
