import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className='service-container'>
        <ul>
            <li>
                <div className='text-Container'>
                    <h3 className='numbers-div'>230K+</h3>
                    <p className='content-text'>MEMORIALS</p>
                </div>
            </li>
            <li>
            <div className='text-Container'>
                    <h3 className='numbers-div'>230K+</h3>
                    <p className='content-text'>Families</p>
                </div>
            </li>
            <li>
            <div className='text-Container'>
                    <h3 className='numbers-div'>4.8M+</h3>
                    <p className='content-text'>Tributes</p>
                </div>
            </li>
            <li>
            <div className='text-Container'>
                    <h3 className='numbers-div'>200K+</h3>
                    <p className='content-text'>visitors</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Services