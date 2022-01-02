import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
  const {data} = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'fb9afbab31msh0d05b6915b8ae51p1852b1jsn81faa1b2f021'
    }
  });

  return data;
}