export type Ship = {
    id: string
    name: string
    type: string
    image: string
}

export type Mission = {
    __typename: string
    flight: string
    name: string
}

export type ShipItemDetails = {
    __typename: string
    type: string
    weight_kg: number
    year_built: number
    missions: Mission[]
    home_port: string
    
}