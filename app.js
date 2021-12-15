const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.slider')
const header = document.querySelector('.header')

sidebar.style.top = `-${(slidesCount - 1)*100}vh`

let activeSlideIndex = 0

upBtn.addEventListener('click', () => {
	changeSlide('up')
})
downBtn.addEventListener('click', () => {
	changeSlide('down')
})

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount){
			activeSlideIndex = 0
		}
	}
	if (direction === 'down'){
		activeSlideIndex--
		if (activeSlideIndex < 0){
			activeSlideIndex = slidesCount - 1
		}
	}

	const height = container.clientHeight

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

window.addEventListener('scroll', () => {
	const scrollDist = window.scrollY

	document.querySelectorAll('.section').forEach((el, i,) => {
		if(el.offsetTop <= scrollDist){
			document.querySelectorAll('.header__nav-link').forEach((el) => {
				if (el.classList.contains('active')){
					el.classList.remove('active')
				}
			})
			
			document.querySelectorAll('.header__nav-item')[i].querySelector('.header__nav-link').classList.add('active')
		}
	})
})

$.scrollify({
	section: ".section",
	scrollbars: true,
})

const onClick = (i) => {
	$.scrollify.move(`#${i+1}`);
} 

document.querySelectorAll('.header__nav-item').forEach((el,i) => {
	el.addEventListener('click', () => {onClick(i)})
})