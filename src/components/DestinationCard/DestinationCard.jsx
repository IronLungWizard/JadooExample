import React from 'react'
import './DestinationCard.scss'
import DestinationsCardVector from '../../../src/images/DestinationsCardVector.svg?url'

const DestinationCard = ({picture, name, price, duration}) => {
    
    {
        return (
            <section className="destinationCard">
                <img className="destinationImage" src={picture}  alt=""/>
                <div className="destinationDescription">
                    <p className="spanDestinationName">{name}</p>
                    <p className="spanDestinationPrice">{price}</p>
                    <img className="destinationsCardVector" src={DestinationsCardVector} alt=""/>
                    <p className="spanDestinatioDuration">{duration}</p>
                </div>
            </section>
        )
    }

}

export default DestinationCard

