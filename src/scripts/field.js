let field = []

export const addPlant = (seeds) => {
    if (Array.isArray(seeds)) {
        for(const seed of seeds){
            field.push(seed)
        }
    }
    else {
        field.push(seeds)
    }
    return field
}

export const usePlants = () => {
    return field
}