import axios from 'axios';

const API_KEY = '33136592-d2631d5cd8d681bee8d404da5';

const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = `${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const getImages = async () => {
  const response = await axios.get();
  return response.data;
};
