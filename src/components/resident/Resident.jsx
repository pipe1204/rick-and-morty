import React from 'react'
import fetch from '../../hooks/useFetch'
import "./resident.css"

const Resident = ({residentData}) => {

    const dataResident = fetch(residentData)

  return (
    <div className='resident__main__card scale-up-center'>
        <div className='resident__header__content'>
            <div className='resident__status'>
                <h3>{dataResident?.status === "Dead" ? "💀" : "😎"} {dataResident?.status}</h3>
            </div>
            <img src={dataResident?.image}/>
        </div>
        <div className='resident__body__content'>
            <div className='resident__name__content'>
                <h2 className='resident__name gradient__text'>{dataResident?.name}</h2>
            </div>
            <div className='resident__info__content'>
                <div className='resident__info'>
                    <h3>SPECIES</h3>
                    <p>{dataResident?.species}</p>
                </div>
                <div className='resident__info'>
                    <h3>ORIGIN</h3>
                    <p>{dataResident?.origin.name}</p>
                </div>
                <div className='resident__info'>
                    <h3>No. EPISODES</h3>
                    <p>{dataResident?.episode.length}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resident