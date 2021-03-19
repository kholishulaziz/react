import Axios from 'axios';
import * as Const from '../util/Const';

export const getAllAirlines = () =>
    Axios({
        method: "GET",
        url: process.env.REACT_APP_BASE_URL + Const.API_AIRLINES
    });
