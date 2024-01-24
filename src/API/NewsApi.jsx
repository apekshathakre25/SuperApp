import axios from "axios";

const newsDetails = async () => {
  try {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const requestedUrl = `https://newsapi.org/v2/everything?q=Apple&apiKey=${apiKey}`;
    const getUrl = await axios.get(requestedUrl);
    const jsonData = getUrl.data.articles;
    return getUrl.data.articles[4]
    console.log(jsonData);
    
  } catch (error) {
    console.error(error);
  }
};
export default newsDetails;
