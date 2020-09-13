import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/Country/NotFound/NotFound';
import SingleCountry from './components/Country/SingleCountry/SingleCountry';
import CountryDetails from './components/Country/CountryDetails/CountryDetails';
function App() {
 
  return (
    <div>
     <Router>
       <Switch>
         <Route exact path="/">
           <Country></Country>
         </Route>
         <Route path="/country/:name">
           <CountryDetails></CountryDetails>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>

    </div>
  );
}

export default App;
