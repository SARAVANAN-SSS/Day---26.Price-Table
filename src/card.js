import React from 'react'
import "./card.css"



function Card({item}) {
  return (
    <div className='fullcardbody'>
        <div className='top'>
            <h1>{item.title}</h1>
            <h1>${item.price}<sub>/month</sub></h1>
        </div>
        <hr />
        <div className='centerbody'>
            <ul className='unorderlist'>
               <li>
                   <input type="checkbox" checked={true}/>
                   <h2>{item.first}</h2>
               </li>
               <li>
                   <input type="checkbox" checked={true}/>
                   <h2>{item.second}</h2>
               </li>
               <li>
                   <input type="checkbox" checked={true}/>
                   <h2>{item.third}</h2>
               </li>
               <li>
                   <input type="checkbox" checked={true}/>
                   <h2>{item.fourth}</h2>
               </li>
               <li>
                   <input type="checkbox" checked={item.title ==="FREE"?false:true}/>
                   <h2>{item.fifth}</h2>
               </li>
               <li>
                   <input type="checkbox" checked={item.title ==="FREE"?false:true}/>
                   <h2>{item.sixth}</h2>
               </li>
               <li>
                   <input type="checkbox" checked={item.title ==="FREE"?false:true}/>
                   <h2>{item.seventh}</h2>
               </li>
               <li>
                   <input type="checkbox" checked={item.title ==="PRO"?true:false}/>
                   <h2>{item.eight}</h2>
               </li>
            </ul>
        </div>
        <div className='btn'>
        <button>BUTTON</button>
        </div>
    </div>
  )
}

export default Card