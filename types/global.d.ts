export type Location = {
    lat: string, 
    lng: string,
}

export type Egg = {
    id?: string,
    title?: string, 
    description?: string,
    coords?: Location,
    user?: Location,
}