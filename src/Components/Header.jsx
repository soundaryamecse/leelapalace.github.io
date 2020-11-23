import React from 'react'
import {Link} from 'react-router-dom'
import Styled from 'styled-components'

const BookingWrapper=Styled.div` 
width:550px;
margin-left:150px;
div{
    border:2px solid #424242;
    
}
input{
    border:1px solid grey;    
    border-right:none;
    border-top:none;
    border-bottom:none;
    padding:4px;
}
input:first-child{
    border-left:none;
}
   
`
const imageWrapper=Styled.div`    
    position:relative;
    z-index:5;
    background-color:#fff;
    
`

const NavBarWrapper=Styled.div` 
    width:100%;
    .link{
        text-decoration:none;
        color:black;
    }
`

class Header extends React.Component{
    render(){
        return(
            <div style={{position:"fixed",top:"-15px",left:"0px",background:"white",height:"70px",paddingTop:"20px",width:"100%",zIndex:"15"}}>
                <div className="d-flex " >
                    <div className="">
                        <nav class="navbar navbar-light bg-white">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            </nav>
                            <NavBarWrapper>
                        <div className=" ">
                            <div className="  collapse bg-light" id="navbarToggle" >  
                                <div className="d-flex flex-column">
                                    <div className="col-12 p-3 border"><Link to="/Bangalore" className="link">Bangalore</Link></div>
                                    <div className="col-12 p-3 border"><Link to="/Chennai" className="link" >Chennai</Link></div> 
                                    <div className="col-12 p-3 border"><Link to="/Goa" className="link" >Goa</Link> </div>                  
                                </div>               
                            </div>                    
                        </div>
                </NavBarWrapper>
                        </div>
                    <imageWrapper><div className=""><img className=" shadow" src=" https://www.theleela.com/leela/static/img/black_logo_withshadow.png" height="100px" width="125px" alt="leelapalaceS" /></div></imageWrapper>
                    <div className="">
                        <BookingWrapper>
                                <div>                      
                                    <select class="custom-select border-0" style={{width:"150px"}} id="inlineFormCustomSelect">
                                        <option selected>Find a Hotel</option>
                                        <option value="Bangalore">Bangalore</option>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Goa">Goa</option>
                                    </select>
                                    
                                    <input type="date" name="arrival" placeholder="Arrival"/>
                                    <input type="date" name="departure" placeholder="Departure"/>
                                </div>
                        </BookingWrapper>
                    </div>
                    <div class=" " style={{marginLeft:"200px"}}>
                        <div className="row">
                            <div class="col">
                                <nav class="navbar navbar-light bg-white"  >
                                    <button class="navbar-toggler border-0 text-dark " style={{fontSize:"14px"}}  type="button" data-toggle="collapse" data-target="#profile" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                                            My Profile
                                    </button>
                                </nav>
                            </div>
                        </div>
                

                                <div className="collapse border bg-white" id="profile" style={{justifyItems:"center"}}>
                                    <div className="m-2">
                                        <input type="text"  placeholder="EMAIL" style={{padding:"10px"}}/>
                                    </div>
                                    <div className="m-2" >
                                        <input type="password"  placeholder="PASSWORD" style={{padding:"10px"}}/>
                                    </div>
                                    <div className="m-2">
                                        <button className=" ml-5 btn btn-warning">SIGN-IN</button>
                                    </div>
                                    <div className="d-flex m-2" style={{fontSize:"12px"}}>
                                        <div className="border-right p-1">FORGET PASSWORD</div>
                                        <div className="p-1">REGISTER NOW</div>
                                    </div>
                                </div>
                            </div>
                    
                </div>
                
            </div>
        
        )
    }
}

export default Header