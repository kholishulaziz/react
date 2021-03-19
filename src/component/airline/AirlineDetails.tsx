import React from 'react';

const AirlineDetails: React.FunctionComponent<{airline : IAirline | any}> = ({airline}) => {

    return (
        <div className="container">
            <div>{airline.airlineName}</div>
        </div>
    );

}

export default AirlineDetails;