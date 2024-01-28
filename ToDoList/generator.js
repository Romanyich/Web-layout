/* Generates random ID */
export function getRandomId() {
    return Math.floor(Math.random() * Date.now()).toString(16)
}

/* Generates current date */
export function generateDate() {
    let objectDate = new Date()
    let day = objectDate.getDate()
    let month = objectDate.getMonth() + 1
    if (month < 10) {
        month = '0' + month
    }
    return day + "." + month
}