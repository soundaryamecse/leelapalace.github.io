import React from 'react'
// import {useRouteMatch} from 'react-router-dom'
import TouristPageDestination from './TouristPageDestination'


function Dest(props){
    const {page_id}=props.match.params
    // const {path,url}=useRouteMatch()
    // console.log(path,url)
    // let {dest}=useParams()
    // console.log(dest)
    return(
        // <Destination />
        <div>
            <TouristPageDestination page_id={page_id} {...props}/>
        </div>
    )
}

export default Dest

