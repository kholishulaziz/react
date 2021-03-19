import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import AirlineDetails from './AirlineDetails';
import * as action from '../../redux/action/Airline';

const Airline : React.FunctionComponent = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
       dispatch(action.getAllAirlines())
    }, []);

    const airlines : IAirline[] = useSelector((state: RootStateOrAny ) => state.Airline.airlines);

    return (
        <main>
            <h1>Airlines</h1>
            {airlines.map((airline) => (
                <AirlineDetails
                    key={airline.id}
                    airline={airline}
                 />
            ))}
        </main>
    );
}

export default Airline;