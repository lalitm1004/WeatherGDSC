import React from 'react'

// NextUI Components
import { CardBody, CircularProgress, Divider, Image, Switch } from '@nextui-org/react';

import locationIcon from './assets/location_on.svg'

class ResultBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            weatherData : null,
            errorMessage : null,
            isCelsius : true,
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.locationInput !== this.props.locationInput && (this.props.locationInput !== "")) {
            this.fetchWeater()
        }
    }

    fetchWeater = async() => {
        try {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.locationInput}&appid=${this.props.apiKey}&units=metric`;
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (response.ok) {
                this.setState({weatherData : data, errorMessage : null});
            } else {
                console.error(`Error > ${data.message}`)
                this.setState({weatherData : null, errorMessage : data.message});
            }
        } catch (error) {
            console.error(`Error > ${error.message}`)
            this.setState({weatherData : null, errorMessage : error.message});
        }
    }

    capitalizeString(originalString) {
        const words = originalString.split(" ")
        const capitalizedString = words.map((ele) => {
            return (ele[0].toUpperCase() + ele.substring(1));
        }).join(" ")
        return capitalizedString;
    }

    convertToFahrenheit(tempInCelsius) {
        const fahrenheit = ((tempInCelsius * 9 / 5) + 32).toFixed(2);
        return fahrenheit
    }
    
    render() {
        return (
            <CardBody className=' text-4xl'>
                {this.props.locationInput === "" ? (
                    <></>
                ) : this.state.errorMessage ? (
                    <p className='text-center mb-2'>
                        Error: {this.capitalizeString(this.state.errorMessage)}
                    </p>
                ) : this.state.weatherData ? (
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center my-2">
                            <Image
                                src={locationIcon}
                                height={60}
                                width={60}
                            />
                            <p className="pt-2">{this.state.weatherData.name}</p>
                        </div>
                        <Divider />
                        <div className="flex flex-col justify-center items-center text-center my-2">
                            <div className="flex justify-center">
                                {this.state.isCelsius ? (
                                    this.state.weatherData.main.temp + "°C"
                                ) : (
                                    this.convertToFahrenheit(this.state.weatherData.main.temp) + "°F"
                                )}
                                <Switch
                                    className="mx-3 my-2"
                                    isSelected={!this.state.isCelsius}
                                    onValueChange={() => {this.setState({isCelsius : !this.state.isCelsius})}}
                                />
                            </div>
                            <p className="my-2">{this.capitalizeString(this.state.weatherData.weather[0].description)}</p>
                        </div>
                        <Divider />
                        <div className="flex justify-center my-2">
                            <Image
                                src={`https://openweathermap.org/img/wn/${this.state.weatherData.weather[0].icon}@2x.png`}
                                height={80}
                                width={80}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <CircularProgress aria-label='Loading...'/>
                    </div>
                )}
            </CardBody>
        );
    }
}
 
export default ResultBar;
