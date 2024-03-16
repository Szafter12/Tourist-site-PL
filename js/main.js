const burgerBtn = document.querySelector('.nav__burgerBtn')
const nav = document.querySelector('.nav__items')
const navItems = document.querySelectorAll('.nav__items-link')
const loaderContainer = document.querySelector('.loader-container')

const toggleNav = () => {
	nav.classList.toggle('show')

	navItems.forEach(item => {
		item.classList.toggle('show')

		item.addEventListener('click', () => {
			nav.classList.remove('show')
			navItems.forEach(items => items.classList.remove('show'))
		})
	})
}

window.addEventListener('load', () => {
	loaderContainer.classList.add('hide-loader')
})

burgerBtn.addEventListener('click', toggleNav)
