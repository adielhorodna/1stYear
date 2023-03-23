//React Technologies
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';

//Components
import Cards from './components/Cards'
import CreateScribble from './components/CreateScribble';
import EditPost from './components/EditPost';
import Header from './components/Header';
import Login from './components/Login';
import PersonalAccount from './components/PersonalAccount';
import Signup from './components/Signup';
import CardInfo from './components/CardInfo';
import LoginForm from './components/LoginForm';

function App() {
   
const [user, setUser] =useState(null)
const [showLogin, setShowLogin] = useState(true);

  // fetching the current user logged in

  useEffect(() => {
    // auto-login-->
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login setUser={setUser} />
  
 
 
return (


    // these routes are essentially 
    // creating links to our components 
    // that we want rendered on the frontend.

    <div className="App">

    <Header user={user} setUser = {setUser}/>

        
        {/* <Signup path = "/signup" 
           user={user} setUser = {setUser}/>  */}
      
      <Switch> 




        <Route exact path = "/">
            <Cards/>
        </Route>
        
       
        <Route path = "/cards/:id" >
          <CardInfo user_id = {user.id}/>
        </Route>

        <Route path = "/edit/posts/:id">
      <EditPost user_id = {user.id}/>
        </Route>  


        <Route path = "/scribble" >
        <CreateScribble user_id = {user.id}/>
        </Route>
        
        <Route path = "/my_account" >
        <PersonalAccount user_id = {user.id}  />
         </Route>

      </Switch>

    </div>
);
}

export default App

