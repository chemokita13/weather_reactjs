import React from 'react'

const weatherInfo = props => {

    return (

        <div className="weather-info">
            {
                props.error &&
                <div className='alert alert-danger'>
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                    <div>
                        <div className='card card-body'>
                            <p>
                                Location: {props.city}, {props.region} ({props.country})
                            </p>
                            <p>
                                <img src={props.img} alt={props.description} style={{ height: 50, weight: 50, marginRight: '1%' }} />
                                {props.description}
                            </p>
                            <p>
                                Temperature: {props.temperature} ºC, feels like {props.feels_like} ºC
                            </p>
                            <p>
                                Humidity: {props.humidity} %
                            </p>
                            <p>
                                Wind speed: {props.wind_speed} km/h
                            </p>
                        </div>
                    </div>
                    : null
            }

        </div>
    )

}

export default weatherInfo