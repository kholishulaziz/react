import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import FlightDetails from './FlightDetails';
import FlightForm from './FlightForm';
import * as action from '../../redux/action/Flight';
import * as Const from '../../util/Const';

const Flight : React.FunctionComponent = () => {

    // Returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed
    const dispatch = useDispatch();
    // By using this Hook, you tell React that your component needs to do something after render
    React.useEffect(() => {
       dispatch(action.getAllFlights())
    }, []);
    // Allows you to extract data from the Redux store state
    const flights : IFlight[] = useSelector((state: RootStateOrAny) => state.Flight.flights);
    const flightMode : string = useSelector((state: RootStateOrAny) => state.Flight.flightMode);

    const changeMode = (mode : string) => {
        dispatch(action.changeMode(mode));
    };

    return (
        <main>
            <h1>Flights</h1>
            <div style={{ display: flightMode === Const.MODE_VIEW ? "none" : "block" }}>
                <FlightForm />
            </div>
            { typeof flights!=="undefined" && flights.length ? flights.map((flight) => (
                <FlightDetails
                    key={flight.id}
                    flight={flight}
                 />
            )) : ""}
            <div className="container" style={{ display: flightMode === Const.MODE_VIEW ? "block" : "none" }}>
                <button onClick={() => changeMode(Const.MODE_ADD)}><i className="fas fa-plus"></i> Add Flight</button>
            </div>
        </main>
    );
}

export default Flight;