import axios from "axios";

const endpoint = "https://api.wheretheiss.at/v1/satellites/25544/";

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
