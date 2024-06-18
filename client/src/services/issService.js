import axios from "axios";

const endpoint = import.meta.env.VITE_API_URL;

const currentLocation = () => {
  const config = {
    method: "GET",
    url: endpoint + "/iss",
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { currentLocation };
