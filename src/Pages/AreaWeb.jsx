import React from 'react'
import {AppContext} from "../ContextAPI/AppContext"
import {Link} from 'react-router-dom'
// import Carousel from "./Carousel"
import Styled from 'styled-components'
import ReadMoreAndLess from 'react-read-more-less'

const CarouselWrapper=Styled.div`
    position:relative;    
    width:103%;
   top:60px;
   left:-12px;
    z-index:-1;
    
`
const HotelGlance=Styled.div`
   position:relative;
    top:90px;    
    display:flex;
    justify-content:space-around;
    .glance{
        background:#6A1B9A;
        color:white;
        padding:10px;
    }
`
const GuestWrapper=Styled.div`   
    
    padding:10px;   
    position:relative;   
    top:70px;
    display:flex;
    flex-direction:column;
    img{
        z-index:1
    }
    div{
        background:#6A1B9A;
        color:white;
        text-align:right;
        padding:10px;
    }
    .desc{
        display:none;
    }
    

    .changingContent:hover{ 
        width:425px;
        .desc{
            display:inline-block;
            text-align:left;
            
        }
        
    }
    

`


const AddressWrapper=Styled.div`
   
    line-height:8px;
    position:relative;
    top:70px;
`
const OffersWrapper=Styled.div`
    justify-content:space-between;
    height:200px;
    display:flex;
    position:relative;
    top:150px;
     
    .glance{
        background:#6A1B9A;
        color:white;
        padding:10px;
    }

    .suite{
        display:flex;
        height:115px;
        background-repeat:no-repeat;
        background-size:100% 100%;
        color:white; 
        align-items:center;
        justify-content:center; 
             
               
    }
    .dull:hover{ 
        .bgText{
            display:flex;
            height:115px;
            width:100%;
            background: rgb(0,0,0);
            background: rgba(0,0,0, 0.4);  
            color:orange;
            font-size:25px;
            align-items:center;
            justify-content:center; 
        }
    }
`

const DescriptionWrapper=Styled.div`    
    position:relative;
    top:70px;
    #more{
        display:none;
    }
`
class AreaWeb extends React.Component{  
   
