import * as actionType from '../actionType';
import * as service from '../../service/Flight';

const changeMode = (mode : string) => {
    return (dispatch : any) => {
        dispatch({
            type: actionType.CHANGE_FLIGHT_MODE,
            payload: mode
        })
    }
}

const getAllFlights = () => {
    return (dispatch : any) => {
        return service.getAllFlights()
            .then((response: any) => {
                dispatch({
                    type: actionType.GET_ALL_FLIGHTS,
                    payload: response.data.body
                })
            })
    }
}

const addFlight = (flight: IFlight) => {
    return (dispatch : any) => {
        return service.addFlight(flight)
            .then((response: any) => {
                dispatch({
                    type: actionType.ADD_FLIGHT,
                    payload: response.data.body
                })
            })
    }
}

const populatePreEditFlight = (flight: IFlight) => {
    return (dispatch : any) => {
        dispatch({
            type: actionType.POPULATE_PRE_EDIT_FLIGHT,
            payload: flight
        })
    }
}

const preEditFlight = (flight: IFlight) => {
    return (dispatch : any) => {
        dispatch({
            type: actionType.PRE_EDIT_FLIGHT,
            payload: flight
        })
    }
}

const editFlight = (flight: IFlight) => {
    return (dispatch : any) => {
        return service.editFlight(flight)
            .then((response: any) => {
                dispatch({
                    type: actionType.EDIT_FLIGHT,
                    payload: response.data.body
                })
            })
    }
}

const deleteFlight = (flightId: number) => {
    return (dispatch : any) => {
        return service.deleteFlight(flightId)
            .then((response: any) => {
                dispatch({
                    type: actionType.DELETE_FLIGHT,
                    payload: flightId
                })
            })
    }
}

export {
    changeMode,
    getAllFlights,
    addFlight,
    populatePreEditFlight,
    preEditFlight,
    editFlight,
    deleteFlight
}
