import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Area from '../Pages/Area'
// import Destination from '../Pages/Dest'
import Dest from '../Pages/Dest'
import TouristPage from '../Pages/TouristPage'
// import AreaWeb from '../Pages/AreaWeb'


const PublicRoute=(props)=>{
    // let {path,url}=useRouteMatch()
    // console.log(path,url)
    // console.log(props)
    return(
        <Switch>          
            <Route exact path="/"><Redirect to="/Bangalore"></Redirect></Route>
             <Route exact path="/:id" render={(props)=><Area {...props}/>}/>   
             <Route  exact path="/:id/:dest" render={(props)=><Dest {...props}/>} /> 
             <Route exact path="/:id/:dest/:page_id" render={(props)=><TouristPage {...props}/>}/>       
       </Switch>
    )
}

export default PublicRoute