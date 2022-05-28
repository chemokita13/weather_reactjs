import React from 'react'

const weatherForm = props => {
    return (
        <div className='card card-body'>
            <form onSubmit={props.getWeather}>
                <div className='form-group m-1'>
                    <input type='text' name='city' className='form-control' placeholder='City' onChange={props.onChange} autoFocus />
                </div>
                <div className='form-group m-1'>
                    <input type='text' name='country' className='form-control' placeholder='Country' onChange={props.onChange} />
                </div>
                <div className='form-group d-grid gap-1 m-1 '>
                    <button className='btn btn-block btn-outline-light ' onClick={props.onSubmit}>Get Weather</button>
                </div>
            </form>
        </div>
    )
}

export default weatherForm