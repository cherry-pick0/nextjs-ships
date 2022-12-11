export type Ship = {
    id: string
    class: number
    name: string
    type: string
    image: string
    weight_kg: number
    year_built: number
    missions: Mission[]
    home_port: string
}

export type Mission = {
    flight: string
    name: string
}