import axios from "axios"
const endpoint = "http://tle.ivanstanojevic.me/api/tle";

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