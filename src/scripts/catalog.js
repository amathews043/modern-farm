let htmlString = ""

export const catalog = (foodArray) => {
    for (const food of foodArray) {
        htmlString += `<section class="plant"> ${food.type} </section>`
    }
    return htmlString
}