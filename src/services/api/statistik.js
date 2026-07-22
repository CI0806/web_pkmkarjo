import network from "@/utils/network";

const statistik = {
  // Fungsi untuk mencatat kunjungan sekaligus mengambil total hits
  getSummary: async () => {
    try {
      // Memanggil file PHP yang telah kita buat sebelumnya
      const response = await network.get("/statistik.php");
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default statistik;