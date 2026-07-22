import network from "@/utils/network";

const hasilSurvei = {
  async getall() {
    return network.get("/hasil_survei.php");
  },
};

export default hasilSurvei;
