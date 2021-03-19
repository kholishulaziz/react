import * as actionType from '../actionType';
import * as service from '../../service/Airline';

const getAllAirlines = () => {
    return (dispatch : any) => {
        return service.getAllAirlines()
            .then((response: any) => {
                dispatch({
                    type: actionType.GET_ALL_AIRLINES,
                    payload: response.data.body
                })
            })
    }
}

export {
    getAllAirlines
}
