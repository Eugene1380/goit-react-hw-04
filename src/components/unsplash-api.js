import axios from "axios";

const ACCESS_KEY = "OCXpc-aD4tVdzFQ3rEUssXuHfC4jQ5xmid8L9XJMtzM";
axios.defaults.baseURL = "https://api.unsplash.com/";
// https://unsplash.com/developers
// axios.defaults.headers.common['Authorization'] = ACCESS_KEY;

export default async function getImages(searchImage, page) {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: searchImage,
      page,
      per_page: 12,
    },
  });
  // console.log('response >> ', response);
  return response.data;
}
