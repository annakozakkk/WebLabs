import React, { useState } from "react";
import Filter from "../Filter1/Filter";
import MainCatalog from "../MainCatalog1/MainCatalog";
import { useEffect } from "react";
import { getBicycles } from "../../service/api";
import { Button } from "antd";
import HeaderCatalog from "./HeaderCatalog";

const Catalog = ()=>{
      const [bicycles,setBicycles ] = useState([]);
      
      const [filters,setFilters] = useState({title:'',price:'all',type:'all',name:'all'})
      const handleApplyFilter = (newFilters)=>{
            setFilters(newFilters);
      }
      useEffect(()=>{
        getBicycles().then(bicycles =>{
            setBicycles(bicycles)
           
        })
      },[])

      
     
      return(
            <div>
                 <HeaderCatalog/>
                 <Filter filters={filters} handleApplyFilter = {handleApplyFilter}/> 
                 <MainCatalog filters={filters} bicyclesList ={bicycles} />
            </div>
      )

      }
export default Catalog

 