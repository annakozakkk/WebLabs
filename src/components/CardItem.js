import React from "react";

import {Card,Button} from "antd";
import {Footer} from "./CardItem.styled"
import {Link } from "react-router-dom";


const { Meta } = Card; 
const BICYCLE = "/bicycle/";
const CardItem = (props) =>{

    return(
    <Card
        hoverable 
        cover = {
            <img style={{width:300, height: 200}} src = {props.image}/>
        }
        style={{width:300}}
    >
    <Meta  title={props.title} description = {props.text}/>
    <Footer>
        <p style={{marginTop:10}}>${props.price}</p>
        <Link to={BICYCLE + `${props.id}`}>
            <Button>Detail</Button>
        </Link>
       
    </Footer>
   
    </Card>
    )
    }
    
export default CardItem;