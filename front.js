var menuIcon = document.querySelector('.menu-icon')
var sidebar = document.querySelector('.sidebar')
var container = document.querySelector('.container')
menuIcon.onclick = function () {
    sidebar.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
}

document.querySelector('.search-box').onsubmit = function () {
    window.location = 'file:///C:/Users/user/Desktop/pro/html/first%20javascript/dark.html' + document.querySelector('.txt').value;
        return false;
} 