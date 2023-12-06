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
import { getBicycles } from "../../service/api";
import Loader from "../Loader/Loader";
import HomeHeader from '../Home/HomeHeader';

const homeText = {
  text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
  scelerisque tristique neque, eget facilisis purus consequat sit
  amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
  eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
  Quisque sed tincidunt felis. Sed bibendum`
};
 
const initialBicycles = []
const Home = () =>{
    const [bicycles,setBicycles ] = useState([]);
    const [countOfShown, setCountOfShown] = useState(4);
    const [viewMore, setViewMore] = useState('View more');
    const [isLoading,setIsLoading] =useState(false)
    function viewMoreBicycles() {
      const newCount = countOfShown === 4 ? 8 : 4;
      const newLabel = countOfShown === 4 ? 'View less' : 'View more';
      setCountOfShown(newCount);
      setViewMore(newLabel);
  }

  useEffect(()=>{
    setIsLoading(true)
    getBicycles().then(bicycles =>{
        setBicycles(bicycles);
        setIsLoading(false);
    })
      

  },[])

   
    return(
        <div>
          <HomeHeader/>
            <MainWrapper >
                <StyledText>
                  <p>{homeText.text}</p>
                  <StyledButton>
                    Detail
                </StyledButton>
                </StyledText>
            </MainWrapper>
            <CardWrapper>
             {isLoading?<Loader/>:""}
             {bicycles.slice(0, countOfShown).map((bicycle)=>(
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