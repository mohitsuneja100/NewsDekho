import './App.css';
import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  
  const[progress,setProgress]=useState(0)
  
    return (
      <div>
     
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height="3px"
        />  
        <Switch>
          <Route exact path="/" >
            <News setProgress={setProgress} key="technology" cat="technology" heading="Top-Headlines"/>
          </Route>
          <Route exact path="/sports" >
           <News setProgress={setProgress} key="sports" cat="sports" heading="Sports"/>
          </Route>
          <Route exact path="/entertainment" > 
           <News setProgress={setProgress} key="entertainment" cat="entertainment" heading="Entertainment"/> 
          </Route> 
          <Route exact path="/health"> 
           <News setProgress={setProgress} key="health" cat="health" heading="Health"/> 
          </Route>
        </Switch>
        </Router>
          
      </div>
    )
  }
export default App;
