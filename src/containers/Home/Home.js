import React, { useEffect, useState } from "react";
import Bicycle1 from "../../Icons/Colnago-C60-Disc-Shimano-Dura-Ace-9070-Di2-Complete-Bike-01.jpg"
import Bicycle2 from "../../Icons/OIP.jpeg"
import Bicycle3 from "../../Icons/OIP (1).jpeg"
import {
    StyledButton,
    StyledText,
    MainWrapper,
    CardWrapper,
    ButtonWrapper
} from "./Home.styled"
import { Button } from "antd";
import CardItem from "../../components/CardItem";
import { FontSizeOutlined } from "@ant-design/icons";
import AdditionalContent from "./AdditionalContent";

const homeText = {
  text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
  scelerisque tristique neque, eget facilisis purus consequat sit
  amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
  eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
  Quisque sed tincidunt felis. Sed bibendum`
};
 

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
      image: Bicycle3,
      price: 1210,
      type:'road'
    },
    {
      id:4,
      title: "Mountain bicycle FunnyTail",
      text:
        "Incredible feelings",
      image: Bicycle3,
      price: 1210,
      type:'road'
    },
    {
      id:4,
      title: "Mountain bicycle FunnyTail",
      text:
        "Incredible feelings",
      image: Bicycle3,
      price: 1210,
      type:'road'
    },
    {
      id:4,
      title: "Mountain bicycle FunnyTail",
      text:
        "Incredible feelings",
      image: Bicycle3,
      price: 1210,
      type:'road'
    },
    {
      id:4,
      title: "Mountain bicycle FunnyTail",
      text:
        "Incredible feelings",
      image: Bicycle3,
      price: 1210,
      type:'road'
    }

  ]
const Home = () =>{
    const [isVisible, setIsVisible] = useState(false)
    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more')
    function viewMoreBicycles() {
      const newCount = countOfShown === 4 ? 8 : 4;
      const newLabel = countOfShown === 4 ? 'View less' : 'View more';
      setCountOfShown(newCount);
      setViewMore(newLabel);
  }

   
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
           
             {initialBicycles.slice(0, countOfShown).map((bicycle)=>(
            <CardItem 
              id ={bicycle.id}
              key={bicycle.id}
              title={bicycle.title}
              text={bicycle.text}
              image = {bicycle.image}
              price={bicycle.price}
             
            />
      ))}
            </CardWrapper>
            <ButtonWrapper>
            <Button onClick={viewMoreBicycles} style={{width:150,height:40, fontSize:20}}>
                 {viewMore}
           </Button>
            </ButtonWrapper>
           
        </div>
    )
}
export default Home;