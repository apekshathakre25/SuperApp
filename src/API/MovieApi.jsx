import axios from "axios";

const movieDetails = async (title) => {
  try {
    const apiKey = import.meta.env.VITE_REACT_MOVIE_APP_API_KEY;
    const requestedUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    const getUrl = await axios.get(requestedUrl);
    return getUrl.data;
    console.log(getUrl.data);
  } catch (error) {
    console.error(error);
  }
};
export default movieDetails;
