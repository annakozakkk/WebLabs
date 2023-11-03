
import { getAllBicycles, postBicycles, updateBicycles, deleteBicycles } from './api.js';
import {
    clearInputs,
    renderItemsList,
    getInputValues,
    itemTemplate,
  } from "./dom_util.js"
  
const editContainer = document.getElementById("edit_container");
const editBrand = document.getElementById("edit_input");
const editSpeed = document.getElementById("edit_max_speed");
const editPrice = document.getElementById("edit_price")
const editBicycleType = document.getElementById("edit_bicycle_type");
const saveButton = document.getElementById("save_button");
const submitButton = document.getElementById("submit_button");
const createButton = document.getElementById("create_button");
const myBicycleButton = document.getElementById("my_bicycle_button");
const createContainer = document.getElementById("create_bicycle");
const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const searchInput = document.getElementById("search__input");
const manageInput = document.getElementById("managing_input");
const totalPrice = document.getElementById("total_price");
const countButton = document.getElementById("count_button");
const itemsContainer = document.getElementById("items_container");

let bicycles = []
let currentItem = null;

function onEditItem(item){
    editContainer.style.display= "flex";
    fillInputs(item);
    currentItem = item;
}

saveButton.addEventListener("click",async ()=>{
    if (currentItem) {
        const isNumericSpeed = /^\d+$/.test(editSpeed.value);
        const isNumericPrice = /^\d+$/.test(editPrice.value);

       if (!isNumericSpeed || !isNumericPrice || editBicycleType.value==="" 
        || editBrand.value ==="" || editPrice.value==="" || editSpeed.value==="") {
        alert("You have passed incorrect data");
        return;
    }
        const brand = editBrand.value;
        const maxSpeed = editSpeed.value;
        const price = editPrice.value;
        const type = editBicycleType.value;
        await updateBicycles(currentItem.id,{brand,maxSpeed,price,type})
        editContainer.style.display="none"
        refetchBicycles();
    }
})

const onDeleteItem = async (id) => {
    await deleteBicycles(id);
    refetchBicycles();
};


const refetchBicycles = async () => {
        const allBicycles = await getAllBicycles();
        console.log(allBicycles)
        bicycles = allBicycles;
        foundBicycles=bicycles;
        renderItemsList(bicycles,onEditItem,onDeleteItem);
        
};

createButton.onclick = function(){
    createContainer.style.display ='flex';

}
myBicycleButton.onclick = function(){
    createContainer.style.display='none';
}
const checkmarkSpan = document.getElementById("checkmark");
submitButton.addEventListener("click",async (event)=>{
    event.preventDefault();
 
    const {brand, maxSpeed,type,price} = getInputValues();
    // console.log({brand, maxSpeed,type,price});
    
    clearInputs();
    checkmarkSpan.style.display="inline";
    setTimeout(() => {
        checkmarkSpan.style.display = "none";
    }, 500); 
    
   const bicycles1 =await postBicycles({
        brand,
        maxSpeed,
        type,
        price
    })

    renderItemsList(bicycles1,onEditItem,onDeleteItem)
    
})
    
 
 const fillInputs =(item)=>{
  
    editBrand.value = item.brand;
    editBicycleType.value= item.type;
    editSpeed.value = item.maxSpeed;
    editPrice.value= item.price;

    return {brand: item.brand, maxSpeed: item.maxSpeed, price: item.price, type: item.type};
}

let foundBicycles=bicycles;
searchButton.addEventListener('click',()=>{
    foundBicycles = bicycles.filter(bicycle=> bicycle.brand.toLowerCase().includes(searchInput.value.toLowerCase()))
    renderItemsList(foundBicycles,onEditItem,onDeleteItem);
 })
 
 clearButton.addEventListener('click',()=>{
    foundBicycles=bicycles;
    renderItemsList(bicycles,onEditItem,onDeleteItem)
    searchInput.value='';
 })
 

 countButton.addEventListener("click", ()=>{
    const bicyclesToCount = foundBicycles.length > 0 ? foundBicycles :bicycles;
    const prices = bicyclesToCount.map(bicycle => bicycle.price);
    const total = prices.reduce((accumulator,currentPrice)=> accumulator + currentPrice , 0);
    
    totalPrice.innerText = total;
 }
 )

const renderSortedList= (bicycles)=>{
       itemsContainer.innerHTML='';
       let sortedBicycles = bicycles.slice();
       if(manageInput.checked){
           sortedBicycles.sort((a,b)=> a.maxSpeed - b.maxSpeed);
      }
      renderItemsList(sortedBicycles,onEditItem,onDeleteItem);
    
}

manageInput.addEventListener("change" ,()=>{
    renderSortedList(foundBicycles);
})
 refetchBicycles();
