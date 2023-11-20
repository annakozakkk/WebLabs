import React, { useState } from "react";
import Bicycle1 from "../../Icons/Colnago-C60-Disc-Shimano-Dura-Ace-9070-Di2-Complete-Bike-01.jpg"
import Bicycle2 from "../../Icons/OIP.jpeg"
import Bicycle3 from "../../Icons/OIP (1).jpeg"
import Bicycle4 from "../../Icons/завантаження.jpeg"
import Filter from "../Filter1/Fiter";
import MainCatalog from "../../MainCatalog1/MainCatalog";
import SearchInput from "../../containers/Search/SearchInput"
const initialBicycles =[
      {   id:1,
          title: "Mountain bicycle Swan",
          text: "Fast and light bicycle ",
          image:Bicycle1 ,
          price: 300,
          type : 'road'
        },
        {
          id:2,
          title: "Mountain bicycle Trek",
          text:
            "Perfect bicycle for begginers",
          image: Bicycle2,
          price: 540,
          type: 'mountain'
        },
        {
          id:3,
          title: "Mountain bicycle Colnago",
          text:
            "The most comfortable and fast bicycle",
          image: Bicycle3,
          price: 1610,
          type:'road'
        },
        {
          id:4,
          title: "Mountain bicycle FunnyTail",
          text:
            "Incredible feelings",
          image: Bicycle4,
          price: 1210,
          type:'road'
        }
  ];

  export function getBicycles(){
    return initialBicycles
  }
const Catalog = ()=>{

      const [filters,setFilters] = useState({title:'',price:'all',type:'all',name:'all'})
      const handleApplyFilter = (newFilters)=>{
            setFilters(newFilters);
      }
     
      return(
            <div>
                 <Filter filters={filters} handleApplyFilter = {handleApplyFilter}/> 
                
                 <MainCatalog filters={filters} bicyclesList ={initialBicycles} />
            </div>
      )

      }
export default Catalog

 