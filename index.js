let search = document.querySelector('.search')
let input = document.querySelector('input')
let btn = document.querySelector('.btn')

btn.addEventListener('click' , function() {
	search.classList.toggle('active')
	input.focus()
})
