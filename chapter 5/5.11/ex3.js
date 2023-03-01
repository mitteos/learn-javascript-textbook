let date = new Date(2012, 0, 3)

const getLocalDay = (date) => {
    let day = date.getDay()

    if (day === 0) {
        day = 7
    }
    return day
}

alert( getLocalDay(date) )
