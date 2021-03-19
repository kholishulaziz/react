interface IFlight {
    id?: number
    flightCode: string
    origin: string
    destination: string
    departureDate?: date
    airline?: IAirline
    airlineId?: number
    passengers?: string[]
    miscellaneous?: string[]
}

interface IAirline {
    id?: number
    airlineName: string
}