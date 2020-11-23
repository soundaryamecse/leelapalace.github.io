import React from 'react'
import Styled from 'styled-components'

const FooterNavWrapper=Styled.div`
    width:102%;
    height:50px;
    background:#6A1B9A;
    position:relative;
    top:200px;
    left:-13px;
    display:flex;
    color:white;
    justify-content:space-between;
    align-items:center;
    div{
        padding:10px;
    }
`
const FooterWrapper=Styled.footer`
    display:flex;
    position:relative;
    top:200px;
    justify-content:space-between;
    ul li{
        display:inline;
        color:#6A1B9A;
    }
`
function Footer(){
    return(   
        <div>
            <FooterNavWrapper>
                <div>DESTINATION</div>
                <div>ABOUT THE LEELA</div>
                <div>MEDIA</div>
                <div>LOYALITY</div>
                <div>CAREER</div>
                <div>CONTACT US</div>
                <div>OTHERS</div>
            </FooterNavWrapper>
            <FooterWrapper>
                <div><p>©2020 The Leela Palaces, Hotels and Resorts. All Rights Reserved</p></div>
                <div><p>Privacy | Policy | Legal | General | Terms and Conditions</p></div>
                <div><p>Connect With Us </p> </div>                 
                <div> <ul class="list-unstyled" >
                                <li><i class="fab fa-facebook-f pl-3"></i></li>
                                <li><i class="fab fa-twitter pl-3"></i></li>
                                <li><i class="fab fa-instagram pl-3"></i></li>
                                <li><i class="fab fa-linkedin-in pl-3"></i></li>
                                <li><i class="fab fa-github pl-3"></i></li>
                                <li><i class="fab fa-youtube pl-3"></i></li>
                            </ul>
				</div>	
			</FooterWrapper>
        </div> 

    )
}

export default Footer
