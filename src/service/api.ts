import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://apiv2.arguss.ai'
})