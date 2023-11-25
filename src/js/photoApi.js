// photoApi.js

import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const API_KEY = '40850281-d34ea881c994bc1ff48fafec7';

export const searchImages = async (query, page) => {
  try {
    const response = await axios.get(ENDPOINT, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: page,
        per_page: 40,
      },
    });

    console.log(response.data);
    console.log(response.data.totalHits); // Afișează totalHits în consolă
    return response.data.hits;
  } catch (error) {
    throw error;
  }
};

// Exemplu de utilizare a funcției searchImages cu valori specifice pentru query și page
const query = 'flowers'; // Setează o valoare pentru query
const page = 1; // Setează o valoare pentru page

searchImages(query, page);
