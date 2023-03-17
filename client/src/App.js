//React Technologies
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

//Components
import Cards from './Cards'
import CreateScribbles from './CreateScribbles';
import EditPost from './EditPost';
import Header from './Header';
import Login from './Login';
import PersonalAccount from './PersonalAccount';
import Signup from './Signup';

// Initial Fetch All Properties
useEffect(function ()
{
    fetch("http://localhost:9292/properties")
        .then(function (resp)
        {
            return resp.json()
        })
        .then(function (data)
        {
            console.log(data)
            return setProperties(data)
        })
}, [currentProperty])



return (

    <div className="App">
    

      <Switch> 

            {/* do i already have this in cards? maybe put it here instead? */}
        <Route exact path = "/">
        </Route>
        
       
        <Route path = "/cards/:id">
         
        </Route>

        <Route path = "edit/posts">
      
        </Route>  


        <Route path = "scribbles" >
         
        </Route>
        
        <Route path = "my_account" >
         
         </Route>

      </Switch>

    </div>
  );

export default App

