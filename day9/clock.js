function greeting(name) {
    const date = new Date()
    const hours = date.getHours()

    let timeOFDay
    if (hours >= 4 && hours < 12) {
        timeOFDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOFDay = "afternoon"
    } else if (hours >= 17 && hours < 20) {
        timeOFDay = "evening"
    } else {
        timeOFDay = "night"
    }

    return `Good ${timeOFDay}, ${name}`
}
console.log(greeting("Bob"))