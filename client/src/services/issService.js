import axios from "axios";

const endpoint = "http://localhost:8000/iss";

const currentLocation = () => {
  const config = {
    method: "GET",
    url: endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

export { currentLocation };
