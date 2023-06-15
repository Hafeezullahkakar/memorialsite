import React from 'react'
import './Share.css'
function Share() {
  return (
    <div className="share-container" >
    <h1 className='share-main-text'>Preserve and share memories of your</h1>
    <p className='share-second-para'>loved ones</p>
    <div className='share-bottom-section'>
    <p className='share-text'>share memories of</p>
  <div className='action-section'>
    <input className='share-input' placeholder='First Name'/>
    <input className='share-input' placeholder='Last Name'/>
    <button className='share-mBtn'>Create</button>
  </div>
    </div>
  </div>
  )
}

export default Share