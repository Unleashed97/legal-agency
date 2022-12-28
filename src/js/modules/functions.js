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

export const handleModal = () => {
    const modalOpenBtn = document.querySelector('.btn-modal-open')
    const modalCloseBtn = document.querySelector('.modal__close')
    const modal = document.querySelector('.modal')

    modalOpenBtn.addEventListener('click', () => {
        modal.classList.add('active')

        document.body.classList.add('fixed')
    })

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('active')
        document.body.classList.remove('fixed')
    })

    window.addEventListener('click', ({ target }) => {
        if (target === modal) {
            modal.classList.remove('active')
        }
    })
}
