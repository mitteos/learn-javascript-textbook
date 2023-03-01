const getSecondsToday = () => {
    let dateNow = new Date()
    let today = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate())
    let diffDate = dateNow - today
    return Math.round(diffDate / 1000)
}
