import axios from 'axios';


const network = axios.create({
  //baseURL: 'http://localhost/website/api',
  baseURL: 'https://admin.pkmkarjotarakan.com/api',
});

// network.interceptors.request.use(
//   (config) => {
//     const token = session.getToken();

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

network.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      session.clearSession();
      //window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default network;
