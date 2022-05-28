import React, { Component } from 'react'

// key
import { API_KEY } from './keys'

// weatherInfo component
import WeatherInfo from './components/weatherInfo'
// weatherForm component
import WeatherForm from './components/weatherForm'

class App extends Component {

    state={
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        error: null
    }
    /*
    main: Object { temp: 30.04, feels_like: 28.38, temp_min: 28.27, … }
​​
feels_like: 28.38
​​
humidity: 23
​​
pressure: 1009
​​
temp: 30.04
​​
temp_max: 31.02
​​
temp_min: 28.27
    */

    getWeather = async e => {

        const { city, country } = e.target.elements
        const cityValue = city.value
        const countryValue = country.value

        //preventDefault()
        e.preventDefault()

        // url api
        const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityValue},${countryValue}`

        const res = await fetch(API_URL)
        const data = await res.json()

        console.log(data)

        if(data.error) {
            this.setState({
                error: data.error.message
            })
        } else {
            this.setState({
                temperature: data.current.temp_c,
                description: data.current.condition.text,
                humidity: data.current.humidity,
                wind_speed: data.current.wind_kph,
                city: data.location.name,
                country: data.location.country,
                region: data.location.region,
                img: data.current.condition.icon,
                feels_like: data.current.feelslike_c,
                error: null
            })
        }
    }

    render() {
        return (
            <div className='container p-4'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <WeatherForm getWeather={this.getWeather} />
                        <WeatherInfo {...this.state}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App