import React from "react";
import { Link } from "react-router-dom";
import { Button} from "antd";
import { BicycleHeaderWrapper } from "./BicycleHeader.styled";
import  {ArrowLeftOutlined } from "@ant-design/icons";
const BicycleHeader =()=>{
      return(
        <BicycleHeaderWrapper>
            <Link to ="/catalog" >
                    <ArrowLeftOutlined  style={{ transform: "scale(2)",marginRight:20 }}/>
            </Link>
            <h2>Details of the bicycle</h2>
        </BicycleHeaderWrapper>
      
      )
}

export default BicycleHeader