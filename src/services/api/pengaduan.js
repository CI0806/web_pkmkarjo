import network from "@/utils/network";

const pengaduan = {
  // Mengirim aduan baru
  async create(data) {
    return network.post(`/pengaduan.php`, data);
  },

  // Mengambil daftar pengaduan (jika diperlukan untuk tracking)
  async getall() {
    return network.get(`/pengaduan.php`);
  },
};

export default pengaduan;
