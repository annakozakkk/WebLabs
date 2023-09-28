

const searchButton = document.getElementById("search_button");
const clearButton = document.getElementById("clear_button");
const searchInput = document.getElementById("search__input");
const itemsContainer = document.getElementById("items_container");
const manageInput = document.getElementById("managing_input");
const itemsContainer1= document.getElementById("items_container_1");
const totalPrice = document.getElementById("total_price");
const countButton = document.getElementById("count_button");

// const createBrand = document.getElementById("create_input");
// const createSpeed = document.getElementById("max_speed")
// const createPrice = document.getElementById("price");
// const createBicycleType = document.getElementById("bicycle_type");
// const submitButton = document.getElementById("submit_button");

// const editContainer = document.getElementById("edit_container");
// const editBrand = document.getElementById("edit_input");
// const editSpeed = document.getElementById("edit_max_speed");
// const editPrice = document.getElementById("edit_price")
// const editBicycleType = document.getElementById("edit_bicycle_type");
// const saveButton = document.getElementById("save_button");

let bicycles = [
    {
    brand: "Colnago",
    maxSpeed:50,
    type:"mountain",
    price:100
    },
    {
        brand: "Trek",
        maxSpeed: 60,
        type:"mountain",
        price : 150
    },
    {
        brand: "MoutainBike",
        maxSpeed: 70,
        type:"road",
        price:200
    },
    {
        brand: "Colnago",
        maxSpeed: 50,
        type:"road",
        price:100
    }
]
const itemTemplate=({brand, maxSpeed,type,price}) =>
    `<li class = "item-bicycle">
    <p>Brand: ${brand}</p>
    <p>Max speed: ${maxSpeed}</p>
    <p>Type: ${type}</p>
    <p>Price: ${price}</p>
    <button id="edit_button">Edit</button>
     
</li>`;



const addItemToPage = ({brand, maxSpeed,type,price})=>{
    itemsContainer.insertAdjacentHTML(
        'afterbegin',
        itemTemplate({brand, maxSpeed,type,price})
    );
};

const renderItemsList =(items)=>{
    itemsContainer.innerHTML ='';

    for (const item of items){
       addItemToPage(item);
    } 
};


searchButton.addEventListener("click",()=>{
      const inputValue = searchInput.value.trim();
      const foundBicycles = bicycles.filter(
        bicycle => bicycle.brand.includes(searchInput.value)
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
    itemsContainer.innerHTML ="";
    searchInput.value="";
}
)

const addSortedItemToPage = ({brand, maxSpeed,type,price})=>{
    itemsContainer1.insertAdjacentHTML(
        'afterbegin',
        itemTemplate({brand, maxSpeed,type,price})
    );
};
 
const renderSortedItemsList =(items)=>{
    itemsContainer1.innerHTML="";
    for (const item of items){
       addSortedItemToPage(item);
    } 
};

 
function renderList(bicycles){

    itemsContainer1.innerHTML="";
    let sortedBicycles = bicycles.slice();
    if(manageInput.checked){
        sortedBicycles.sort((a, b) => a.maxSpeed - b.maxSpeed);
    }
   
    renderSortedItemsList(sortedBicycles)
   
    
}

manageInput.addEventListener("change" ,()=>{
    renderList(bicycles);
})
renderList(bicycles)


countButton.addEventListener("click", ()=>{
   const prices = bicycles.map(bicycle => bicycle.price);
   const total = prices.reduce((accumulator,currentPrice)=> accumulator + currentPrice , 0);
   
   totalPrice.innerText = total;
}
)
// const createBicycle = ()=>{
//     brand = createBrand.value;
//     maxSpeed = parseFloat(createSpeed.value);
//     price = parseFloat(createPrice.value);
//     type = createBicycleType.value;
    
//     const isNumericSpeed = /^\d+$/.test(maxSpeed);
//     const isNumericPrice = /^\d+$/.test(price);
   
    
//     if(!isNumericSpeed ){
//         alert("You have passed incorrect data")
//         return;
//     }
    
    
//     bicycle ={
//         brand: brand,
//         maxSpeed:maxSpeed,
//         type:type,
//         price:price
//     }
//     bicycles.push(bicycle);
//     addSortedItemToPage(bicycle);
//     createBrand.value="";
//     createPrice.value="";
//     createSpeed.value="";
//     createBicycleType.value=""
// }
 
// submitButton.addEventListener("click",()=>{
//       createBicycle();
// })






// itemsContainer1.addEventListener("click", (e) => {
//   if (e.target && e.target.matches("button#edit_button")) {
//     const listItem = e.target.closest("li.item-bicycle");

//     if (listItem) {
//       const index = Array.from(itemsContainer1.children).indexOf(listItem);

//       currentlyEditing = bicycles[index];

//       editBrand.value = currentlyEditing.brand;
//       editPrice.value = currentlyEditing.price;
//       editSpeed.value = currentlyEditing.maxSpeed;
//       editBicycleType.value = currentlyEditing.type;

//       editContainer.style.display = "flex";
//     }
//   }
// });

// saveButton.addEventListener("click", () => {
//   if (currentlyEditing) {
//     currentlyEditing.brand = editBrand.value;
//     currentlyEditing.type = editBicycleType.value;
//     currentlyEditing.price = editPrice.value;
//     currentlyEditing.maxSpeed = editSpeed.value;
//   }

//   renderList(bicycles);
//   editContainer.style.display = "none";
//   currentlyEditing = null;
// });
