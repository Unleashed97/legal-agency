export const handleBurger = () => {
    const burgerBtn = document.querySelector('.burger')
    const mobileMenu = document.querySelector('.m-menu')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        mobileMenu.classList.toggle('active')
    })

    window.addEventListener('click', ({ target }) => {})
}

export const handleNavScroll = () => {
    const burgerBtn = document.querySelector('.burger')
    const mobileMenu = document.querySelector('.m-menu')

    const navLinkList = document.querySelectorAll('.nav__link')

    navLinkList.forEach((navLink) =>
        navLink.addEventListener('click', () => {
            burgerBtn.classList.remove('active')
            mobileMenu.classList.remove('active')
        }),
    )
}
