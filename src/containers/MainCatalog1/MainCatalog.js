import React from "react";
import Bicycle1 from "../../src/Icons/Colnago-C60-Disc-Shimano-Dura-Ace-9070-Di2-Complete-Bike-01.jpg"
import Bicycle2 from "../../src/Icons/OIP.jpeg"
import Bicycle3 from "../../src/Icons/OIP (1).jpeg"
import Bicycle4 from "../../src/Icons/завантаження.jpeg"
import CardItem from "../components/CardItem";
import { useState} from "react";
import { useEffect } from "react";
import { CardWrapper } from "../containers/Home/Home.styled";



const MainCatalog = ({filters,bicyclesList})=>{
     
     const [filteredBicycles,setFilteredBicyles] = useState(bicyclesList);
     
     useEffect(()=>{

      const filteredItems = bicyclesList.filter((item)=>{
           
            return(
              (item.title.toLowerCase().includes(filters.title.toLowerCase()))&&
              (filters.name === 'all' || item.title.toLowerCase().includes( filters.name.toLowerCase()))&&
                    ((filters.price === 'all') ||
                    (filters.price === 'cheap'&& item.price<500)||
                    (filters.price === 'average' && item.price>500 && item.price<1000)||
                    (filters.price ==='expensive' && item.price >1000)) &&
              (filters.type === 'all' || item.type === filters.type)
            );
          });
          setFilteredBicyles(filteredItems)

         },[filters])
        return(
        <CardWrapper>
        {filteredBicycles.map((bicycle)=>(
            <CardItem 
              id ={bicycle.id}
              key={bicycle.id}
              title={bicycle.title}
              text={bicycle.text}
              image = {bicycle.image}
              price={bicycle.price}
             
            />
      ))}
      </CardWrapper>)
}
  
export default MainCatalog