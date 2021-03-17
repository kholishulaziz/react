interface IFlight {
    id: number
    flightCode: string
    origin: string
    destination: string
    departureDate: string
    airline: string[]
    passengers?: string[]
    miscellaneous?: string[]
}