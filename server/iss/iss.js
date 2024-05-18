import axios from "axios"
const endpoint = "https://api.wheretheiss.at/v1/satellites/25544/";

const  issCurrentLocation = async () => {
  const request = {
    method: "GET",
    url: endpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  const response = await axios(request);
  console.log(response.data)
  return response.data
};

export { issCurrentLocation };