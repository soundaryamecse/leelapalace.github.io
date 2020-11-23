import React from 'react'
// import { useParams,useRouteMatch,Route,Switch, Redirect } from 'react-router-dom'
// import Dest from './Dest'
// import {AppContext} from "../ContextAPI/AppContext"
import AreaWeb from './AreaWeb'

function Area(props)
{
    // const {match}=props
    // console.log(match)
    // let {path,url,exact}=useRouteMatch()
    // let {id}=useParams()  
    // console.log(path,url,id,exact)    
    return(
        <div>
            <AreaWeb id={props.match.params.id} {...props}/>
            
        </div>
    )
}
        

// Area.contextType=AppContext

export default Area