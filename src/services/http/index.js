import axios from 'axios';
import { fetch } from '../local-storage';

const getHeaders = async (options) => {
  let headers = {};
  const token = await fetch('auth');
  headers.Authorization = token;
  headers['Content-Type'] = 'application/json';
  headers = { ...headers };
  return headers;
}

const baseUrl =  "http://localhost:4000";

export const get = async (url,queryParams) => {
  const headers = await getHeaders()
  return axios.get(`${baseUrl}/${url}`, {
    headers,
  });
}


export const post = async (url, data, options) => {
  const headers = await getHeaders();
  return axios.post(`${baseUrl}/${url}`, data, {
    headers
  });
}


// export const delete = async (url, options) => {
//   const headers = await getHeaders(options);
//   return axios.delete(url, { headers });
// }

