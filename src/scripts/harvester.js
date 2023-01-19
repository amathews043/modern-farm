
export const harvestPlants = (plantsArray) => {
    let harvest = []
    for (const plant of plantsArray){
        if (plant.type === "Corn") {
            plant.output = plant.output / 2
            for (let i =0; i < plant.output; i++){
                harvest.push(plant)
            }
        } else {
            for (let i =0; i < plant.output; i++){
                harvest.push(plant)
            }
    }
    }
    return harvest 
}

    // export const useHarvest = () => {
    //     return harvest 
    // }