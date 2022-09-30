import React from 'react'
import "./location.css"

const Location = ({info}) => {

  return (
    <div className='location__main__content'>
        <h1 className='location__name gradient__text'>{info?.name}</h1>
        <div className='location__info'>
            <h2><span>Type:</span> {info?.type}</h2>
            <h2><span>Dimension:</span> {info?.dimension}</h2>
            <h2><span>Population:</span> {info?.residents.length}</h2>
        </div>
    </div>
  )
}

export default Location