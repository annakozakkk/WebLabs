

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const searchInput = document.getElementById("search__input");
const itemsContainer = document.getElementById("items_container");
const manageInput = document.getElementById("managing_input");
const totalPrice = document.getElementById("total_price");
const countButton = document.getElementById("count_button");

const createBrand = document.getElementById("create_input");
const createSpeed = document.getElementById("max_speed")
const createPrice = document.getElementById("price");
const createBicycleType = document.getElementById("bicycle_type");
const submitButton = document.getElementById("submit_button");

const editContainer = document.getElementById("edit_container");
const editBrand = document.getElementById("edit_input");
const editSpeed = document.getElementById("edit_max_speed");
const editPrice = document.getElementById("edit_price")
const editBicycleType = document.getElementById("edit_bicycle_type");
const saveButton = document.getElementById("save_button");


let bicycles = []
const getInputValues = ()=>{
    const isNumericSpeed = /^\d+$/.test(createSpeed.value);
    const isNumericPrice = /^\d+$/.test(createPrice.value);

    if (!isNumericSpeed || !isNumericPrice) {
        alert("You have passed incorrect data");
        return;
    }

    return {
        brand: createBrand.value,
        maxSpeed: parseFloat(createSpeed.value),
        price: parseFloat(createPrice.value),
        type: createBicycleType.value,
    };
   
}
const clearInputs = ()=>{
    createBrand.value ="";
    createPrice.value="";
    createBicycleType.value="";
    createSpeed.value=""

}
searchButton.addEventListener("click",()=>{
    const inputValue = searchInput.value.trim();
    foundBicycles = bicycles.filter(
     bicycle => bicycle.brand.toLowerCase().includes(searchInput.value.toLowerCase()) 
   );
   if(inputValue === ""){
     itemsContainer.innerHTML ="";
   }
   else{

       renderItemsList(foundBicycles);

   }
   }
);

clearButton.addEventListener("click" ,()=>{
 foundBicycles = bicycles; 
 searchInput.value = ""; 
 renderItemsList(bicycles);
}
)

const addItem = ({brand, maxSpeed,type,price})=>{
    const generatedId = uuid.v1();

    const newItem = {
        id : generatedId,
        brand,
        maxSpeed,
        type,
        price
    };

    bicycles.push(newItem)
    addItemToPage(newItem)
}



const getItemId = (id) => `item-${id}`;
const itemTemplate=({id,brand, maxSpeed,type,price}) =>
    `<li id ="${getItemId(id)}" class = "item-bicycle">
    <p>Brand: ${brand}</p>
    <p>Max speed: ${maxSpeed}</p>
    <p>Type: ${type}</p>
    <p>Price: ${price}</p>
    <button id="edit_button_${id}">Edit</button>
</li>`;


let selectedItemID =null;
const addItemToPage = ({id,brand, maxSpeed,type,price})=>{
    itemsContainer.insertAdjacentHTML(
        'afterbegin',
        itemTemplate({id,brand, maxSpeed,type,price})
    );
    const editButton = document.getElementById(`edit_button_${id}`);
    editButton.onclick = function(){
        editContainer.style.display ="flex";
        selectedItemID=id;
        fillInputs({
            brand,
            maxSpeed,
            type,
            price
        });
    }
    
};
saveButton.onclick = function(){
    let editedItem = bicycles.find(item => item.id === selectedItemID);
    if(editedItem){
        const {brand, maxSpeed,type,price} = getEditedInputItems();
        editedItem.brand=brand,
        editedItem.maxSpeed= maxSpeed,
        editedItem.type = type,
        editedItem.price= price
    }
    renderItemsList(bicycles);
    editContainer.style.display="none";
}


const getEditedInputItems = ()=> {
    return {

        brand : editBrand.value,
        maxSpeed : parseFloat(editSpeed.value),
        type: editBicycleType.value,
        price : parseFloat(editPrice.value)
    }
}
    

const checkmarkSpan = document.getElementById("checkmark");
submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
 
    const {brand, maxSpeed,type,price} = getInputValues();
    clearInputs();
    addItem({brand, maxSpeed,type,price});
    checkmarkSpan.style.display="inline";
    setTimeout(() => {
        checkmarkSpan.style.display = "none";
    }, 500); 
 })

 

const renderItemsList =(items)=>{
    itemsContainer.innerHTML ='';

    for (const item of items){
       addItemToPage(item);
    } 
};

let foundBicycles=bicycles;

countButton.addEventListener("click", ()=>{
   const prices = foundBicycles.map(bicycle => bicycle.price);
   const total = prices.reduce((accumulator,currentPrice)=> accumulator + currentPrice , 0);
   
   totalPrice.innerText = total;
}
)


const addSortedItemToPage = ({id,brand, maxSpeed,type,price})=>{
    itemsContainer.insertAdjacentHTML(
        'afterbegin',
        itemTemplate({id,brand, maxSpeed,type,price})
    );
};
 
const renderSortedItemsList =(items)=>{
    itemsContainer.innerHTML="";
    for (const item of items){
       addSortedItemToPage(item);
    } 
};

 
function renderList(bicycles){

    itemsContainer.innerHTML="";
    let sortedBicycles = bicycles.slice();
    if(manageInput.checked){
        sortedBicycles.sort((a, b) => a.maxSpeed - b.maxSpeed);
    }
   
    renderSortedItemsList(sortedBicycles)
   
    
}


const fillInputs =(item)=>{

    editBrand.value = item.brand;
    editBicycleType.value= item.type;
    editSpeed.value = item.maxSpeed;
    editPrice.value= item.price;

}
manageInput.addEventListener("change" ,()=>{
    renderList(foundBicycles);
})
renderList(foundBicycles)

function openNav(event, navName){
   
   let i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(navName).style.display = "flex";
   event.currentTarget.className += " active";
 }
