import { BASE_URL } from "./constant";
import axios from "axios"

export async function getAllData() {
    try {
      const response = await axios(`${BASE_URL}/product`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  
   export async function getDataById(id) {
    try {
      const response = await axios(`${BASE_URL}/products/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  export async function addNewPost(payload) {
    try {
      const response = axios.post(`${BASE_URL}/products`, payload);
  
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  

  