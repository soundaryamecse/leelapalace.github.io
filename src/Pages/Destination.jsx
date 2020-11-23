// import Axios from 'axios'
import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'
import {AppContext} from '../ContextAPI/AppContext' 

const ImageWrapper=Styled.div`
    img{
        width:102%;
        height:600px;
        position:relative;
        left:-11px;
    }

`
const CloudWrapper=Styled.div`
    padding:10px;
    color:white;
    height:80px;
    width:400px;
    font-size:18px;
    font-weight:bolder;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.4);
    
 
    position:relative;
    top:-100px;
    left:30px;
   .cloudTime{     
              
        display:flex;
        flex-direction:column; 
        margin:auto;
             
    }
    img{
        
    }

`
const TouristWrapper=Styled.div`
    text-align:center;
`

const ContentWrapper=Styled.div` 
    
    .view{
        background:#6A1B9A;
        color:white;
        float:right;
        
    }
    button{
        background:white;
        border:none;
        text-decoration:none;
        color:black;
    }
`



class Destination extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            destinationSpot:[]
        }
    }
    async componentDidMount()
    {
        let res=await axios.get("https://api.airtable.com/v0/appbFqVR6OTs0ozCR/DestinationRecord?api_key=keyygULji4MkbiY0I")
        this.setState({destinationSpot:res.data.records})
    }
    render()
    {
        // console.log(this.props)
        let {dest}=this.props
        let {match}=this.props
        const{destinationSpot}=this.state
        // console.log(dest)
        // console.log(destinationSpot)
        let dateTime=new Date()
        var n=dateTime.toLocaleTimeString()
        let displayTime=n.slice(0,5)+n.slice(8,11)
        // const {getData}=this.context
        
        return(
            <div>
                {destinationSpot && destinationSpot.filter(item=>item.fields.Name===dest)
                .map((elem)=>(
                    <>
                        {console.log(elem)}
                        <ImageWrapper>
                            <img src={elem.fields.image} alt="destImage"/>
                        </ImageWrapper>
                        <CloudWrapper>
                            <div class="d-flex" style={{}}>
                                <img src="https://www.theleela.com//img/ico/weather/cloudy.png" height="40px" width="40px" alt="cloud"/>
                                <div class="cloudTime" style={{}}>
                                    <div>CLOUDY</div>
                                    <div>26<sup>o</sup>C/78.8<sup>o</sup>F</div>
                                </div>
                                <div class="cloudTime">
                                    <div>Local Time</div>
                                    <div>{displayTime}</div>
                                </div>
                            </div>
                        </CloudWrapper>
                        <nav aria-label="breadcrumb" style={{marginTop:"-50px"}}>
                            <ol class="breadcrumb bg-white">
                                    <li class="breadcrumb-item"><div>Home</div></li>
                                    <li class="breadcrumb-item"><div>The Leela Goa</div></li>
                                    <li class="breadcrumb-item"><div>Overview</div></li>
                                    <li class="breadcrumb-item active" aria-current="page">Destimation</li>
                                </ol>
                        </nav>
                        <TouristWrapper>
                            <h2>{elem.fields.Tourist_Attractions}</h2>
                            <p>{elem.fields.Tourist_description}</p>
                            <div dangerouslySetInnerHTML={{__html:elem.fields.Hotel_Address}}></div>
                        </TouristWrapper>
                        <ContentWrapper>
                           <div className="d-flex flex-wrap justify-content-between">
                                {elem.fields.destination.map((item,i)=>( 
                                     <Link to={`${match.url}/${item}`} style={{textDecoration:"none",color:"black"}}>                                                   
                                            <div class="card mb-3 pb-3" style={{width: "25rem",height:"700px"}}>                                            
                                                        <img src={elem.fields.DestinationImage[i].url} height="250px" width="250px" class="card-img-top" alt="..."/>
                                                        <div class="card-body">
                                                            <h5 class="card-title">{elem.fields.DestinationName[i]}</h5>
                                                            <p class="card-text">{elem.fields.Description1[i]}</p>                                                
                                                        </div>
                                                    <div><button className="btn view mr-3">View More</button></div>                                           
                                            </div>
                                    </Link>
                                ))}
                            </div>
                        </ContentWrapper>
                        
                    </>
                ))}
            </div>
        )
    }
}

Destination.contextType=AppContext

export default Destination