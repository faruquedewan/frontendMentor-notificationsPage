const markAll = document.querySelector('a');
const number = document.getElementById('notification-number');
const notifications = document.querySelectorAll('.section-bottom > div');

markAll.addEventListener("click", () => {
    number.innerText = 0;
    notifications.forEach(element => {
        if(element.classList.contains('unread')){
            element.classList.remove('unread');
        }
    })
})

notifications.forEach(element => {
    element.addEventListener("click", () => {
        if(element.classList.contains('unread')){
            element.classList.remove('unread');
            number.innerText = number.innerText - 1;
        }
    })
})