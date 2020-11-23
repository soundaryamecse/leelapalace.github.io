import React from 'react'
import axios from 'axios'

export const AppContext=React.createContext()

class AppContextProvider extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            data:[]
        }
    }
    async componentDidMount()
    {
        let res=await axios.get("https://api.airtable.com/v0/appbFqVR6OTs0ozCR/Hotel%20Management%20System?api_key=keyygULji4MkbiY0I")
        this.setState({data:res.data.records}) 
            
    }

  

    render()
    {
        const {data}=this.state
        // console.log(data)
       
        const value={data}
        return(
            <AppContext.Provider value={value} >
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider