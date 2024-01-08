function toggleMenu() {
    const menu = document.querySelector('#sub-nav .menu-links');
    const icon = document.querySelector('#sub-nav .sub-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}
