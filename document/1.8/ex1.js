const showNotification = ({top = 0, right = 0, className, text}) => {

    let notification = document.createElement('div')
    notification.className = "notification";
    if (className) {
        notification.classList.add(className)
    }

    notification.style.top = top + 'px'
    notification.style.right = right + 'px'

    notification.innerHTML = text
    document.body.append(notification)

    setTimeout(() => notification.remove(), 1500)
}
