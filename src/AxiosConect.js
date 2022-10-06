import axios from 'axios';

const BASE_URL = 'https://animalariumshop.herokuapp.com/';

const apiInstance = axios.create({baseURL:BASE_URL});

export default apiInstance;



export const AxiosTest = () =>{

    console.log(apiInstance);

}