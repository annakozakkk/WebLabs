import React from "react";
import Bicycle1 from "../../src/Icons/Colnago-C60-Disc-Shimano-Dura-Ace-9070-Di2-Complete-Bike-01.jpg"
import Bicycle2 from "../../src/Icons/OIP.jpeg"
import Bicycle3 from "../../src/Icons/OIP (1).jpeg"
import Bicycle4 from "../../src/Icons/завантаження.jpeg"
import CardItem from "../components/CardItem";
import { useState } from "react";


import { CardWrapper } from "../containers/Home/Home.styled";


const bicycles =[
    {
        title: "Mountain bicycle Swan",
        text: "Fast and light bicycle ",
        image:Bicycle1 ,
        price: 715,
      },
      {
        title: "Mountain bicycle Trek",
        text:
          "Perfect bicycle for begginers",
        image: Bicycle2,
        price: 540,
      },
      {
        title: "Mountain bicycle Colnago",
        text:
          "The most comfortable and fast bicycle",
        image: Bicycle3,
        price: 1610,
      },
      {
        title: "Mountain bicycle FunnyTail",
        text:
          "Incredible feelings",
        image: Bicycle4,
        price: 1210,
      },
     
];
const MainCatalog = ()=>{
      const [cards,setCards] = useState(bicycles)
      
      return(
        <CardWrapper>
        {cards.map(({title,image,text,price},idx)=>(
            <CardItem 
              key={idx}
              title={title}
              text={text}
              image = {image}
              price={price}
              idx={idx}
            />
      ))}
      </CardWrapper>
      )
      
}

export default MainCatalog