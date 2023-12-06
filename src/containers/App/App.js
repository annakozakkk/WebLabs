// import Header from "./Header/Header"
// import Footer from "./Footer/Footer"
// import Navigation from "../Navigation/Navigation"
import Home from "../Home/Home";
import Catalog from "../Catalog1/Catalog";
import SelectedCard from "../SelectedCard/SelectedCard";
import { Provider } from "react-redux";
import store from '../../Store/store';
import Cart, { CartPage } from '../Cart/CartPage';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
const App = ()=> {
   
  
    return(
       <Provider store={store}>
            <Router>
                <div>
                <Routes>
                    <Route path="/" element = {<Home/>}/>
                    <Route path="/catalog" element ={<Catalog/>}/>
                    <Route path="/cart" element ={<CartPage/>}/>
                    <Route path="/bicycle/:id" element={<SelectedCard/>}/>
                </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;

