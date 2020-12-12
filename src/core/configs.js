
import axios from 'axios';


export const axiosInstance = axios.create({
  baseURL: 'https://mighty-anchorage-27247.herokuapp.com/api/', 
  headers: {"Access-Control-Allow-Origin": "*"}
});