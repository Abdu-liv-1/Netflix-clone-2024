const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key${API_KEY}&language-en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key${API_KEY}&width_networks=213`,
  fetchTopRatedMovies: `/movie/top/_rated?api_key${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key${API_KEY}&width_genres=28`,
  fetchHororMovies: `/discover/movie?api_key${API_KEY}&width_genres=35`,
  fetchActionMovies: `/discover/movie?api_key${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&width_genres=10749`,
  fetchDocumentariesMovies: `/discover/movie?api_key${API_KEY}&width_genres=99`,
  fetchTvShow: `tv/popular?api_key${API_KEY}&language=en-us&page=1`,
};

export default requests;
