import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Productlist from './component/Productlist';
import Details from './component/Details';
import Cart from './component/cart/Cart'
import Default from './component/Default'
import Modal from './component/Modal'
class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar/>
       <Switch>
         <Route  exact path="/"  component={Productlist}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         <Route component={Default}/>
       </Switch>
       <Modal/>
     </React.Fragment>
    );
  }
}

export default App;
