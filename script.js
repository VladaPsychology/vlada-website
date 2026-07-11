const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');

menuButton.addEventListener('click', function () {
    sideMenu.classList.toggle('active');
});

const menuLinks = sideMenu.querySelectorAll('a');

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        sideMenu.classList.remove('active');
    });
});

document.addEventListener('click', function (event) {
    if (
        !sideMenu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        sideMenu.classList.remove('active');
    }
});