import network from "@/utils/network";

const video = {
  async getall() {
    return network.get("/video.php");
  },
};

export default video;