console.log("Welcome to the main module")

import { createPlan } from "./plan.js"

const yearlyPlan = createPlan()

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
// import { useHarvest } from "./harvester.js"

// const asparagusSeed = createAsparagus()


// const cornSeed = createCorn()
// const potatoSeed = createPotato()
// const soybeanSeed = createSoybeans()
// const sunflowerSeed = createSunflower()
// const wheatSeed = createWheat()

// const plantingCorn = addPlant(cornSeed)
// const usingCorn = usePlants(plantingCorn)
// const plantingPotato = addPlant(potatoSeed)
// const usingPotato = usePlants(plantingPotato)

const planting = plantSeeds(yearlyPlan)
// console.log(usePlants())

const harvesting = harvestPlants(usePlants())
console.log(harvesting)



