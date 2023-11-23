import React, { useEffect, useState } from "react";
import Meta from "antd/es/card/Meta";
import Bicycle1 from "../../../src/Icons/Colnago-C60-Disc-Shimano-Dura-Ace-9070-Di2-Complete-Bike-01.jpg"
import Bicycle2 from "../../../src/Icons/OIP.jpeg"
import Bicycle3 from "../../../src/Icons/OIP (1).jpeg"
import Bicycle4 from "../../../src/Icons/завантаження.jpeg"
import { SelectedCardWrapper,SelectedImage,SelectedInfo ,BicycleContent,BicycleTextContent} from "./SelectedCard.styled";
import { Button } from "antd";
import BicycleHeader from "./BicycleHeader";
import Card from "antd/es/card/Card";
import { useLocation } from "react-router-dom";
import "../SelectedCard/selectedCard.css"
import { getBicycles } from "../../service/api";
const text =`A bicycle is a means of transportation consisting
 of two wheels, a frame, pedals, and handlebars. 
 It operates through human power generated by pedaling. 
 Bicycles are a popular mode of physical activity and transportation, 
ideal for various terrains and purposes, from urban commuting to recreational riding.`

const SelectedCard =()=>{
  const [bicycles,setBicycles ] = useState([]);
  useEffect(()=>{
    getBicycles().then(bicycles =>{
        setBicycles(bicycles)
    })
  },[])
   
    const location= useLocation()
    const bicycleId = location.pathname.split('/')[2]
   
    const bicycleData = bicycles.find(b => b.id === Number(bicycleId) )
    if (!bicycleData) {
      
      return <div>Loading...</div>;
    }
  
    return(
       <SelectedCardWrapper>

           <BicycleHeader />
           <BicycleContent>
                <Card
                    hoverable 
                    cover = {
                        <img style={{width:400, height: 300}} src = {bicycleData.image}/>
                    }
                    style={{width:400,height:400}}
                    > 
                      <h2 style={{textAlign:'center'}}>
                        {bicycleData.title}
                      </h2>
              </Card>
              <div>
                    <div className="sel_item_description">
                      <p>{text}</p>
                    </div>
                    <div className="sel_item_price" >
                         <h2>Price: {bicycleData.price} $ </h2>
                        <Button className="buy">Buy Now</Button>
                    </div>
              </div>
            </BicycleContent>
      </SelectedCardWrapper>

    )
}

export default SelectedCard