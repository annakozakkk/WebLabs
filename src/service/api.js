import axios from 'axios';


const BASE_URL= 'http://localhost:8080/bicycles';
const FILTER_URL = 'http://localhost:8080/bicycles/filter';
const createUrl =({name,type,price,title})=>{
    return {
        name: name ,
        type: type,
        price: price,
        title: title,
      };
    
}
export const getBicycles =  async ()  =>{
    const response = await axios.get(BASE_URL);
    return response.data;}


export const getFilteredBicycles = async ({name,type,price,title}) =>{
    const params = createUrl({name,type,price,title});
    
    const response = await axios.get(FILTER_URL ,{params} );

  
    return response.data;
}

export const getBicycleById = async (itemId) =>{
    const response = await axios.get(`BASE_URL/${itemId}`);
    return response.data
}
