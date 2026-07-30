import network from '../../utils/network';

const getStandarPelayanan = async () => {
  return await network.get('/standar_pelayanan.php');
};

export default {
  getStandarPelayanan,
};
