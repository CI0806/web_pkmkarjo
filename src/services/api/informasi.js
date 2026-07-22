import network from "@/utils/network";

const informasi = {
  // Mengambil semua berita atau filter berdasarkan kategori
  async getall(kategori = "") {
    return network.get(`/informasi.php?kategori=${kategori}`);
  },

  // Mengambil satu berita berdasarkan ID atau Slug
  async getone(idOrSlug) {
    // Mengecek apakah param adalah angka (ID) atau string (Slug)
    const isNumber = !isNaN(idOrSlug);
    const param = isNumber ? `id=${idOrSlug}` : `slug=${idOrSlug}`;

    return network.get(`/informasi.php?${param}`);
  },

  async search(query) {
    return network.get(`/informasi.php?search=${query}`);
  },
};

export default informasi;
