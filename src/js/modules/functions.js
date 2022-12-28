export const handleBurger = () => {
    const burgerBtn = document.querySelector('.burger')
    const mobileMenu = document.querySelector('.m-menu')

    burgerBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        burgerBtn.classList.toggle('active')
        mobileMenu.classList.toggle('active')
    })

    document.addEventListener('click', ({ target }) => {
        if (target.closest('.m-menu')) return

        burgerBtn.classList.remove('active')
        mobileMenu.classList.remove('active')
    })
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
    const modalOpenBtnList = document.querySelectorAll('.btn-modal-open')
    const modalCloseBtn = document.querySelector('.modal__close')
    const modal = document.querySelector('.modal')

    modalOpenBtnList.forEach((btn) =>
        btn.addEventListener('click', () => {
            modal.classList.add('active')

            document.body.classList.add('fixed')
        }),
    )

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
