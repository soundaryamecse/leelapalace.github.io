import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'

const DestinationDescriptionWrapper=Styled.div`
  position:relative;
  top:100px;
  .nameBox{
    
  }

`


class TouristPageDestination extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            touristPage:[]
        }
    }
    async componentDidMount(){
        const {page_id}=this.props
        console.log(page_id)
        let res=await axios.get(`https://api.airtable.com/v0/appbFqVR6OTs0ozCR/CityTourist/${page_id}?api_key=keyygULji4MkbiY0I`)
        this.setState({touristPage:res.data.fields})

    }
    render()
    {
        const {touristPage}=this.state 
        console.log(touristPage)
        const {Description1,Description2,Name,Description3,Attachments}=touristPage    
       console.log(Description1,Description2,Name,Description3,Attachments)
    //    let content=Object.values(Attachments)
       for(let i in Attachments)
       {
          
            var url=Attachments[i].url
       }
       console.log(url)
      
        return(
            <DestinationDescriptionWrapper>
                  <nav aria-label="breadcrumb" style={{marginTop:"-50px"}}>
                            <ol class="breadcrumb bg-white">
                                    <li class="breadcrumb-item"><div>Home</div></li>
                                    <li class="breadcrumb-item"><div>The Leela Goa</div></li>
                                    <li class="breadcrumb-item"><div>Overview</div></li>
                                    <li class="breadcrumb-item active">Destimation</li>
                                    <li class="breadcrumb-item active" aria-current="page">{Name}</li>
                                </ol>
                        </nav>
               <div className="nameBox bg-light p-2 m-2"><h2>{Name}</h2></div>
                <div class="card mb-3">                    
                        <img src={url} class="card-img-top" alt="..."/>                  
                    
                    <div class="card-body">                        
                        <p class="card-text">{Description1}</p>
                        <p class="card-text">{Description2}</p>
                        <div dangerouslySetInnerHTML={{__html:Description3}}></div>
                    </div>
                    </div>               
            </DestinationDescriptionWrapper>
        )
    }
}

export default TouristPageDestination