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
import Signup from './Signup';
import CardInfo from './components/CardInfo';

function App() {
    // TO DO : swtich user to mom
const [user, setUser] =useState(null)


 // auto-login!!-->


// useEffect(() => {
//     // auto-login
//     fetch("/me").then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   if (!user) return <Login onLogin={setUser} />;

// forces user to login first
if (!user) return <Login/>


return (

    // these routes are essentially 
    // creating links to our components 
    // that we want rendered on the frontend.

    <div className="App">

    <Header/>
      
        <Login user={user} setUser = {setUser}/>
      <Switch> 

       

        <Route exact path = "/">
            <Cards/>
        </Route>
        
       
        <Route path = "/cards/:id">
          <CardInfo />
        </Route>

        <Route path = "/edit/posts">
      <EditPost/>
        </Route>  


        <Route path = "/scribble" >
        <CreateScribble/>
        </Route>
        
        <Route path = "/my_account" >
        <PersonalAccount/>
         </Route>

      </Switch>

    </div>
  );
}

export default App

