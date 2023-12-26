import React from 'react'

// NextUI Components
import { CardHeader, Image } from '@nextui-org/react';

import gdscLogo from './assets/gdsc_logo.svg'

class TitleBar extends React.Component {
    render() { 
        return (
            <CardHeader className="flex flex-row justify-center">
                <Image
                    src={gdscLogo}
                    width={60}
                    height={60}
                />
                <div className="flex flex-col px-4">
                    <p className="text-md">WeatherGDSC</p>
                    <p className="text-small px-2 text-gray-700">A ReactJS App</p>
                </div>
            </CardHeader>
        );
    }
}
 
export default TitleBar;