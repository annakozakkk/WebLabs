import React, {useState} from "react";
import { StyledFilterBlock,FiltersWrapper,StyledButton } from "./Filter.styled";
import Select from "./Select"
import SearchInput from "../Search/SearchInput";
import { Button } from "antd";
const Filter = ({filters,handleApplyFilter}) =>{
   


    const onFilterValueChanged= (event) =>{
        const {name,value} = event.target;
        
        handleApplyFilter((prevFilter) =>({...prevFilter,[name]: value}))    
    }
    
    

    const priceOptions =[
        { label:'All', value:'all'},
         {label:'cheap' ,value:'cheap'},
          {label:'average',value:'average'},
          {label:'expensive',value:'expensive'}
        
    ]
    const nameOptions=[
       
            {label:"All",value:"all"},
            {label:'Trek',value:'trek'},
            {label:'Colnago',value:'colnago'},
            {label:'Swan',value:'swan'},
            {label:'FunnyTail',value:'funnyTail'}
       
    ]
    const typeOptions = [
        
            {label:'All',value:'all'},
            {label:'Mountain',value:'mountain'},
            {label:'Road',value:'road'}
        


    ]
   
    return(
        
        <StyledFilterBlock>
            <SearchInput searchValue={filters.title} handleSearchValueChanged ={onFilterValueChanged}/>
            <FiltersWrapper>
            <label htmlFor="name-filter">
               <Select
                 id="name-filter"
                 name='name'
                 onChange={onFilterValueChanged}
                 options={nameOptions}
                />
            </label>
            <label htmlFor="type-filter">
                <Select
                    id="type-filter"
                    name='type'
                    onChange={onFilterValueChanged}
                    options={typeOptions}
                />
            </label>
            <label>
                <Select
                    id='price-filter'
                    name='price'
                    onChange={onFilterValueChanged}
                    options={priceOptions}
                />

               
            </label>
            </FiltersWrapper> 
           
        </StyledFilterBlock>
    )
}

export default Filter