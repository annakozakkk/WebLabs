

export const EDIT_BUTTON_PREFIX = 'edit_button_';
export const DELETE_BUTTON_PREFIX = 'delete_button_'


const itemsContainer = document.getElementById("items_container");
const manageInput = document.getElementById("managing_input");
const totalPrice = document.getElementById("total_price");
const countButton = document.getElementById("count_button");

const createBrand = document.getElementById("create_input");
const createSpeed = document.getElementById("max_speed")
const createPrice = document.getElementById("price");
const createBicycleType = document.getElementById("bicycle_type");


const getItemId = (id)=> `item_${id}`

export const itemTemplate = ({brand,maxSpeed,type,price,id}) =>{
      return `<li id = ${getItemId(id)}>
      <p id="brand">Brand: ${brand}</p>
      <p id="speed">Max speed: ${maxSpeed}</p>
      <p id="type">Type: ${type}</p>
      <p id= "price">Price: ${price}</p>
      <button id= "${EDIT_BUTTON_PREFIX}${id}"> EDIT</button>
      <button id= "${DELETE_BUTTON_PREFIX}${id}"> DELETE</button>
       </li>
      `     
}

const addItemToPage=({brand,maxSpeed,type,price,id},onEditItem,onDeleteItem)=>{
    itemsContainer.insertAdjacentHTML(
        'afterbegin',
        itemTemplate({brand,maxSpeed,type,price,id},onEditItem,onDeleteItem)
    )
    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click",()=>onEditItem({brand,maxSpeed,type,price,id}));
    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);
    deleteButton.addEventListener("click",()=>{onDeleteItem(id)})
        
    }


export const renderItemsList = (items,onEditItem,onDeleteItem)=>
{                            
    itemsContainer.innerHTML='';  
    for( const item of items) {
        addItemToPage(item,onEditItem,onDeleteItem);
    }
}

export const getInputValues=()=>{
    const isNumericSpeed = /^\d+$/.test(createSpeed.value);
    const isNumericPrice = /^\d+$/.test(createPrice.value);

    if (!isNumericSpeed || !isNumericPrice || createBicycleType.value==="" 
    || createBrand.value ==="" || createPrice.value==="" || createSpeed.value==="") {
        alert("You have passed incorrect data");
        return;
    }

    return{
        brand: createBrand.value,
        maxSpeed: createSpeed.value,
        type: createBicycleType.value,
        price: createPrice.value
       
    }
}

export const clearInputs = ()=>{
    createBrand.value ="";
    createPrice.value="";
    createBicycleType.value="";
    createSpeed.value=""
}

