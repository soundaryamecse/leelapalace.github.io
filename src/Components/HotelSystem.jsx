import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from "./Header"
import PublicRoute from './PublicRoute'
import Footer from './Footer'

class HotelSystem extends React.Component{
    render()
    {
        return(
            <BrowserRouter>
                    <Header/>
                    <PublicRoute/>
                    <Footer/>
            </BrowserRouter>
        )
    }
}

export default HotelSystem