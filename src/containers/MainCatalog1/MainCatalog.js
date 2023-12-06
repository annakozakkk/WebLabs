import React from "react";
import CardItem from "../../components/CardItem";
import { useState, useEffect } from "react";
import { CardWrapper } from "../Home/Home.styled";
import { getBicycles, getFilteredBicycles } from "../../service/api";
import Loader from "../Loader/Loader"
import { Button } from "antd";

const MainCatalog = ({ filters, bicyclesList }) => {
  const [filteredBicycles, setFilteredBicycles] = useState(bicyclesList);
  const [isLoading,setIsLoading] = useState(false)
  const [filtersApplied,setFiltersApplied] = useState(true)

  const handleFiltersApply= ()=>{
        setFiltersApplied(true)
  }
  useEffect(() => {
    setIsLoading(true)
    const fetchFilteredBicycles = async () => {
      try {
        const result = await getFilteredBicycles(filters);
        setIsLoading(false);
        setFilteredBicycles(result);
       
        setFiltersApplied(false)
       
      } catch (error) {
        console.error("Error fetching filtered bicycles:", error);
      }
    };

    if (filtersApplied) {
      fetchFilteredBicycles();
      setFiltersApplied(false)
    }
  }, [filters,filtersApplied]);



  return (
    
    <div >
      <div style={{display:"flex" ,justifyContent:"center",marginTop:50}}>
        <Button onClick={handleFiltersApply}>Apply and Search</Button>
      </div>
   
    <CardWrapper>  
    {isLoading ?<Loader/>:""}
      {filteredBicycles.map((bicycle) => (
        <CardItem
          id={bicycle.id}
          key={bicycle.id}
          title={bicycle.title}
          text={bicycle.text}
          image={bicycle.image}
          price={bicycle.price}
        />
      ))}
    </CardWrapper>
   
    </div>
  );
};

export default MainCatalog;



 // const filteredItems = bicyclesList.filter((item)=>{
           
      //       return(
      //         (item.title.toLowerCase().includes(filters.title.toLowerCase()))&&
      //         (filters.name === 'all' || item.title.toLowerCase().includes( filters.name.toLowerCase()))&&
      //               ((filters.price === 'all') ||
      //               (filters.price === 'cheap'&& item.price<500)||
      //               (filters.price === 'average' && item.price>500 && item.price<1000)||
      //               (filters.price ==='expensive' && item.price >1000)) &&
      //         (filters.type === 'all' || item.type === filters.type)
      //       );
      //     });
         