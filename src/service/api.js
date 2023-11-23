import axios from 'axios';


const BASE_URL= 'http://localhost:8080/bicycles';
const FILTER_URL = 'http://localhost:8080/bicycles/filter';
const createUrl =({name,type,price,title})=>{
    let url ='';
    url += price != ''?`?price=${price}`:'?';
    url+= name !=''?`&name=${name}`:'';
    url+=type!=''?`&type=${type}`:'';
    url+=title!=''?`&title=${title}`:'';
    return url;
}
export const getBicycles =  async ()  =>{
    const response = await axios.get(BASE_URL);
    return response.data;}


export const getFilteredBicycles = async ({name,type,price,title}) =>{
    const url = createUrl({name,type,price,title});
    const response = await axios.get(FILTER_URL + url);
  
    return response.data;
}
