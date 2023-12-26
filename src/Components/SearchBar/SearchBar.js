import React from 'react'

// NextUI Components
import { CardBody, Button, Input } from '@nextui-org/react';

class SearchBar extends React.Component {
    
    handleLocationInput() {
        const location = document.getElementById("location-input").value;
        this.props.updateLocationCallback(location);
    }
    
    render() {
        return (
            <CardBody>
                <div className="flex justify-center place-items-center">
                    <Input
                        id="location-input"
                        className="mx-2"
                        placeholder="Enter City name"
                    />
                    <Button 
                        color="primary"
                        onClick={() => this.handleLocationInput()}
                    >
                        Submit
                    </Button>
                </div>
            </CardBody>
        );
    }
}
 
export default SearchBar;