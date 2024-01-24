import axios from "axios";
const DEFAULT_LOCATION = "Nagpur";

const weatherDetails = async () => {
  try {
    const apiKey = import.meta.env.VITE_REACT_WEATHER_APP_API_KEY;
    const requestedUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${DEFAULT_LOCATION}`;
    const getUrl = await axios.get(requestedUrl);
    return getUrl.data;
  } catch (error) {
    console.log(error);
  }
};

export default weatherDetails;
