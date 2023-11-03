import React from "react";
import Bicycle1 from "../../Icons/OIP (1).jpeg";
import Bicycle2 from "../../Icons/OIP.jpeg";
import Bicycle3 from "../../Icons/Colnago-C60-Disc-Shimano-Dura-Ace-9070-Di2-Complete-Bike-01.jpg"
import {
    StyledButton,
    StyledText,
    MainWrapper,
    CardWrapper
} from "./Home.styled"
import CardItem from "../../components/CardItem";
const homeText = {
  text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
  scelerisque tristique neque, eget facilisis purus consequat sit
  amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
  eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
  Quisque sed tincidunt felis. Sed bibendum`
};
 


const data = [
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
  ];
const Home = () =>{
    return(
        <div>
            <MainWrapper>
                <StyledText>
                  <p>{homeText.text}</p>
                  <StyledButton>
                    Detail
                </StyledButton>
                </StyledText>
            </MainWrapper>
            <CardWrapper>
           
             {data.map(({title,text,image,price},idx)=>(
                <CardItem
                    key= {idx}
                    title={title}
                    text = {text}
                    image= {image}
                    price={price}
                    id={idx}
                />
                   
             ))}
            </CardWrapper>
        </div>
    )
}
export default Home;