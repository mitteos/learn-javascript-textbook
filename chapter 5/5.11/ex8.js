const formatDate = (date) => {
    let diffDate = new Date() - date

    if (diffDate < 1000) {
        return 'сейчас'
    }
    let min = Math.floor(diffDate / 60000)
    if (min < 60) {
        return `${min} мин. назад`
    }

    let sec = Math.floor(diffDate / 1000)
    if (sec < 60) {
        return `${sec} сек. назад`
    }

    let d = date
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2))

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')
}
