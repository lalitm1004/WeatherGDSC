import React from 'react'

// NextUI Components
import { NextUIProvider } from "@nextui-org/react";
import { Card, Divider } from "@nextui-org/react";

// App Components
import TitleBar from './Components/TitleBar/TitleBar';
import SearchBar from './Components/SearchBar/SearchBar';
import ResultBar from './Components/ResultBar/ResultBar';

// Environment Variables
const data = require("./secrets.json")

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            locationInput : ""
        }
    }

    updateLocation(newLocation) {
        this.setState({locationInput : newLocation});
    }

    render() {
        console.log(this.state)
        return (
            <div className="app h-screen flex justify-center items-center">
                <NextUIProvider className="">
                        <Card
                            className="flex justify-center items-center w-80 text-2xl lg:w-unit-8xl lg:text-5xl"
                            shadow='lg'
                        >
                            <TitleBar />

                            <Divider />

                            <SearchBar updateLocationCallback={(newLocation) => {this.updateLocation(newLocation)}}/>

                            <Divider />

                            <ResultBar 
                                apiKey={data["api_key"]}
                                locationInput={this.state.locationInput}
                            />
                        </Card>
                </NextUIProvider>
            </div>
        );
    }
}

export default App;
