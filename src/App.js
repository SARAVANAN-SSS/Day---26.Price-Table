import React, { Fragment } from 'react'
import Card from './card'
import "./App.css"


function App() {
    const data = [
        {
            title:"FREE",
            price:0,
            first:"Single User",
            second:"5GB Storage",
            third:"Unlimited Publlic Projects",
            fourth:"Community Access",
            fifth:"Unlimited Private Projects",
            sixth:"Dedicated Phone Support",
            seventh:"Free Subdomian",
            eight:"Monthly Status Reports",
            truechecked:true,
            falsechecked:false
        },
        {
            title:"PLUS",
            price:9,
            first:"5 Users",
            second:"50GB Storage",
            third:"Unlimited Publlic Projects",
            fourth:"Community Access",
            fifth:"Unlimited Private Projects",
            sixth:"Dedicated Phone Support",
            seventh:"Free Subdomian",
            eight:"Monthly Status Reports",
            truechecked:true,
            falsechecked:false
        },
        {
            title:"PRO",
            price:49,
            first:"Unlimited Users",
            second:"150GB Storage",
            third:"Unlimited Publlic Projects",
            fourth:"Community Access",
            fifth:"Unlimited Private Projects",
            sixth:"Dedicated Phone Support",
            seventh:"Unlimited Free Subdomian",
            eight:"Monthly Status Reports",
            truechecked:true,
            falsechecked:false
        },
    ]
  return (
    <div className='appbody'>
       <Card item={data[0]} />
       <Card item={data[1]} />
       <Card item={data[2]} />
    </div>
  )
}

export default App