import axios from "axios";


export const api = axios.create({
  baseURL: 'https://api.clarifai.com',
  headers: {
    "Authorization": "Key 9dce391ddb314f3c92d7da98d12faca6"
  }
})