import axios from "axios";

const apiRoot = "https://dummyapi.io/data/api";
const key = "60e382aeb12eb5888403d84d";

const ApiResource = {
  fetch: async (method, url, body = null) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "app-id": key,
      },
    };

    try {
      var response;
      switch (method) {
        case "GET":
          response = await axios.get(`${apiRoot}/${url}`, config);
          return response.data;
        case "POST":
          response = await axios.post(`${apiRoot}/${url}`, body, config);
          return response.data;
        case "PUT":
          response = await axios.put(`${apiRoot}/${url}`, body, config);
          return response.data;
        case "DELETE":
          response = await axios.delete(`${apiRoot}/${url}`, config);
          return response.data;
        default:
          response = await axios.get(`${apiRoot}/${url}`, config);
      }
    } catch (error) {
      throw error;
    }
  },
};

export default ApiResource;
