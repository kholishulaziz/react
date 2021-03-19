import moment from 'moment';
import * as actionType from '../actionType';
import * as Const from '../../util/Const';

const initFlight = {
    id: 0,
    flightCode: "",
    airlineId: 0,
    airline: { id: 0, airlineName: "" },
    origin:  "",
    destination:  "",
    departureDate: moment().format(Const.HTML_FORMAT_DATE)
}

const initialState = {
    flights: [],
    flight: initFlight,
    flightMode: Const.MODE_VIEW
}

const reducer = (state = initialState, action : any) => {
    const { type, payload } = action;
    const flights : IFlight[] = state.flights;
    //console.log(action);
    switch (type) {
        case actionType.CHANGE_FLIGHT_MODE:
            return {
                ...state,
                flightMode: payload
            }
        case actionType.GET_ALL_FLIGHTS:
            return {
                ...state,
                flights: payload
            }
        case actionType.ADD_FLIGHT:
            return {
                ...state,
                flights: [...state.flights, payload],
                flight: initFlight,
                flightMode: Const.MODE_VIEW
            }
        case actionType.POPULATE_PRE_EDIT_FLIGHT:
            return {
                ...state,
                flight: {
                    ...payload,
                    airlineId: payload.airline.id,
                    departureDate: moment(payload.departureDate).format(Const.HTML_FORMAT_DATE)
                },
                flightMode: Const.MODE_EDIT
            }
        case actionType.PRE_EDIT_FLIGHT:
            return {
                ...state,
                flight: {
                    ...payload,
                    departureDate: moment(payload.departureDate).format(Const.HTML_FORMAT_DATE)
                },
                flightMode: Const.MODE_EDIT
            }
        case actionType.EDIT_FLIGHT:
            let updateFlight : IFlight[] = flights.map( flight => {
                if (flight.id === payload.id)
                    return payload
                else
                    return flight
            })
            return {
                ...state,
                flights: updateFlight,
                flight: initFlight,
                flightMode: Const.MODE_VIEW
            }
        case actionType.DELETE_FLIGHT:
            let filterFlights : IFlight[] = flights.filter( flight =>
                flight.id !== payload);
            return {
                ...state,
                flights: filterFlights,
                flightMode: Const.MODE_VIEW
            }
        default:
            return state
    }
}

export default reducer;

