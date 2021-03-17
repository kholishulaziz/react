import React from 'react';
import Axios from 'axios';
import * as Const from '../util/Const';

const Flight: React.FunctionComponent = () => {

    // Declare a new state variable, which we'll call "flights"
    const [flights, setFlights] = React.useState<IFlight[]>([]);

    // By using this Hook, you tell React that your component needs to do something after render
    React.useEffect(() => {
        Axios({
            method: 'get',
            url: process.env.REACT_APP_BASE_URL + Const.API_FLIGHTS
        })
        .then((response)=>{
            setFlights(response.data)
        })
    });

    return (
        <div>
            {flights.map((flight)=>(
                <div key={flight.id}>
                    {flight.flightCode}
                </div>
            ))}
        </div>
    );

}

export default Flight;