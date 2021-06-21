import axios from "axios";


export async function GetData(page: number) {
    try {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=5`);
      return result.data;
    } catch (error) {
      return [];
    }
  }

  export async function GetDataWithoutPagination() {
    try {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/photos`);
      return result.data;
    } catch (error) {
      return [];
    }
  }