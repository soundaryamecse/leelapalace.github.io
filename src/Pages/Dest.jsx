import React from 'react'
// import {useRouteMatch} from 'react-router-dom'
import Destination from './Destination'


function Dest(props){
    // console.log(props.match.params.dest)
    // const {path,url}=useRouteMatch()
    // console.log(path,url)
    // let {dest}=useParams()
    // console.log(dest)
    return(
        // <Destination />
        <div>
            <Destination dest={props.match.params.dest} {...props}/>
        </div>
    )
}

export default Dest
