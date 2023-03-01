const getSecondsToTomorrow = () => {
    let dateNow = new Date()
    let tomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1)
    let diffDate = tomorrow - dateNow
    return Math.round(diffDate / 1000)
}
