import network from "@/utils/network";

const gallery = {
  async getall() {
    return network.get("/gallery.php");
  },
};

export default gallery;