 render()
    {
        const id=this.props.id
        const {match}=this.props
        // console.log(match)
        const {data}=this.context
        // console.log(data)
         
        
        return(
            <div>
                <CarouselWrapper >
                    <div id="carouselExampleSlidesOnly carousel" className="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                        {data && data.filter(item=>item.fields.Notes===id)
                        .map((elem)=>(       

                                <>                
                                    <div className="carousel-item">
                                        <img src={elem.fields.Attachments[0].url} class="d-block" alt="..."/>
                                    </div>    
                                    <div className="carousel-item active">
                                        <img src={elem.fields.Attachments[1].url} class="d-block " alt="..."/>
                                    </div> 
                                    <div className="carousel-item">
                                        <img src={elem.fields.Attachments[2].url} class="d-block" alt="..."/>
                                    </div> 
                                    <div className="carousel-item">
                                        <img src={elem.fields.Attachments[3].url} class="d-block" alt="..."/>
                                    </div>                       
                            </>                             
                        ))}
                        </div>
                    </div>
                </CarouselWrapper>
               {data && data.filter(item=>item.fields.Notes===id)
                 .map((elem)=>(
                     <>
                        <DescriptionWrapper>
                            <ReadMoreAndLess ref={this.ReadMore} className="read-more-content" charLimit={250} readMoreText="Read More" readLessText="ReadLess">
                            {elem.fields.Description}
                            </ReadMoreAndLess>
                        </DescriptionWrapper>
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                            <AddressWrapper>
                                <h3>Hotel Co-ordinators</h3>
                                <div dangerouslySetInnerHTML={{__html:elem.fields.Address}}></div>
                            </AddressWrapper>
                            <GuestWrapper>   
                                {/* <div style={{backgroundImage:`url(${elem.fields.GuestPhoto[0].url})`}}>                           */}
                                    <img  src={elem.fields.GuestPhoto[0].url} alt="Guest"/>                 
                                    
                                    <div>
                                        <p>Guest</p>
                                        {/* <p className="desc">We Value the Guest think of us and value us and encourage reviews
                                            and feedback that only help us to serve them better.click here for the guest experiance
                                        </p> */}
                                    </div>   
                                {/* </div>                            */}
                             </GuestWrapper>
                             {/* {console.log(`/${id}/destination${id}`)} */}
                            <Link  to={`${match.url}/destination${id}`}><GuestWrapper>
                                <img src={elem.fields.Destination[0].url} alt="Destination" />
                                <div>
                                    <p>Destination</p>
                                 </div>
                            </GuestWrapper></Link>
                        </div>
                        <div>
                            <HotelGlance>
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{width:"60%"}}>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={elem.fields.HotelGlance[0].url} class="d-block "  height="280px" width="100%" alt="..."/>
                                            <div className="glance">ROOMS AND SUITS</div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={elem.fields.HotelGlance[1].url} class="d-block" height="280px" width="100%" alt="..."/>
                                            <div className="glance">MEETINGS</div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={elem.fields.HotelGlance[2].url} class="d-block " height="280px" width="100%" alt="..."/>
                                            <div className="glance">CELEBRATIONS</div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={elem.fields.HotelGlance[3].url} class="d-block" height="280px" width="100%" alt="..."/>
                                            <div className="glance">DINING</div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={elem.fields.HotelGlance[4].url} class="d-block" height="280px" width="100%" alt="..."/>
                                            <div className="glance">SPA</div>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={{position:"absolute",top:"-40px",left:"-40px"}}>
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <div>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next"  style={{position:"absolute",top:"-40px",right:"-40px"}}>
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a></div>
                             </div>
                             <div style={{width:"35%",marginLeft:"10px"}}>
                                 <h3>Hotel At a Glance</h3>
                                 <div style={{lineHeight:"18px",textAlign:"justify"}} dangerouslySetInnerHTML={{__html:elem.fields.HotelArea}}></div>
                             </div>
                        </HotelGlance>
                        <OffersWrapper>
                                <div style={{width:"30%"}}>
                                    <h3>Offers and More</h3>
                                    <div dangerouslySetInnerHTML={{__html:elem.fields.Offers}}></div>
                                </div>
                                <div style={{width:"35%"}}>
                                    <img src={elem.fields.SuiteOffer} width="100%"  height="200px" alt="offer"/>
                                    <div className="glance">SUITE INDULGENCES OFFER</div>
                                </div>
                                <div style={{width:"30%"}}>
                                    <div class="row">
                                        <div class="col p-1 text-center dull">
                                            <div className="suite" style={{backgroundImage: `url(${elem.fields.OffersApplicable[0].url})`}}>
                                               <div className="bgText"><p> StayCaution</p></div>
                                            </div>
                                        </div>
                                        <div class="col p-1 text-center dull">
                                            <div className="suite" style={{backgroundImage: `url(${elem.fields.OffersApplicable[1].url})`}}>
                                                <div className="bgText"><p>Suite Indulgences</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col p-1 text-center dull">
                                            <div className="suite" style={{backgroundImage: `url(${elem.fields.OffersApplicable[2].url})`}}>
                                               <div className="bgText"> <p>Business Offers</p></div>
                                            </div>
                                        </div>
                                        <div class="col p-1 text-center dull">
                                            <div className="suite" style={{backgroundImage: `url(${elem.fields.OffersApplicable[3].url})`}}>
                                                <div className="bgText"><p>Stay More Save More</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </OffersWrapper>
                        </div>
                     </>
                 ))}
            </div>
           
        )
    }
}

AreaWeb.contextType=AppContext

export default AreaWeb


// /* <Dotwrap left="145px" top="10px">
// {new Array(15).fill(0).map((a, i) => (
//     <Dots op={(10 / i) * 0.19} />
// ))}
// </Dotwrap>

// const Dotwrap = styled.div`
// position:absolute;
// top:${props => props.top ? props.top : null};
// left:${props => props.left ? props.left : null};
// right:${props => props.right ? props.right : "10px"};
// bottom:${props => props.bottom ? props.bottom : "10px"}; */

