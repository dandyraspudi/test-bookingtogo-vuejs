import axios from 'axios';

export default axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=271ab1b1&s=`
});