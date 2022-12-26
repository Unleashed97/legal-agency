export const handleBurger = () => {
    const burgerBtn = document.querySelector('.burger')
    const mobileMenu = document.querySelector('.m-menu')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        mobileMenu.classList.toggle('active')
    })
}
