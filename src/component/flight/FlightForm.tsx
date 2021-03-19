import React from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import * as action from '../../redux/action/Flight';

const FlightForm: React.FunctionComponent = () => {

    const dispatch = useDispatch();

    const airlines : IAirline[] = useSelector((state: RootStateOrAny ) => state.Airline.airlines);
    const flight : IFlight = useSelector((state: RootStateOrAny ) => state.Flight.flight);

    const onChange = (event: any) => {
        let preEditFlight = {
            ...flight,
            [event.currentTarget.id]: event.currentTarget.value
        }
        dispatch(action.preEditFlight(preEditFlight));
    };

    const saveFlight = (e: React.FormEvent) => {
        e.preventDefault();
        if (flight.id === 0)
            dispatch(action.addFlight(flight));
        else
            dispatch(action.editFlight(flight));
    };

    return (
        <form onSubmit={saveFlight} className="formContainer">
            <input
                type="hidden"
                id="id"
                value={flight.id}
            />
            <input
                type="text"
                id="flightCode"
                placeholder="Flight Code"
                value={flight.flightCode}
                onChange={onChange}
            />
            <select id="airlineId" value={flight.airlineId} onChange={onChange}>
                <option key={0}>Select Airline</option>
                { airlines.map((airline, index) => (
                    <option key={index} value={airline.id}>
                        {airline.airlineName}
                    </option>
                ))}
            </select>
            <input
                type="text"
                id="origin"
                placeholder="Origin"
                value={flight.origin}
                onChange={onChange}
            />
            <input
                type="text"
                id="destination"
                placeholder="Destination"
                value={flight.destination}
                onChange={onChange}
            />
            <input
                type="date"
                id="departureDate"
                value={flight.departureDate}
                onChange={onChange}
            />
            <button disabled={(flight.flightCode === "" || flight.airlineId === 0 ||
                flight.origin === "" || flight.destination === "")}>
            <i className="fas fa-save"></i> Save flight</button>
        </form>
    );

}

export default FlightForm;