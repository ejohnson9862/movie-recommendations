const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
// console.log("API Key:", API_KEY);

export const fetchMovieByName = async (movieName) => {
  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`);
  const data = await response.json();
  return data;
};