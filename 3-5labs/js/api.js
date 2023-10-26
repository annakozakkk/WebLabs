const BASE_URL ='http://localhost:8080';
const RESOURSE_URL = `${BASE_URL}/bicycles`;

const  baseRequest = ({url_path='',method ="GET",body=null})=>{
        const reqParams= {
            method,
            headers :{
                'Content-Type' : 'application/json'
            },
        };

        if (body){
            reqParams.body = JSON.stringify(body)
        }

        return  fetch(`${RESOURSE_URL}${url_path}`,reqParams).then(
            response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response;
            })
        }
export const getAllBicycles = ()=>{
    return baseRequest({method : 'GET'})
            .then(rawResponce => rawResponce.json());
        }
export const postBicycles =  (body)=>{
    return baseRequest({method:'POST', body})
           .then(rawResponce => rawResponce.json());
}
export const updateBicycles = (id,body) =>{
    return baseRequest({url_path:`/${id}`, method:"PUT",body})
}
export const deleteBicycles = (id) =>{
    return baseRequest({url_path: `/${id}`, method:"DELETE"})

}
