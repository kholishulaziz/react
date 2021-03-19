import Axios from 'axios';
import * as Const from '../util/Const';

export const getAllFlights = () =>
    Axios({
        method: "GET",
        url: process.env.REACT_APP_BASE_URL + Const.API_FLIGHTS
    });

export const addFlight = (flight: IFlight) =>
    Axios({
        method: "POST",
        url: process.env.REACT_APP_BASE_URL + Const.API_FLIGHT,
        data: flight
    });

export const editFlight = (flight: IFlight) =>
    Axios({
        method: "PUT",
        url: process.env.REACT_APP_BASE_URL + Const.API_FLIGHT + flight.id,
        data: flight
    });

export const deleteFlight = (flightId: number) =>
    Axios({
        method: "DELETE",
        url: process.env.REACT_APP_BASE_URL + Const.API_FLIGHT + flightId
    });