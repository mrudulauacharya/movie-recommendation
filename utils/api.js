// /utils/api.js

export const fetchMovies = async (query) => {
  const API_KEY = '1322362f0088fd9b142717a02fec6259'; // Your TMDB API key
  const API_URL = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch movie data');
    }

    const data = await response.json();
    return data.results; // Return the movie results from the API response
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return [];
  }
};

export const fetchBooks = async (query) => {
  const API_URL = `https://openlibrary.org/search.json?q=${query}`;

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch book data');
    }

    const data = await response.json();
    return data.docs; // Return the book results from the API response
  } catch (error) {
    console.error('Error fetching book data:', error);
    return [];
  }
};
