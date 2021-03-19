import React from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import AirlineDetails from '../airline/AirlineDetails';
import * as action from '../../redux/action/Flight';
import * as Const from '../../util/Const';

const FlightDetails: React.FunctionComponent<{flight : IFlight}> = ({flight}) => {

    const dispatch = useDispatch();

    const editFlight = (flight : IFlight) => {
        dispatch(action.populatePreEditFlight(flight));
    };

    const deleteFlight = (flightId : number | any) => {
        dispatch(action.deleteFlight(flightId));
    };

    return (
        <div className="container">
            <h1><i className="fas fa-plane"></i> {flight.flightCode}</h1>
            <AirlineDetails airline={flight.airline}/>
            <div>
                <div><strong>{flight.origin} -&gt; {flight.destination}</strong></div>
                <div>{moment(flight.departureDate).format(Const.FORMAT_DATE)}</div>
            </div>
            <div>
                <i onClick={() => editFlight(flight)} className="fas fa-edit"></i>
                <i onClick={() => deleteFlight(flight.id)} className="fas fa-trash-alt"></i>
            </div>
        </div>
    );

}

export default FlightDetails;